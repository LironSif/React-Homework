import React from "react";
import { links } from "./utils/navLinks";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

console.log(styles);
function Navbar() {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li className={styles.li} key={link.label}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
