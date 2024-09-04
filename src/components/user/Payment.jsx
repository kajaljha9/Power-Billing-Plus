import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Payment.css";
import Image from "../../assets/IMAGE.svg";
import Button from "@mui/material/Button";
import Header from "./Header";
import Footer from "./Footer";

const Payment = () => {
  return (
    <>
      <Header />
      <div className="Payment">
        <div className="paybox">
          <br />
          <div className="b1">
            <h2>Credit Card Payment</h2>
          </div>
          <div className="b2">
            <div>
              <h4>Payment Details</h4>
            </div>
            <div className="paymentimg">
              <img src={Image} alt="img"></img>
            </div>
          </div>
          <br />

          <div className="b3">
            <div>
              <Box
                sx={{
                  width: 400,
                  maxWidth: "100%"
                }}
              >
                <TextField fullWidth label="Card Number" id="fullWidth" />
              </Box>
            </div>
            <br />

            <div>
              <Box
                sx={{
                  width: 400,
                  maxWidth: "100%"
                }}
              >
                <TextField fullWidth label="Expiration Date" id="fullWidth" />
              </Box>
            </div>
            <br />

            <div>
              <Box
                sx={{
                  width: 400,
                  maxWidth: "100%"
                }}
              >
                <TextField fullWidth label="CV Code" id="fullWidth" />
              </Box>
            </div>
            <br />

            <div>
              <Box
                sx={{
                  width: 400,
                  maxWidth: "100%"
                }}
              >
                <TextField fullWidth label="Card Owner" id="fullWidth" />
              </Box>
            </div>
            <br />
            <div className="confirmbtn">
              <Button variant="contained" color="success">
                Confirm Payment
              </Button>
            </div>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
