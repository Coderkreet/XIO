import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import UserMain from "../website/UserMain";
import DashboardMain from "../DashboardMain";
import UserHome from "../user/UserHome";
import ProfilePage from "../user/ProfilePage";
import Withdrawal from "../user/Withdrawal";
import WithdrawalReport from "../user/WithdrawalReport";
import OverallUserCustomPlan from "../user/OverallUserCustomPlan";
import TeamTree from "../user/TeamTree";
import AdminDashboard from "../admin/AdminDashboard";
import PaymentAproval from "../admin/PaymentAproval";
import BankDetails from "../user/BankDetails";
import FundRequestForm from "../user/FundRequestForm";
import FundTransferForm from "../user/FundTransferForm";
import FundRequestReport from "../user/FundRequestReport";
import FundTransferReport from "../user/FundTransferReport";
import DirectTeamLists from "../user/DirectTeamLists";
import FundAproval from "../admin/FundAproval";
import ReferralIncomeReports from "../user/income-pages/ReferralIncomeReports";
import SpinIncomeReports from "../user/income-pages/SpinIncomeReports";
import LevelIncomeReports from "../user/income-pages/LevelIncomeReports";
import RoyaltyIncomeReports from "../user/income-pages/RoyaltyIncomeReports";
import SelfIncomeReports from "../user/income-pages/SelfIncomeReports";
import PendingWithdrawalRequest from "../admin/PendingWithdrawalRequest";
import FundRecieveReport from "../user/FundRecieveReport";
import CompleteWithdrawalRequest from "../admin/CompleteWithdrawalRequest";
import RejectWithdrawalRequest from "../admin/RejectWithdrawalRequest";
import CompleteFundRequest from "../admin/CompleteFundRequest";
import RejectFundRequest from "../admin/RejectFundRequest";
import CompletePlanRequest from "../admin/CompletePlanRequest";
import RejectPlanRequest from "../admin/RejectPlanRequest";
import ComplainRaiseTicket from "../user/ComplainRaiseTicket";
import ComplainTicketHistory from "../user/ComplainTicketHistory";
import ComplainTicketList from "../admin/ComplainTicketList";
import AllUsersList from "../admin/AllUsersList";
import PurchasePlanHistory from "../user/PurchasePlanHistory";
import DirectReferralIncome from "../user/DirectReferralIncome";
import MatchingIncomeReports from "../user/income-pages/MatchingIncomeReports";
import AdminMatchingIncomeReports from "../admin/income-pages/AdminMatchingIncomeReports";
import AdminLevelIncomeReports from "../admin/income-pages/AdminLevelIncomeReports";
import AdminSelfIncomeReports from "../admin/income-pages/AdminSelfIncomeReports";
import AdminDirectReferralIncomeReports from "../admin/income-pages/AdminDirectReferralIncomeReports";
import AllPurchasePackageList from "../admin/AllPurchasePackageList";
import NewsandNotifs from "../admin/NewsandNotifs";
import Notification from "../user/Notification";
import WithdrawalUpdate from "../admin/WithdrawalUpdate";
import RoiIncomeReport from '../user/income-pages/RoiIncomeHistory';
import ActiveUsers from "../admin/ActiveUsers";
import DirectRefferalIncomeHistory from "../user/income-pages/DirectRefferalIncomeHistory";
import UpdateContent from "../admin/UpdateContent";

const Authenticate = () => {
    const role = localStorage.getItem("role");
    return (
        <>
            <Routes>
                {role === "Admin" && (
                    <>
                        {/* <Route
                            path={"*"}
                            element={
                                <DashboardMain
                                    inner={<AdminDashboard />}
                                    name="Dashboard"
                                />
                            }
                        /> */}
                        {/* <Route
                            path={
                                AuthenticatedRoutes.APPROVED_WITHDRAWAL_REQUEST
                            }
                            element={
                                <DashboardMain
                                    inner={<CompleteWithdrawalRequest />}
                                    name="Complete Withdrawal Request"
                                />
                            }
                        /> */}
                        <Route
                            path="*"
                            element={
                                <DashboardMain
                                    inner={<UpdateContent />}
                                    name="Update Content"
                                />
                            }
                        />
                    </>
                )}
                {/* {role !== "Admin" && (
                    <>
                        <Route
                            path={AuthenticatedRoutes.USER_HOME}
                            element={<UserMain />}
                        />
                        <Route
                            path={AuthenticatedRoutes.USER_DASHBOARD}
                            element={
                                <DashboardMain
                                    inner={<UserHome />}
                                    name="Dashboard"
                                />
                            }
                        />
                        <Route path="*" element={<UserMain />} />
                        <Route
                            path={AuthenticatedRoutes.USER_PROFILE}
                            element={
                                <DashboardMain
                                    inner={<ProfilePage />}
                                    name="Profile"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.BANK_DETAILS}
                            element={
                                <DashboardMain
                                    inner={<BankDetails />}
                                    name="Bank Detail"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.REFERRAL_INCOME_REPORT}
                            element={
                                <DashboardMain
                                    inner={<ReferralIncomeReports />}
                                    name="Referral Income Report"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.ROI_INCOME_REPORT}
                            element={
                                <DashboardMain
                                    inner={<RoiIncomeReport />}
                                    name="ROI Income Report"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.SPIN_INCOME_REPORT}
                            element={
                                <DashboardMain
                                    inner={<SpinIncomeReports />}
                                    name="Spin Income Report"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.LEVEL_INCOME_REPORT}
                            element={
                                <DashboardMain
                                    inner={<LevelIncomeReports />}
                                    name="Level Income Report"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.MATCHING_INCOME_REPORT}
                            element={
                                <DashboardMain
                                    inner={<MatchingIncomeReports />}
                                    name="Matching Income Report"
                                />
                            }
                        />
                        <Route
                            path={
                                AuthenticatedRoutes.DIRECT_REFERRAL_INCOME_REPORT
                            }
                            element={
                                <DashboardMain
                                    inner={<DirectReferralIncome />}
                                    name="Airdrop Income Report"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.ROYALTY_INCOME_REPORT}
                            element={
                                <DashboardMain
                                    inner={<RoyaltyIncomeReports />}
                                    name="Royalty Income Report"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.SELF_INCOME_REPORT}
                            element={
                                <DashboardMain
                                    inner={<SelfIncomeReports />}
                                    name="Self Income Report"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.TEAM_TREE}
                            element={
                                <DashboardMain
                                    inner={<TeamTree />}
                                    name="Team Tree"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.WALLET}
                            element={
                                <DashboardMain
                                    inner={<Withdrawal />}
                                    name="Wallet"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.WITHDRAWAL_REPORT}
                            element={
                                <DashboardMain
                                    inner={<WithdrawalReport />}
                                    name="Withdrawal Report"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.PURCHASE_PLAN_HISTORY}
                            element={
                                <DashboardMain
                                    inner={<PurchasePlanHistory />}
                                    name="Purchase History"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.OUR_PLANS}
                            element={
                                <DashboardMain
                                    inner={<OverallUserCustomPlan />}
                                    name="Our Plan"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.FUND_REQUEST}
                            element={
                                <DashboardMain
                                    inner={<FundRequestForm />}
                                    name="Fund Request"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.FUND_TRANSFER}
                            element={
                                <DashboardMain
                                    inner={<FundTransferForm />}
                                    name="Fund Transfer"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.FUND_REQUEST_HISTORY}
                            element={
                                <DashboardMain
                                    inner={<FundRequestReport />}
                                    name="Fund Request History"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.FUND_TRANSFER_HISTORY}
                            element={
                                <DashboardMain
                                    inner={<FundTransferReport />}
                                    name="Fund Transfer History"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.FUND_RECEIVE_HISTORY}
                            element={
                                <DashboardMain
                                    inner={<FundRecieveReport />}
                                    name="Fund Receive History"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.TEAM_DIRECT}
                            element={
                                <DashboardMain
                                    inner={<DirectTeamLists />}
                                    name="Direct Team"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.SUPPORT_RAISE_TICKET}
                            element={
                                <DashboardMain
                                    inner={<ComplainRaiseTicket />}
                                    name="Raise Ticket"
                                />
                            }
                        />
                        <Route
                            path={
                                AuthenticatedRoutes.SUPPORT_RAISE_TICKET_HISTORY
                            }
                            element={
                                <DashboardMain
                                    inner={<ComplainTicketHistory />}
                                    name="Raise Ticket"
                                />
                            }
                        />
                        <Route
                            path={AuthenticatedRoutes.NEWS_AND_NOTIF}
                            element={
                                <DashboardMain
                                    inner={<Notification />}
                                    name="Notification & Announcements "
                                />
                            }
                        />
                    </>
                )} */}
            </Routes>
        </>
    );
};

export default Authenticate;
