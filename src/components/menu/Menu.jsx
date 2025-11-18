import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";
import styles from "./Menu.module.css";

const Menu = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className={styles.menuContainer}>
      <nav className={styles.menuNav}>
        <a
          href="#"
          className={styles.menuLink}
          onClick={e => {
            e.preventDefault();
            setShowLogin(true);
            setShowRegister(false);
          }}
        >
          Login
        </a>
        <a
          href="#"
          className={styles.menuLink}
          onClick={e => {
            e.preventDefault();
            setShowRegister(true);
            setShowLogin(false);
          }}
        >
          Cadastre-se
        </a>
      </nav>
      {showLogin && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              onClick={() => setShowLogin(false)}
              className={styles.closeButton}
              aria-label="Fechar"
            >
              ×
            </button>
            <Login />
          </div>
        </div>
      )}
      {showRegister && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              onClick={() => setShowRegister(false)}
              className={styles.closeButton}
              aria-label="Fechar"
            >
              ×
            </button>
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;