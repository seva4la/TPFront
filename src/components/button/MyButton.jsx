/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./MyButton.module.css";

export const MyButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
