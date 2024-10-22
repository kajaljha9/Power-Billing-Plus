import { Route, Routes } from "react-router-dom";
import LandingPage from "../user/LandingPage";
import ForgotPassword from "../user/ForgotPassword";
import LoginPage from "../user/LoginPage";
import ViewBill from "../user/ViewBill";
import OldBills from "../user/OldBills";
import Payment from "../user/Payment";
import Profile from "../user/Profile";
import SignUp from "../admin/SignUp";
import AdminLogin from "../admin/AdminLogin";
import AdminProfile from "../admin/AdminProfile";
import GenerateBill from "../admin/GenerateBill";
import AddUser from "../admin/AddUser";
import ManageUser from "../admin/ManageUser";
import Dashboard from "../admin/Dashboard/Dashboard";
import Reports from "../admin/Reports/Reports";
import Bill from "../admin/Bill";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      
        <Route path="/login" element={<LoginPage />} />
        <Route path="/viewbill" element={<ViewBill />} />
        <Route path="/oldbills" element={<OldBills />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/manageuser" element={<ManageUser />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/generatebill" element={<GenerateBill />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
