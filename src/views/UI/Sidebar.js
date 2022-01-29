import React from "react";
import "../../App.css";

function Sidebar(user) {
  console.log(user);
  return (
    <>
      <div
        className="border border-dark rounded p-2 text-center"
        style={{ height: "100vh" }}
      >
        <div className="p-4">
          <img className="rounded-3 img-thumbnail" src={user.img} alt="" />
        </div>
        <div className="fs-2">{user.name}</div>
        <div className="fs-6">{user.city}</div>
        <button className="btn btn-dark btn-large w-100 mt-4">
          Edit Profile
        </button>
      </div>
    </>
  );
}

export default Sidebar;
