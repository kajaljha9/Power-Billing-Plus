import Image1 from "../../assets/image 4.svg";
import "./Profile.css";
import Button from "@mui/material/Button";
import Header from "./Header";
import Footer from "./Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="Profile">
      <br/>
        <div className="p1">
          <h2>Your Profile</h2>
        </div>
        <br/>
        <div className="card">
          <div className="div1">
            <img src={Image1} alt="img"></img>
          </div>
          <div className="div2">
            <p>Name : Albina Shrestha</p><br/>
            <p>Address : Nakhipot</p><br/>
            <p>Phone no : 9999999999</p><br/>
            <p>Email : albina@gmail.com</p><br/>
            <p>Password : *******</p><br/>
            <p>SCNO : 14596A</p><br/>
            <p>Customer ID : 11926</p><br/>
            <Button variant="contained" color="success" 
            // style={{ zIndex: -1, position: "relative" }}
            >Edit
            </Button>
          </div>
        </div>
      </div>
     <Footer />
    </>
  );
};

export default Profile;
