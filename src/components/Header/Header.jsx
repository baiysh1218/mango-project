import React from "react";

import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="navber-background">
      <div className="container">
        <div className="navbar-block">
          <div className="navbar-logo-block">
            <img
              className="logo-mango-navbar"
              src="https://st.mngbcn.com/images/headerNew/logos/mango.svg"
              alt=""
            />
          </div>
          <div className="navbar-block-icons">
            <IconButton>
              <SearchIcon className="navbar-icon" />
            </IconButton>
            <IconButton>
              <PermIdentityIcon className="navbar-icon" />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon className="navbar-icon" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
