// import { Box, Container, CssBaseline } from "@material-ui/core";
// import { default as React } from "react";
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch,
// } from "react-router-dom";
// import { CopyrightFooter } from "../../components";
// import MenuBar from "../../components/Common/NavBar";
// import SideBar from "../../components/Common/SideBar";
// import { useStyles } from "../../components/Common/styles";
// import routes from "../../routes";
// import Login from "../Login/Login";

// import { useSelector, useDispatch } from "react-redux";
// //import { selectAccessToken } from "../../redux/reducers";

// //cite source
// // const switchRoutes = (accessToken, defaultRoute) => {
// //   return (

// //   );
// // };

// export default function Main(props) {
//   const dispatch = useDispatch();
//   //const accessToken = useSelector(selectAccessToken);
//   //const defaultRoute = accessToken ? "/dashboard" : "/";

//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Router>
//       <div className={classes.root}>
//         <CssBaseline />
//         <SideBar open={open} handleDrawerClose={handleDrawerClose} />
//       </div>

//       <MenuBar
//         open={open}
//         query={props.query}
//         setQuery={props.setQuery}
//         handleDrawerOpen={handleDrawerOpen}
//       />

//       <div className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth="lg" className={classes.container}>
//           <Switch>
//             {accessToken ? (
//               routes.map((route) => (
//                 <Route key={route.path} path={route.path}>
//                   <route.component />
//                 </Route>
//               ))
//             ) : (
//               <Route exact path="/">
//                 <Login />
//               </Route>
//             )}
//             <Redirect to={defaultRoute} />
//           </Switch>
//           <Box pt={4}>
//             <CopyrightFooter />
//           </Box>
//         </Container>
//       </div>
//     </Router>

//     // <DashboardView/>
//   );
// }
