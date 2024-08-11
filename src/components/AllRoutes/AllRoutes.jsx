import { Route, Routes } from "react-router-dom";
import LandingPage from "../user/LandingPage";
import LoginPage from "../user/LoginPage";
import ViewBill from "../user/ViewBill";
import OldBills from "../user/OldBills";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/viewbill" element={<ViewBill/>}/>
        <Route path="/oldbills" element={<OldBills/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
