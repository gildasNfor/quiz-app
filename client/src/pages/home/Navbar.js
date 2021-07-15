import React from "react";

const Navbar = () => {
  return (
    <div className="heading">
      <div style={{ display: "flex" }}>
        <div style={{ paddingTop: "12px" }}>
          <p className="user__name">Nfor Gildas</p>
        </div>
        <img
          className="profile__pic"
          src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
          alt="profile pic"
        />
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
