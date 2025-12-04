import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import "../assets/css/LandingPage.css";

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    fetch("http://localhost:30080/api/videos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch videos");
        return res.json();
      })
      .then((data) => {
        setMovies(data);

        // Collect all unique genres
        const allGenres = [...new Set(data.flatMap((movie) => movie.genres || []))];
        setGenres(allGenres);
      })
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  // 🎯 Filter movies based on search query and selected genre
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = !selectedGenre || movie.genres?.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="LandingPage">
      {/* Pass search + genre handlers to Navbar */}
      <Navbar
        genres={genres}
        onSearchChange={setSearchQuery}
        onGenreChange={setSelectedGenre}
      />

      {/* Hero Banner */}
      <HeroBanner
        bannerImages={filteredMovies.map((m) => ({
          src: m.thumbnailUrl,
          title: m.title,
          desc: m.description,
          driveFileId: m.driveFileId,
        }))}
      />

      {/* Main Explore Section */}
      <MovieSection title="Explore More" movies={filteredMovies} />

      {/* Dynamic Genre Sections */}
      {genres.map((genre) => {
        const genreMovies = filteredMovies.filter((movie) => movie.genres?.includes(genre));
        if (genreMovies.length === 0) return null;
        return <MovieSection key={genre} title={genre} movies={genreMovies} />;
      })}

      <Footer />
    </div>
  );
};

export default LandingPage;
