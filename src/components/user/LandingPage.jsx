import "./LandingPage.css";
import LoginPageImage from "../../assets/hero-img.png.svg";
import GetStartImage from "../../assets/elec 1.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="LandingPage">
      <div className="a1">
        <div className="head_div">
          <div>
            <h1>
              <b>Welcome to Power Billing Plus!</b>
            </h1><br/>
          </div>
          <div>
            <h4>Efficient and Effective Electricity Billing System</h4><br/>
          </div>
          <div className="contbtn">
            <Button variant="contained" onClick={() => navigate("/login")}>
              Continue as User
            </Button>
            <Button variant="contained" onClick={() => navigate("/adminlogin")}>
              Continue as Admin
            </Button>
          </div>
        </div>

        <div className="loginImage">
          <img src={LoginPageImage} alt="app_img"></img>
        </div>
      </div>
<br/><br/><br/>
      <div id="about">
        <div className="a2">
          <div>
            <h4>About us</h4>
          </div>
          <div>
            <p>
              NEABilling is an online platform that allows customers to
              conveniently generate, pay, and view their electricity bills.
              Through the system, customers can access their account and view
              their current and past electricity bills. The system automatically
              generates bills based on the customers electricity usage. This
              system provides customers with a hassle-free way to manage their
              electricity bills from the comfort of their homes.
            </p>
          </div>
        </div>
        <div className="GetStartImage">
          <img src={GetStartImage} alt="app_img" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
