import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Header from "./Header";
// import Footer from "./Footer";
import "./LoginPage.css";

import LoginPageImage from "../../assets/hero-img.png.svg";

const LoginPage = () => {
  return (
    <div className="LoginPage">
    
      <div className="logbox">
        

        <div className="login">
          <div className="loginfo">
            <h3>Log in</h3>
            <br />
            <TextField
              id="filled-basic"
              label="Email address"
              variant="filled"
            />
            <br />
            <br />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <br />
            <br />

            <div>
              <Button variant="contained">Login</Button>
            </div>

            <br />

            <div className="fp">
              <a href="##">Forgot password?</a>
            </div>
          </div>

          <div className="loginImage">
            <img src={LoginPageImage} alt="app_img"></img>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LoginPage;
