import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./../assets/css/TopNav.css";

const TopNav = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Sync search with URL
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
  }, [searchTerm, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="topnav">
      {/* Search Bar */}
      <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>

        <input
          id="query"
          className="input"
          type="search"
          placeholder="Search..."
          name="searchbar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Profile */}
      <div className="profile-container">
        <img
          src="../images/profile.png"
          alt="Profile"
          className="profile-image"
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        />
        {isProfileMenuOpen && (
          <div className="profile-menu">
            <ul>
              <li><Link to="/my-profile">My Profile</Link></li>
              <li><button onClick={() => navigate("/payment")}>Subscription</button></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
