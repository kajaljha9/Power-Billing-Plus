import "./LandingPage.css";
import Header from "./Header";
import LoginPageImage from "../../assets/hero-img.png.svg";
import GetStartImage from "../../assets/elec 1.svg";
import Features from "../../assets/features.svg";
// import Services from "../../assets/services.svg";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Grid } from "@mui/material";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Grid container >
      <Header />
      <div className="LandingPage">
        <div className="a1">
          <div className="head_div">
            <div>
              <h1>Welcome to Power Billing Plus!</h1>
              <br />
              <h4>Efficient and Effective Electricity Billing System</h4>
            </div>
            <br />

            <div className="contbtn">
              <Button
                // sx={{ zIndex: "-100" }}
                variant="contained"
                onClick={() => navigate("/login")}
              >
                Continue as User
              </Button>
              <Button
                // sx={{ zIndex: "-100" }}
                variant="contained"
                onClick={() => navigate("/adminlogin")}
              >
                Continue as Admin
              </Button>
            </div>
          </div>

          {/* <div className="loginImage">
            <img src={LoginPageImage} alt="app_img"></img>
          </div> */}
          <Grid items sx={{}}>
            <img src={LoginPageImage} alt="app_img"></img>
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <div id="about">
          <div className="a2">
            <div>
              <h4>About us</h4>
            </div>
            <br />
            <div>
              <p>
                <b>Empowering your energy choices for a brighter tomorrow.</b>
              </p>
              <p>
                NEABilling is an online platform that allows customers to
                conveniently generate, pay, and view their electricity bills.
                Through the system, customers can access their account and view
                their current and past electricity bills. The system
                automatically generates bills based on the customers electricity
                usage. This system provides customers with a hassle-free way to
                manage their electricity bills from the comfort of their homes.
              </p>
            </div>
          </div>
          <div className="GetStartImage">
            <img src={GetStartImage} alt="app_img" />
          </div>
        </div>
        <br />
        <br />
       
        <div className="a3" id="features">
          <img src={Features} alt="app_img"></img>
        </div>
       
       
        <br />
        <br />
        {/* <div className="a4">
          <img src={Services} alt="app_img"></img>
        </div> */}
      </div>
      <br />
      <div className="footer">

      <Footer />
      </div>
    </Grid>
  );
};

export default LandingPage;
