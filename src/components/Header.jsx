import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://images.squarespace-cdn.com/content/v1/5f72a23e4dd846436c2a933e/1602732789700-RE4DNARCSZK49E3WRW4A/ke17ZwdGBToddI8pDm48kE3kEAMe909ij56K1uy1Bed7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gv1ys-8KA6l1jVWJZidkzO11qMSeE4bMgp0yz6hGLBiiRbM7xfXkA46Tlx468oGPw/The+Nomad+Project+LOGO.png?format=2500w"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
