import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Welcome = () => {
  const account = useSelector((state) => {
    return state.account;
  });
  return (
    <>
      <div class="welcome-area">
          <div class="row align-items-center">
              
            </div>
      </div>
      <div class="divider"></div>
    </>
  );
};

export default Welcome;
