import React from "react";
import Harry from "../Harry/Harry";


import "./Header.css";

import{Link} from "react-router-dom";

const Header = ({ setShowClow, setShowSakura }) => {
  return (
    <header>
      <div className="portada"><img src="https://pa1.narvii.com/6914/43ec71cc38cb6a7ead9546cc356e368cf4f3e667r1-640-327_hq.gif" /></div>
      
    </header>
  );
};

export default Header;
