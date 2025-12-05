import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieSection from './MovieSection';

// Importing Backend API from .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const GenreSection = ({ genre }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
   axios.get(`${API_BASE_URL}/api/genre/${genre}`, {
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  }
});






  }, [genre]);

  return (
    <div>
      <MovieSection title={genre} movies={videos} />
    </div>
  );
};

export default GenreSection;
