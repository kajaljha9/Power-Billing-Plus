import Image1 from "../../assets/image 4.svg";
import "./Profile.css";
import Button from "@mui/material/Button";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="p1">
        <h4>Your Profile</h4>
      </div>
      <div className="card">
        <div className="div1">
          <img src={Image1} alt="img"></img>
        </div>
        <div className="div2">
          <p>Name : Albina Shrestha</p>
          <p>Address : Nakhipot</p>
          <p>Phone no : 9999999999</p>
          <p>Email : albina@gmail.com</p>
          <p>Password : *******</p>
          <p>SCNO : 14596A</p>
         <p>Customer ID : 11926</p>
         <Button variant="contained" color="success">
            Edit
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
