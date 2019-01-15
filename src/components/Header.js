import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <nav>
        <ul className="main-header-menu">
          <li className="main-header-menu__item">
            <Link to="/">Home</Link>
          </li>
          <li className="main-header-menu__item">
            <Link to="/terran">Terran</Link>
          </li>
          <li className="main-header-menu__item">
            <Link to="/protoss">Protoss</Link>
          </li>
          <li className="main-header-menu__item">
            <Link to="/zerg">Zerg</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
