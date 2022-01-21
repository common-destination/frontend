import React from "react";
import { useTheme } from "../ThemeContext";
import Login from "./Login";
import Signup from "./Signup";
import icons from "../functions/icons.js";

function Validation() {
  const {
    setValidationMenuToggle,
    signupToggle,
    setSignupToggle,
    loginToggle,
    setLoginToggle,
    mediaQueries,
  } = useTheme();
  return (
    <div
      className="Validation"
      style={{
        width: mediaQueries.burgerMenu ? "100vw" : "40vw",
        minHeight: mediaQueries.burgerMenu ? "100vh" : "70vh",
      }}
    >
      <ul>
        {loginToggle ? (
          <li
            onClick={() => {
              setLoginToggle(false);
              setSignupToggle(true);
            }}
            style={{ cursor: "pointer" }}
          >
            sign up
          </li>
        ) : (
          <li
            onClick={() => {
              setLoginToggle(true);
              setSignupToggle(false);
            }}
            style={{ cursor: "pointer" }}
          >
            login
          </li>
        )}
      </ul>
      <img
        className="menuIconClosed"
        src={icons.menuIconClosed}
        alt="menuClosed"
        onClick={() => {
          setValidationMenuToggle(false);
        }}
      />

      {loginToggle && <Login />}
      {signupToggle && <Signup />}
    </div>
  );
}

export default Validation;
