import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const LogIn = () => {
    navigate("/login");
  };
  const initAddress = { street: "", city: "", state: "" };
  const initData = {
    name: "",
    dob: "",
    pic: "",
    gender: "",
    interest: "",
    hobbies: "",
    address: initAddress,
  };
  const [data, setData] = useState(initData);
  const [address, setAddress] = useState(initAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    data.address = address;
    console.log(data);

    console.log(address);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleChangeAddress = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress({ ...address, [name]: value });
  };
  return (
    <div className="container-fluid">
      <div className="row  justify-content-center align-items-center">
        <div className="text-center fs-3 mb-3">Complete Your Profile</div>
        <div className="col-6">
          <form className="form-control" onSubmit={handleSubmit}>
            <div>
              <label>Enter Name</label>
            </div>
            <div className="mb-1">
              <input
                type="text"
                className="form-control form-control-md"
                placeholder="Enter Name..."
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label>Enter Date of Birth</label>
            </div>
            <div className="mb-1">
              <input
                type="date"
                className="form-control form-control-md"
                id="dob"
                name="dob"
                value={data.dob}
                onChange={handleChange}
              ></input>
            </div>
            <div> Enter Address</div>
            <div className="row">
              <div className="col-6">
                <input
                  className=" form-control form-control-md"
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street"
                  value={address.street}
                  onChange={handleChangeAddress}
                />
              </div>
              <div className="col-3">
                <input
                  className=" form-control form-control-md"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={address.city}
                  onChange={handleChangeAddress}
                />
              </div>
              <div className="col-3">
                <input
                  className=" form-control form-control-md"
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={address.state}
                  onChange={handleChangeAddress}
                />
              </div>
            </div>
            <div>
              <label>Insert Picture</label>
            </div>
            <div className="mb-1">
              <input
                type="file"
                className="form-control form-control-md"
                placeholder="Enter Name..."
                id="pic"
                name="pic"
                //value={data.pic}
                // onChange={handleChange}
                onChange={(e) => console.log(e.target.files[0])}
              ></input>
            </div>
            <div>
              <label htmlFor="gender">Choose a Gender:</label>
              <select
                defaultValue={data.gender}
                id="gender"
                name="gender"
                className="form-control form-control-md mb-2"
                value={data.gender}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
            <div>
              <label>Enter Hobbies</label>
            </div>
            <div className="mb-1">
              <input
                type="text"
                className="form-control form-control-md"
                placeholder="Enter Hobbies... ex. singing, dancing, ..."
                id="hobbies"
                name="hobbies"
                value={data.hobbies}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="interest">Choose a Interest:</label>
              <select
                defaultValue={data.interest}
                id="interest"
                name="interest"
                className="form-control form-control-md mb-2"
                value={data.interest}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select your interest
                </option>
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </div>
            <div className="mb-1">
              <input
                type="submit"
                value="Register"
                className="btn btn-lg btn-dark w-100"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Interested in
