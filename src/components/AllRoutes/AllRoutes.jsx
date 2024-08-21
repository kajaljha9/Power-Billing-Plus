import { Route, Routes } from "react-router-dom";
import LandingPage from "../user/LandingPage";
import ForgotPassword from "../user/ForgotPassword";
import LoginPage from "../user/LoginPage";
import SignUp from "../user/SignUp";
import ViewBill from "../user/ViewBill";
import OldBills from "../user/OldBills";
import Payment from "../user/Payment";
import Profile from "../user/Profile";
import AdminLogin from "../admin/AdminLogin";
import AdminProfile from "../admin/AdminProfile";
import GenerateBill from "../admin/GenerateBill";
import AddUser from "../admin/AddUser";
import ManageUser from "../admin/ManageUser";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/viewbill" element={<ViewBill />} />
        <Route path="/oldbills" element={<OldBills />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/generatebill" element={<GenerateBill />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/manageuser" element={<ManageUser />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
