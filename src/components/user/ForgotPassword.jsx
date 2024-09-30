// import "./ForgotPassword.css";
// import Button from "@mui/material/Button";
// import LoginPageImage from "../../assets/hero-img.png.svg";
// import Header from "./Header";
// import Footer from "./Footer";

// const ForgotPassword = () => {
//   return (
//     <>
//     <Header/>
//     <div className="ForgotPassword">

//       <div className="fp1">

//         <div id="left_child">
//         <h3>Forgot Password</h3>
//           <div>
//             <h5>Enter the OTP code: </h5>
//           </div>
//           <div className="otpdiv">
//             <input id="otp" value="0" />
//             <input id="otp" value="0" />
//             <input id="otp" value="0" />
//             <input id="otp" value="0" />
//           </div>
//           <br />
//           <div>
//             <p>We have sent OTP code in your Gmail account.</p>
//           </div>
//           <br />
//           <div className="proceed">
//             {" "}
//             <Button variant="contained">PROCEED</Button>
//           </div>
//         </div>
//       </div>
//       <div  id="right_child" className="imagefp">
//         <img src={LoginPageImage} alt="app_img"></img>
//       </div>
//     </div>
//     <br/>
//     <Footer/>
//     </>
//   );
// };

// export default ForgotPassword;

import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import LoginPageImage from "../../assets/hero-img.png.svg";
import Header from "./Header";
import Footer from "./Footer";

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          margin: "2.5% 0% 4% 0%",
          display: "flex",
          justifyContent: "center",
          padding: "0% 2%",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-around" }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: "2%",
                backgroundColor: "#f6f9ff",
                borderRadius: "5%",
                boxShadow: 1,
                textAlign: "center",
              }}
            >
              <Typography variant="h5">Forgot Password</Typography>
              <Typography variant="h6" sx={{ margin: "1rem 0" }}>
                Enter the OTP code:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {Array.from({ length: 4 }, (_, index) => (
                  <TextField
                    key={index}
                    id={`otp-${index}`}
                    variant="outlined"
                    sx={{ width: "40px", marginLeft: "5px" }}
                    inputProps={{ maxLength: 1 }}
                  />
                ))}
              </Box>
              <Typography variant="body1">
                We have sent an OTP code to your Gmail account.
              </Typography>
              <Box sx={{ marginTop: "2rem" }}>
                <Button
                  variant="contained"
                  sx={{  width: "auto" }}
                >
                  PROCEED
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <img
              src={LoginPageImage}
              alt="app_img"
              style={{ width: "70%", maxWidth: "300px" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ForgotPassword;
