import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiHeart,
  FiLogOut,
  FiCreditCard,
  FiMenu
} from "react-icons/fi";
import "./../assets/css/Navbar.css";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <nav className={`navbar ${collapsed ? "collapsed" : ""}`}>
      
      {/* Toggle */}
      <div className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        <FiMenu />
      </div>

      {/* Logo */}
      <h1 className="site-name">{collapsed ? "S" : "Streamify"}</h1>

      {/* Menu */}
      <ul className="menu">
        <li>
          <Link to="/userDashboard">
            <FiHome />
            {!collapsed && <span>Home</span>}
          </Link>
        </li>

        <li>
          <Link to="/my-list">
            <FiHeart />
            {!collapsed && <span>My List</span>}
          </Link>
        </li>
      </ul>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <button onClick={() => navigate("/payment")}>
          <FiCreditCard />
          {!collapsed && <span>Subscription</span>}
        </button>

        <button className="logout" onClick={handleLogout}>
          <FiLogOut />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
