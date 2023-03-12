import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <button
          onClick={() => {
            document.querySelector(".nav .nav-links").classList.toggle("open");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-links">
          <Link to="/login-swimmers">تسجيل السباحين</Link>
          <Link to="/login-lanes">تسجيل الايجارات</Link>
          <Link to="/coach">المدربين</Link>
          <Link to="/data-swimmers">داتا السباحين</Link>
          <Link to="/data-lanes">داتا الايجارات</Link>
        </div>
      </div>
    );
  }
}
export default Nav;
