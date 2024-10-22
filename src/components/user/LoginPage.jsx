import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginPage.css";
import LoginPageImage from "../../assets/hero-img.png.svg";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Typography, Grid } from "@mui/material";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Box
        className="LoginPage"
        sx={{ padding: { xs: "20px", md: "40px" }, backgroundColor: "#f0f4ff" }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="loginfo" sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                Power Billing Plus
              </Typography>
              <Typography variant="h5" sx={{ marginBottom: 4 }}>
                User Login
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: 4 }}>
                You can only login if you are registered from the admin!
              </Typography>
              <TextField
                id="username"
                label="Enter Username"
                variant="filled"
                fullWidth
                sx={{ marginBottom: 2 }}
              />
              <FormControl variant="filled" fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment sx={{ width: "auto" }}>
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
              <Button
                variant="contained"
                onClick={() => {
                  /* Handle login */
                }}
                fullWidth
              >
                Login
              </Button>
              <Box sx={{ marginTop: 2 }}>
                <a
                  href="##"
                  onClick={() => navigate("/forgotpassword")}
                  className="fp"
                >
                  Forgot password?
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <img
              className="loginImage"
              src={LoginPageImage}
              alt="Login Illustration"
              style={{ width: "100%", maxWidth: "400px" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
