import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Header from "./Header";
// import Footer from "./Footer";
import "./LoginPage.css";
import LoginPageImage from "../../assets/hero-img.png.svg";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Header from "./Header";
import Footer from "./Footer";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="LoginPage">
        <div className="login">
          <div className="loginfo">
            <h2>Power Billing Plus</h2>
            <br />
            <h3>Sign Up</h3>
            <br />
            <TextField
              sx={{ m: 0.5, width: "25ch" }}
              id="standard-basic"
              label="Full Name"
              variant="standard"
            />
            <br />
            <TextField
              sx={{ m: 0.5, width: "25ch" }}
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <br />
            <TextField
              sx={{ m: 0.5, width: "25ch" }}
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
            />
            <br />
            <FormControl sx={{ m: 0.5, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />

            <div>
              <Button variant="contained">Signup</Button>
            </div>

            <br />

            <div className="fp">
              <a href="##" onClick={() => navigate("/forgotpassword")}>
                Forgot password?
              </a>
            </div>
          </div>

          <div className="loginImage">
            <img src={LoginPageImage} alt="app_img"></img>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
