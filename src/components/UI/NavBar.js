import React from "react";
import Card from "./Card";
import "./NavBar.css";

function NavBar() {
  return (
    <Card className="nav-bar-card">
      <nav className="nav-bar">
        <h1 className="nav-bar-item nav-bar-title">Takeaway Visualizer</h1>
        <ul className="nav-bar-item nav-bar-social-medias">
          <li className="nav-bar-link"></li>
          <li className="nav-bar-link"></li>
        </ul>
      </nav>
    </Card>
  );
}

export default NavBar;
