import React from "react";
import styles from "./Footer.module.css";

import insta from "./icone-Insta.png";
import twitter from "./icone-twiter.png";
import face from "./icone-face.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Redes Sociais</p>
      <p>
        <img src={insta} alt="Instagran" className={styles.icones} />
        <img src={twitter} alt="Twitter" className={styles.icones} />
        <img src={face} alt="Facebook" className={styles.icones} />
      </p>
    </div>
  );
};

export default Footer;
