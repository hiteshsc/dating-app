import { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Login  from "./views/Login"
import Register  from "./views/Register"
import Signup from "./views/Signup";
import Welcome  from "./views/Welcome-home"
import Otp from "./views/Otp";
import Home from "./views/UI";
export default function App() {
  let preLoginList = ["/", "/login", "/register"];
  let location = useLocation();

  return (
    <div className="bg-secondary">
    

      {preLoginList.includes(location.pathname) ? (
        <div>
          <Link to="/">Login | </Link>
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <div>
          <Link to="/Welcome-home">Home | </Link>
          <Link to="/Welcome-home">Explore | </Link>
          <Link to="/Welcome-home">Home</Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/enterOtp" element={<Otp></Otp>}></Route>
        <Route path="/Welcome-home" element={<Welcome></Welcome>}></Route>
      </Routes>
    </div>
  );
}
