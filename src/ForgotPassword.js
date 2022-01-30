import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setemail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == 123) navigate("/resetPass");
    else console.log("");
    setemail("");
  };

  let navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row justify-content-center col-6 col-md-4">
        <div className="">
          <form className="form-control" onSubmit={handleSubmit}>
            <label
              htmlFor="otp"
              className="mb-2  fs-3 text-center form-control-md w-100"
            >
              Forgot Password?
            </label>
            <div className="text-info  w-100 text-center mb-4">
              You can reset your password here.
            </div>
            <input
              className="form-control mb-2"
              type="text"
              name="otp"
              id="otp"
              value={email}
              placeholder=" Email Address"
              onChange={(e) => setemail(e.target.value)}
            />
            <button className="btn btn-dark w-100 mb-2">Reset Password</button>
          </form>
        </div>
      </div>
      ;
    </div>
  );
}
