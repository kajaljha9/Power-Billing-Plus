import { Route, Routes } from "react-router-dom";
import LandingPage from "../user/LandingPage";
import LoginPage from "../user/LoginPage";
import ViewBill from "../user/ViewBill";
import OldBills from "../user/OldBills";
import Payment from "../user/Payment";
import Profile from "../user/Profile";
import ForgotPassword from "../user/ForgotPassword";
import AdminLogin from "../admin/AdminLogin";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/viewbill" element={<ViewBill/>}/>
        <Route path="/oldbills" element={<OldBills/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
