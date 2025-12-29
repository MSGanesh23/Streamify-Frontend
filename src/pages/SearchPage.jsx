import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
// Importing Backend API from .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/videos/search?query=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="with-sidebar">
      <Navbar />
      <div style={{ padding: "20px", color: "#fff" }}>
        <h1>Search results for “{query}”</h1>
        <SearchResults results={results} query={query} />
      </div>
    </div>
  );
};

export default SearchPage;
