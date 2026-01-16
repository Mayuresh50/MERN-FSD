import React from "react";
import "../css/productCard.css";

const Productcard = ({ image, theme, name, desc }) => {
  return (
    <div className={theme}>
      {theme}
      <p id="title">{name}</p>
      <img id="user-img" src={image} alt="headphones" />
      <p id="productDesc">{desc}</p>
    </div>
  );
};

export default Productcard;
