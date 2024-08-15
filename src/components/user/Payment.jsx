import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Payment.css";
import Image from "../../assets/IMAGE.svg";
import Button from "@mui/material/Button";

const Payment = () => {
  return (
    <div className="Payment">
      <div className="box">
        <div className="b1">
          <h2>Credit Card Payment</h2>
        </div>
        <div className="b2">
          <div>
            <h4>Payment Details</h4>
          </div>
          <div>
           
            <img src={Image} alt="img"></img>
          </div>
        </div>

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
                maxWidth: "100%",
              }}
            >
              <TextField fullWidth label="Card Owner" id="fullWidth" />
            </Box>
          </div>
          <br />
          <div className="b4">
            <Button variant="contained" color="success">
              Confirm Payment
            </Button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Payment;
