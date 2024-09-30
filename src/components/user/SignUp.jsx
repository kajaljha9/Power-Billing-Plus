// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./LoginPage.css";
// import SignupImage from "../../assets/hero-img.png.svg";
// import { useNavigate } from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Header from "./Header";
// import Footer from "./Footer";
// import "./SignUp.css";

// const SignUp = () => {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const navigate = useNavigate();
//   return (
//     <div className="SignUp">
//       <Header />
//       <div className="SignUp1">
//         <div className="signup">
//           <div className="signinfo">
//             <h2>Power Billing Plus</h2>
//             <br />
//             <h3>Sign Up</h3>
//             <br />
//             <TextField
//               sx={{ m: 0.5, width: "25ch" }}
//               id="standard-basic"
//               label="Full Name"
//               variant="standard"
//             />
//             <br />
//             <TextField
//               sx={{ m: 0.5, width: "25ch" }}
//               id="standard-basic"
//               label="Email"
//               variant="standard"
//             />
//             <br />
//             <TextField
//               sx={{ m: 0.5, width: "25ch" }}
//               id="standard-basic"
//               label="Mobile Number"
//               variant="standard"
//             />
//             <br />
//             <FormControl sx={{ m: 0.5, width: "25ch" }} variant="standard">
//               <InputLabel htmlFor="standard-adornment-password">
//                 Password
//               </InputLabel>
//               <Input
//                 id="standard-adornment-password"
//                 type={showPassword ? "text" : "password"}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//               />
//             </FormControl>
//             <br />
//             <br />

//             <div>
//               <Button sx={{width:"fit-content"}} variant="contained">Signup</Button>
//             </div>

//             <br />

//             <div className="fp">
//               <a href="##" onClick={() => navigate("/forgotpassword")}>
//                 Forgot password?
//               </a>
//             </div>
//           </div>

//           <div className="signupImage">
//             <img className="signupImage2" src={SignupImage} alt="app_img"></img>
//           </div>
//         </div>
//         <br />
//       </div>
//       <Footer />

//     </div>
//   );
// };

// export default SignUp;

// ====================================================================================================

import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginPage.css";
import SignupImage from "../../assets/hero-img.png.svg";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Header from "./Header";
import Footer from "./Footer";
import Grid from "@mui/material/Grid"; 

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div className="SignUp">
      <Header />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 2 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <div className="signinfo">
            <h2>Power Billing Plus</h2>
            <h3>Sign Up</h3>
            <TextField
              sx={{ m: 0.5, width: "100%" }} // Changed to 100% for responsiveness
              label="Full Name"
              variant="standard"
            />
            <TextField
              sx={{ m: 0.5, width: "100%" }}
              label="Email"
              variant="standard"
            />
            <TextField
              sx={{ m: 0.5, width: "100%" }}
              label="Mobile Number"
              variant="standard"
            />
            <FormControl sx={{ m: 0.5, width: "100%" }} variant="standard">
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
            <Button
              sx={{ width: "fit-content", marginTop: 2 }}
              variant="contained"
            >
              Signup
            </Button>
            {/* <div className="fp">
              <a href="##" onClick={() => navigate("/forgotpassword")}>
                Forgot password?
              </a>
            </div> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="signupImage">
            <img
              className="signupImage2"
              src={SignupImage}
              alt="app_img"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default SignUp;







