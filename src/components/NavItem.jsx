import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <li className="mr-5 hover:text-teal-400">
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavItem;
