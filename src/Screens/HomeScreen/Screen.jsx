import React from "react";
import "./HScreen.css";
import { NavLink } from "react-router-dom";


export default function Screen() {
  return (
    <div className="bgColor bgStyle">
      <NavLink to={"/choose"} style={{ textDecoration: 'none' }}>
        <div className="centerStyle">
          <img width={"40%"} src={"/images/logo.png"} alt={"sss"} />
        </div>
        <div className="centerStyle">
        <img width={"80%"} src={"/images/homePageImg.png"} alt={"sss"} />
        </div>
        <div className="centerStyle text-center">
          <img width={"30%"} src={"/images/giphy.gif"} alt={"sss"} />
          <h3>Boshlash uchun bosing</h3>
        </div>
      </NavLink>
    </div>
  );
}
