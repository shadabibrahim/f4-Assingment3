import React from 'react';

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="head">
        <NavLink to="/">Header</NavLink>
        <div className="right">
          <NavLink to="/F4-may-assignment-3/">Signup</NavLink>
          <NavLink to="/F4-may-assignment-3/profile">Profile</NavLink>
        </div>
      </div>
    </>
  );
}
