import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Signup from "./Signup";
import Welcome from "./Welcome-home";
export default function Login() {
  let navigate = useNavigate();
  const Welcome = () => {
    navigate("/Welcome");
  };
  const defUser = {username:"", password:""}
  const [user, setUser] = useState(defUser);

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name] : value});
  }

  const handleLogin = (e) => {
    e.preventDefault();
    //call api after validation
    //if login successful and information is pending
    navigate("/register")
    setUser(defUser);
    console.log(user);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row justify-content-center col-6 col-md-4">
        <div className="">
          <form className="form-control" onSubmit={handleLogin}>
            <div className="d-flex  justify-content-evenly">
              <Link className="btn btn-dark mx-2 col-6  mb-3" to="/Signup">
                Signup
              </Link>
              <Link className="btn btn-dark mx-2 col-6  mb-3" to="/Login">
                Login
              </Link>
            </div>
            <label htmlFor="username" className=" d-block mb-3">
              Enter Username:
            </label>
            <input
              className="form-control d-block mb-3"
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={handleChange}
            />
            <label className=" d-block mb-3" htmlFor="password">
              Enter Password:
            </label>
            <input
              className="form-control d-block mb-3"
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleChange}
            />
            <input
              className="btn btn-lg btn-dark mt-2 d-block w-100 mb-3"
              type="submit"
              value="Log in"
            />
          </form>
        </div>
      </div>
      ;
    </div>
  );
}
