// // import {
// //   AppBar,
// //   Box,
// //   Button,
// //   CssBaseline,
// //   Divider,
// //   Drawer,
// //   IconButton,
// //   List,
// //   ListItem,
// //   ListItemButton,
// //   ListItemText,
// //   Toolbar,
// //   Typography
// // } from "@mui/material";
// // import PropTypes from "prop-types";
// // import React from "react";
// // import MenuIcon from "@mui/icons-material/Menu";
// import "./Header.css";
// import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

// // import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   // const drawerWidth = 240;
//   // const navItems = ["Home", "About", "Contact"];

//   // return function DrawerAppBar(props) {
//   //   const { window } = props;
//   //   const [mobileOpen, setMobileOpen] = React.useState(false);

//   //   const handleDrawerToggle = () => {
//   //     setMobileOpen((prevState) => !prevState);
//   //   };

//   //   const drawer = (
//   //     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//   //       <Typography variant="h6" sx={{ my: 2 }}>
//   //         MUI
//   //       </Typography>
//   //       <Divider />
//   //       <List>
//   //         {navItems.map((item) => (
//   //           <ListItem key={item} disablePadding>
//   //             <ListItemButton sx={{ textAlign: "center" }}>
//   //               <ListItemText primary={item} />
//   //             </ListItemButton>
//   //           </ListItem>
//   //         ))}
//   //       </List>
//   //     </Box>
//   //   );
//   //   DrawerAppBar.propTypes = {
//   //     window: PropTypes.func
//   //   };

//   //   const container =
//   //     window !== undefined ? () => window().do cument.body : undefined;

//   return(

//     {console.log("hello")}
//       <div className="header">
//         <div onClick={() => navigate("/")} className="icon-name">
//           <div className="icon">
//             <ElectricBoltIcon />
//           </div>

//           <div className="name">
//             <h3>Power Billing Plus</h3>
//           </div>
//         </div>
//         <div className="navbar">
//           <nav>
//             <ul>
//               <li>
//                 <Link className="link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/profile">
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/viewbill">
//                   View Bill
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/signup">
//                   Sign up
//                 </Link>
//               </li>
//               <li>
//                 <Link className="link" to="/login">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* <nav className={click ? "phonenav" : ""}>
//           <ul>
//             <li>
//               <Link className="link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/">
//                 Features
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/profile">
//                 Profile
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/viewbill">
//                 View Bill
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/signup">
//                 Sign up
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/login">
//                 Login
//               </Link>
//             </li>
//           </ul>
//           <MenuIcon onClick={handleClick} />
//         </nav> */}

//   {/* ---------------------------------------<bar>---------------------------------------------------- */}
//         {/* <div className="mobilenav">
//           <Box sx={{ display: "flex" }}>
//             <CssBaseline />
//             <AppBar component="nav">
//               <Toolbar>
//                 <IconButton
//                   color="inherit"
//                   aria-label="open drawer"
//                   edge="start"
//                   onClick={handleDrawerToggle}
//                   sx={{ mr: 2, display: { sm: "none" } }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Typography
//                   variant="h6"
//                   component="div"
//                   sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//                 >
//                   MUI
//                 </Typography>
//                 <Box sx={{ display: { xs: "none", sm: "block" } }}>
//                   {navItems.map((item) => (
//                     <Button key={item} sx={{ color: "#fff" }}>
//                       {item}
//                     </Button>
//                   ))}
//                 </Box>
//               </Toolbar>
//             </AppBar>
//             <nav>
//               <Drawer
//                 container={container}
//                 variant="temporary"
//                 open={mobileOpen}
//                 onClose={handleDrawerToggle}
//                 ModalProps={{
//                   keepMounted: true // Better open performance on mobile.
//                 }}
//                 sx={{
//                   display: { xs: "block", sm: "none" },
//                   "& .MuiDrawer-paper": {
//                     boxSizing: "border-box",
//                     width: drawerWidth
//                   }
//                 }}
//               >
//                 {drawer}
//               </Drawer>
//             </nav>
//             <Box component="main" sx={{ p: 3 }}>
//               <Toolbar />
//             </Box>
//           </Box>
//         </div> */}
//         <Outlet />
//       </div>;
//   )
//     };

// export default Header;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import { Grid } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Grid container>
      <div className="header">
        <div onClick={() => navigate("/")} className="icon-name">
          <div className="icon">
            <ElectricBoltIcon />
          </div>
          <div className="name">
            <h3>Power Billing Plus</h3>
          </div>
        </div>
        <Grid sx={{justifyContent:'flex-end'}} className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon  /> : <MenuIcon />}
        </Grid>
        <div className={`navbar ${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="link" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="link" to="/viewbill">
                  Bill
                </Link>
              </li>
              <li>
                <Link className="link" to="/signup">
                  SignUp
                </Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </Grid>
  );
};

export default Header;
