import React from "react";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png"; // Substitua pelo caminho do seu logotipo

const Login = () => (
  <div className={styles.container}>
    <img src={logo} alt="Logo" className={styles.logo} />
    <div className={styles.formBox}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form}>
        <input type="email" placeholder="E-mail" className={styles.input} />
        <input type="password" placeholder="Senha" className={styles.input} />
        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  </div>
);

export default Login;
