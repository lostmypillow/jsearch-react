import React from "react";
import { NavLink } from "react-router-dom";
export default function index() {
  return (
    <>
      <div className="border-2 border-blue-200">index</div>

      <NavLink to="/page2">Navigate to Page 2</NavLink>
    </>
  );
}
