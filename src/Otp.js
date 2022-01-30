import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp == 123) navigate("/login");
    else console.log("invalid otp");
    setOtp("");
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
            <div className="text-info  w-100 text-center">
              Check email for otp
            </div>
            <label
              htmlFor="otp"
              className="mb-2  fs-5 text-center form-control-md w-100"
            >
              Enter OTP
            </label>
            <input
              className="form-control mb-2"
              type="text"
              name="otp"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="btn btn-dark w-100 mb-2">Submit</button>
          </form>
        </div>
      </div>
      ;
    </div>
  );
}
