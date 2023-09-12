import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../Assets/Images/crown.svg";
import { useSelector } from "react-redux";
import "./Navbar.styles.scss";
import CartIcon from "../CartIcon/CartIcon";

const Navbar = () => {
  const login = useSelector((state) => state.user.login);
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
           {/* ( */}
            <Link className="link" to="/signIn">
              SIGNIN
            </Link>
          {/* ) : (
            <p>Hi, user</p>
          )} */}

          <CartIcon />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
