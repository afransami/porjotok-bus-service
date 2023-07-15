import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../SignUp/SignUp";
import ContactUs from "../ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "bus-reservation",
        element: <Login></Login>,
      },      
      {
        path: "contactUs",
        element: <ContactUs></ContactUs>,
      },      
      {
        path: "singUp",
        element: <SignUp></SignUp>,
      },            
    ],    
  },
  {
    path: "dashboard",
    element: (
    <Dashboard></Dashboard>  
    ),
  }
]);
