import "./ForgotPassword.css";
import Button from "@mui/material/Button";
import LoginPageImage from "../../assets/hero-img.png.svg";

const ForgotPassword = () => {
  return (
    <div className="ForgotPassword">
    
      <div className="fp1">
      
        <div id="left_child">
        <h3>Forgot Password</h3>
          <div>
            <h5>Enter the OTP code: </h5>
          </div>
          <div className="otpdiv">
            <input id="otp" value="0" />
            <input id="otp" value="0" />
            <input id="otp" value="0" />
            <input id="otp" value="0" />
          </div>
          <br />
          <div>
            <p>We have sent OTP code in your Gmail account.</p>
          </div>
          <br />
          <div className="proceed">
            {" "}
            <Button variant="contained">PROCEED</Button>
          </div>
        </div>
      </div>
      <div  id="right_child" className="imagefp">
        <img src={LoginPageImage} alt="app_img"></img>
      </div>
    </div>
  );
};

export default ForgotPassword;
