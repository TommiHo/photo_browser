import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.webp";

export default function Header(): JSX.Element {
  const history = useHistory();

  return (
    <div className="header">
      <img className="header__logo" height="60" src={logo} alt=""></img>
      <h1 onClick={() => history.push("/")} className="header__heading">
        Photo browser
      </h1>
    </div>
  );
}
