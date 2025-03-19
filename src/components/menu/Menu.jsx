import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.divMenu}>
      <ul>
        <li>
          <a href="">Cadastre-se</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
