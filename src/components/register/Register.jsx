import React from "react";
import styles from "./Register.module.css";
import logo from "../../assets/logo.png"; // Substitua pelo caminho do seu logotipo

const Register = () => (
  <div className={styles.container}>
    <img src={logo} alt="Logo" className={styles.logo} />
    <div className={styles.formBox}>
      <h2 className={styles.title}>Cadastre-se</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Nome" className={styles.input} />
        <input type="email" placeholder="E-mail" className={styles.input} />
        <input type="password" placeholder="Senha" className={styles.input} />
        <input type="password" placeholder="Confirmar Senha" className={styles.input} />
        <input type="tel" placeholder="Número" className={styles.input} />
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  </div>
);

export default Register;