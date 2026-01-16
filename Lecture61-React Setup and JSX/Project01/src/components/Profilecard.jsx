import React from "react";
import "../css/profileCard.css";

const Profilecard = ({ name, desc, image }) => {
  return (
    <div className="user-container">
      <p id="title">{name}</p>
      <img id="user-img" src={image} alt="Mayur" />
      <p id="user-title">{desc}</p>
    </div>
  );
};

export default Profilecard;
