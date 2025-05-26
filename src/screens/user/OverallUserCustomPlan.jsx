import { useEffect, useState } from "react";
import "../../styles/user/CustomPlanCard.css";
import PageLoader from "../../components/ui/PageLoader";
import Swal from "sweetalert2";
import WalletOptionModal from "../../components/ui/WalletOptionModal";
import USDTPaymentMain from "../../components/wallet/USDTPaymentMain";
import { Modal } from "react-bootstrap";
import { Button2 } from "../../components/ui/Buttons";
import { MainContent } from "../../constants/content/MainContent";

const OverallUserCustomPlan = () => {
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [walletType, setWalletType] = useState(null);
  const [amount, setAmount] = useState("");
  const [showWalletModal, setShowWalletModal] = useState(false);



  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConfirm = () => {
    const value = parseInt(amount, 10);
    if (!value || value % 100 !== 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Entry",
        text: "Amount must be a multiple of 100.",
      });
      return;
    }
    setAmount(value);
    setShowWalletModal(true);
  };

  return (
    <>
      {loading && <PageLoader />}

      {showWalletModal && (
        <WalletOptionModal
          hide={() => setShowWalletModal(false)}
          connectWallet={(walletName) => {
            setWalletType(walletName);
            setShowPaymentModal(true);
          }}
        />
      )}

      <Modal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="BNBPaymentModal"
      >
        <Modal.Body>
          <div className="inner">
            <h4>{MainContent.appName}</h4>
            <USDTPaymentMain
              amount={amount}
              walletType={walletType}
              packageId={null}
              onSuccess={() => setShowPaymentModal(false)}
              onFailure={() => setShowPaymentModal(false)}
            />
            <div className="btns">
              <Button2
                className="closeBtn"
                name={"Close"}
                onClick={() => setShowPaymentModal(false)}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="MatrimonyUserCustomPlan OverallUserCustomPlan">
        <div className="glass-card">
          <h2>Enter Custom Amount</h2>
          <p>(Only multiples of 100 allowed)</p>
          <input
            type="number"
            min="100"
            step="100"
            value={amount}
            onChange={handleInputChange}
            placeholder="e.g., 100, 200..."
            className="text-black"
          />
          <button onClick={handleConfirm}>Proceed to Payment</button>
        </div>
      </div>
    </>
  );
};

export default OverallUserCustomPlan;
