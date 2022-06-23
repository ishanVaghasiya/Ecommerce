import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Cheackout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = new Cookies();
    const token = cookie.get("Token");
    console.log(token)
    if (!token && token === undefined) {
      navigate("/login");
    }
  });

  return <div>Cheackout</div>;
};

export default Cheackout;
