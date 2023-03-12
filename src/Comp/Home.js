import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to="/login-swimmers">تسجيل السباحين</Link>
        <Link to="/login-lanes">تسجيل الايجارات</Link>
        <Link to="/coach">المدربين</Link>
        <Link to="/data-swimmers">داتا السباحين</Link>
        <Link to="/data-lanes">داتا الايجارات</Link>
      </div>
    );
  }
}
export default Home;
