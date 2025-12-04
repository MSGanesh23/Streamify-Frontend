import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./../assets/css/Navbar.css";

const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Sync input with URL query
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q") || "";
    setSearchTerm(query);
  }, [location.search]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1 className="site-name">Streamify</h1>

      <ul className="menu">
        <li><Link to="/userDashboard">Home</Link></li>
        <li><Link to="/recently-added">Recently Added</Link></li>
        <li><Link to="/my-list">My List</Link></li>
      </ul>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies, genres..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="profile-logo" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
        <img src="../images/profile.png" alt="Profile" className="profile-image" />
      </div>

      {isProfileMenuOpen && (
        <div className="profile-menu">
          <ul>
            <li><Link to="/my-profile">My Profile</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
            <li><button onClick={() => navigate("/payment")}>Subscription</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
