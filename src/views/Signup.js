import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const initUser = { email: "", mobile: "", password: "", cnfpassword: "" };
  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation code
    console.log(user);
    setUser(initUser);
    Otp();
  };

  let navigate = useNavigate();
  const Otp = () => {
    navigate("/enterOtp");
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row justify-content-center col-5">
        <div className="">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="d-flex  justify-content-evenly mb-2">
              <Link className="btn btn-dark mx-2 col-6" to="/Signup">
                Signup
              </Link>
              <Link className="btn btn-dark mx-2 col-6 " to="/Login">
                Login
              </Link>
            </div>
            <label htmlFor="email" className=" d-block mb-3">
              Enter Email:
            </label>
            <input
              className="form-control d-block mb-3"
              type="text"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
            />
            <label htmlFor="mobile" className=" d-block mb-3">
              Enter Mobile Number:
            </label>
            <input
              className="form-control d-block mb-3"
              type="text"
              name="mobile"
              id="mobile"
              value={user.mobile}
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

            <label className=" d-block mb-3" htmlFor="cnfpassword">
              Confirm Password:
            </label>
            <input
              className="form-control d-block mb-3"
              type="password"
              name="cnfpassword"
              id="cnfpassword"
              value={user.cnfpassword}
              onChange={handleChange}
            />
            <input
              className="btn btn-lg btn-dark mt-2 d-block w-100"
              type="submit"
              value="Create Account"
            />
          </form>
        </div>
      </div>
      ;
    </div>
  );
}
