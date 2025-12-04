import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./../assets/css/MovieSection.css";

const SearchResults = ({ results }) => {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (!rowRef.current) return;
    const { scrollLeft, clientWidth } = rowRef.current;
    rowRef.current.scrollTo({
      left: dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  const addToWatchlist = async (videoId) => {
    try {
      const username = localStorage.getItem("username");
      const res = await fetch(
        `http://localhost:30080/api/watchlist/add?username=${username}&videoId=${videoId}`,
        { method: "POST" }
      );
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="movie-section">
      {results.length > 0 ? (
        <div className="carousel-container">
          {results.length > 5 && (
            <button className="scroll-btn left" onClick={() => scroll("left")}>
              &#10094;
            </button>
          )}

          <div className="movie-row" ref={rowRef}>
            {results.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img src={movie.thumbnailUrl} alt={movie.title} className="movie-img" />
                <div className="movie-info">
                  <h5 className="movie-title">{movie.title}</h5>
                  <div className="actions">
                    <Link to={`/watch/${movie.driveFileId}`} className="watch-btn">
                      Watch Now
                    </Link>
                    <button className="add-btn" onClick={() => addToWatchlist(movie.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {results.length > 5 && (
            <button className="scroll-btn right" onClick={() => scroll("right")}>
              &#10095;
            </button>
          )}
        </div>
      ) : (
        <p style={{ color: "#ccc" }}>No movies found.</p>
      )}
    </div>
  );
};

export default SearchResults;
