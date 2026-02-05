import React from "react";
import "./Nav_Links.css";
const Nav_Links = ({ title, link }) => {
  return (
    <div className="nav_links">
      <a href={link}>{title}</a>
    </div>
  );
};

export default Nav_Links;
