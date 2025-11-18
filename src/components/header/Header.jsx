import React from "react";
import Search from "../search/Search";
import Menu from "../menu/Menu";
import Logo from "../../assets/logo.png";
import Raposa from "../../assets/raposa.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.divHeader}>
        <div className={styles.divRaposa}>
          <img
            src={Raposa}
            alt="Imagem de uma raposa"
            className={styles.imgRaposa}
          />
        </div>

        <div className={styles.divLogo}>
          <img src={Logo} alt="Logo da EsmadFlix" className={styles.imgLogo} />
          <Search></Search>
        </div>
        <div className={styles.divMenu}>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
