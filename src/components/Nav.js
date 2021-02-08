import React, { useState } from "react";
import "./Nav.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "react-bootstrap";

function Nav() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [active, setActive] = useState(false)

  function handleLogout() {
    logout();
    history.push("/");
  }

  function handleToggle(){
    setActive(!active)
  }  

  return (
    <div className="header">
      <button className={active ? 'nav-toggle nav-open' : 'nav-toggle'} onClick={handleToggle}>
        <span className="hamburger"></span>
      </button>
      <nav className={active ? 'nav-open' : ''}>
        <ul className="nav__list">
          <Link to="/" className="nav__link" onClick={handleToggle}>
            <li className="nav__item">Home</li>
          </Link>
          <Link to="/profile" className="nav__link" onClick={handleToggle}>
            <li className="nav__item">Profile</li>
          </Link>
          <Link to="/signup" className="nav__link" onClick={handleToggle}>
            <li className="nav__item">Sign Up</li>
          </Link>
          <Link to={!currentUser && "/login"} className="nav__link" onClick={handleToggle}>
            <li className="nav__item">
              <Button variant="link" onClick={handleLogout}>
                {currentUser ? "Sign Out" : "Sign in"}
              </Button>
            </li>
          </Link>
          <li className="nav__item">
            {currentUser ? "Hello " + currentUser.email : ""}{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
