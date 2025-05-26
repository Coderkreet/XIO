import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  initiate2FAWithdrawal,
  sendWithdrawalresponse,
  verify2FAWithdrawal,
} from "../../api/payment-api";
import { Button5 } from "../../components/ui/Buttons";
import PageLoader from "../../components/ui/PageLoader";
import TextInput from "../../components/ui/TextInput";
import { SwalError } from "../../utils/custom-alert";

const Withdrawal = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(50);
  const [qrCode, setQrCode] = useState(localStorage.getItem("qrCode") || "");
  const [secretKey, setSecretKey] = useState(localStorage.getItem("secretKey") || "");
  const [otp, setOtp] = useState("");
  const [showOtpStep, setShowOtpStep] = useState(localStorage.getItem("showOtpStep") === "true");
  const [isFirstTime2FA, setIsFirstTime2FA] = useState(
    localStorage.getItem("isFirstTime2FA") === "true"
  );

  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const walletAddress = userInfo?.user?.walletAddress;

  const MIN_WITHDRAWAL_AMOUNT = 50;
  const PLATFORM_FEE_PERCENT = 10;
  const platformFee = (amount * PLATFORM_FEE_PERCENT) / 100;
  const netAmount = amount - platformFee;

  const handleWithdrawClick = async () => {
    if (amount < MIN_WITHDRAWAL_AMOUNT) {
      return SwalError.fire({
        title: "Error",
        text: `Amount must be at least $${MIN_WITHDRAWAL_AMOUNT}`,
        confirmButtonText: "OK",
        timer: 4000,
      });
    } else if (amount > userInfo?.user?.currentEarnings) {
      return SwalError.fire({
        title: "Error",
        text: "Insufficient Wallet Balance",
        confirmButtonText: "OK",
        timer: 4000,
      });
    }

    try {
      setLoading(true);
      const response = await initiate2FAWithdrawal({ walletAddress });
      const resData = response?.data || response;

      if (resData?.success) {
        if (resData?.qrCode && resData?.secret) {
          setQrCode(resData.qrCode);
          setSecretKey(resData.secret);
          setIsFirstTime2FA(true);

          // Persist in localStorage
          localStorage.setItem("qrCode", resData.qrCode);
          localStorage.setItem("secretKey", resData.secret);
          localStorage.setItem("isFirstTime2FA", "true");
        } else {
          setIsFirstTime2FA(false);
          localStorage.setItem("isFirstTime2FA", "false");
        }

        setShowOtpStep(true);
        localStorage.setItem("showOtpStep", "true");
      } else {
        throw new Error(resData?.message || "2FA Initiation Failed");
      }
    } catch (error) {
      console.error("2FA Init Error:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to initiate withdrawal",
        text:
          error?.response?.data?.error ||
          error.message ||
          "Something went wrong.",
        timer: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSend = async () => {
    if (!otp) {
      return SwalError.fire({
        title: "Missing OTP",
        text: "Please enter the OTP from your Authenticator app.",
        confirmButtonText: "OK",
        timer: 4000,
      });
    }

    try {
      setLoading(true);

      if (!window.ethereum) {
        throw new Error("MetaMask or SafePal wallet not found.");
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();

      const response = await verify2FAWithdrawal({
        walletAddress: userAddress,
        otp,
      });

      const resData = response?.data || response;

      if (resData?.success) {
        // ✅ OTP success, clear 2FA QR code info so scanner disappears
        setIsFirstTime2FA(false);
        setQrCode("");
        setSecretKey("");
        localStorage.setItem("isFirstTime2FA", "false");
        localStorage.removeItem("qrCode");
        localStorage.removeItem("secretKey");

        const withdrawalResponse = await sendWithdrawalresponse({
          userWalletAddress: walletAddress,
          amount,
        });

        if (withdrawalResponse?.data?.success) {
          Swal.fire({
            icon: "success",
            title: "Withdraw Successful",
            text: `Transaction initiated for $${netAmount} USDT.`,
            confirmButtonText: "Ok",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              clearLocalStorage();
              window.location.reload();
            }
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Withdrawal Success",
            text: withdrawalResponse?.message || "Something went wrong.",
            timer: 5000,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "OTP Verification Failed",
          text: resData?.message || "Invalid or expired OTP.",
          timer: 5000,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Transaction Failed",
        text:
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          "Something went wrong.",
        timer: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("qrCode");
    localStorage.removeItem("secretKey");
    localStorage.removeItem("isFirstTime2FA");
    localStorage.removeItem("showOtpStep");
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="Withdrawal">
        <div className="ss-card half martop">
          <div className="top">
            <h5 className="heading">
              Main Wallet: $
              {userInfo?.user?.currentEarnings?.toFixed(2) || 0}
            </h5>
          </div>

          <div className="input-container">
            <TextInput
              onChange={(e) =>
                setAmount(parseFloat(e.target.value) || 0)
              }
              placeholder={"Enter Amount"}
              labelName="Amount"
              value={amount}
            />

            <div style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
              <div style={{ color: "white", padding: "10px" }}>
                Platform Fee (10%): ${platformFee.toFixed(2)}
              </div>
              <div style={{ color: "white", padding: "10px" }}>
                Net You Receive: ${netAmount.toFixed(2)}
              </div>
            </div>
          </div>

          {!showOtpStep ? (
            <div className="btns ">
              <Button5 onClick={handleWithdrawClick} name={"Withdraw"} />
              
            </div>
          ) : (
            <div
              style={{ textAlign: "center", padding: "20px" }}
              className="flex flex-col justify-center align-center"
            >
              {isFirstTime2FA && qrCode && (
                <>
                  <img
                    src={qrCode}
                    alt="QR Code"
                    style={{ maxWidth: "300px", marginBottom: "10px" }}
                  />
                  <p
                    style={{ color: "#fff" }}
                    className="text-[1.4rem] mb-2 font-bold"
                  >
                    Scan this QR with your Google Authenticator app
                  </p>
                </>
              )}

              <TextInput
                placeholder={"Enter OTP"}
                labelName="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div className="btns" style={{ marginTop: "15px" }}>
                <Button5 onClick={handleOtpSend} name={"Confirm OTP"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
