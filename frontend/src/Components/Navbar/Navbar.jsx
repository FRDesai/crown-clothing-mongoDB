import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../Assets/Images/crown.svg";
import "./Navbar.styles.scss";
import CartIcon from "../CartIcon/CartIcon";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <Link className="link" to="/">
            <Crownlogo />
          </Link>
        </div>

        <div className="nav-right">
          <Link className="link" to="/">
            HOME
          </Link>

          <Link className="link" to="/shop">
            SHOP
          </Link>

          <Link className="link" to="/signIn">
            SIGNIN
          </Link>
          <CartIcon />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
