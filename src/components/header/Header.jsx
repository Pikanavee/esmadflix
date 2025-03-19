import React from "react";
import Search from "../search/Search";
import Menu from "../menu/Menu";
import Logo from "../../assets/logo.png";
import Raposa from "../../assets/raposa.png";

const Header = () => {
  return (
    <div>
      <Menu />
      <img src={Raposa} alt="Imagem de uma raposa" />
      <img src={Logo} alt="Logo da EsmadFlix" />

      <Search></Search>
    </div>
  );
};

export default Header;
