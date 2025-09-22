import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import MovieSection from '../components/MovieSection';
import Footer from '../components/Footer';
import "../assets/css/LandingPage.css";

// Banner Data
const bannerImages = [
  {
    src: "/images/thumbnails/12thfail.jpg",
    title: "12th fail",
    desc: "Description of 12th fail",
    driveFileId: "1QxvQcZ8TTJR7LVRQGdn8VtmaqZjBu03d"
  },
  {
    src: "/images/thumbnails/pushpa.jpg",
    title: "Pushpa",
    desc: "The Rise",
    driveFileId: "1alotGmc1i1mSNnYMmfCbZD_6bgm4LjF0"
  },
  {
    src: "/images/thumbnails/salaar.jpg",
    title: "Salaar",
    desc: "Salaar",
    driveFileId: "1bHOazYGkJcPRdCFIxz1mWDF7epvjyqOT"
  },
  {
    src: "/images/thumbnails/spiderman.jpg",
    title: "Ultimate Spider Man",
    desc: "Tales of Ultimate Spider Man",
    driveFileId: "1RkMo4lluZbyRegO-sgASy_Idwt7Gf2q8"
  },
  {
    src: "/images/thumbnails/mad.jpg",
    title: "MAD",
    desc: "Mad",
    driveFileId: "14r7QX8oEXL6h8QsMAMgc4WRSmDAbq3gz"
  },
  {
    src: "/images/thumbnails/mahanati.jpg",
    title: "Mahanati",
    desc: "Tale of a Heroin",
    driveFileId: "1rvF-uJki3rnmp2NzopE2V3TvYKojkHCw"
  },
];

// Explore Movies with genre added
const exploreAMovies = [
  {
    thumbnailUrl: "/images/thumbnails/mahanati.jpg",
    title: "Mahanati",
    driveFileId: "1rvF-uJki3rnmp2NzopE2V3TvYKojkHCw",
    genre: "Drama"
  },
  {
    thumbnailUrl: "/images/thumbnails/mad.jpg",
    title: "MAD",
    driveFileId: "14r7QX8oEXL6h8QsMAMgc4WRSmDAbq3gz",
    genre: "Comedy"
  },
  {
    thumbnailUrl: "/images/thumbnails/pushpa.jpg",
    title: "Pushpa",
    driveFileId: "1alotGmc1i1mSNnYMmfCbZD_6bgm4LjF0",
    genre: "Action"
  },
  {
    thumbnailUrl: "/images/thumbnails/tholiprema.jpg",
    title: "Tholi Prema",
    driveFileId: "1rvF-uJki3rnmp2NzopE2V3TvYKojkHCw",
    genre: "Drama"
  },
  {
    thumbnailUrl: "/images/thumbnails/taxiwala.jpg",
    title: "Taxiwala",
    driveFileId: "14r7QX8oEXL6h8QsMAMgc4WRSmDAbq3gz",
    genre: "Thriller"
  },
  {
    thumbnailUrl: "/images/thumbnails/12thfail.jpg",
    title: "12th fail",
    driveFileId: "1alotGmc1i1mSNnYMmfCbZD_6bgm4LjF0",
    genre: "Drama"
  },
  {
    thumbnailUrl: "/images/thumbnails/vikram.jpg",
    title: "Vikram",
    driveFileId: "1rvF-uJki3rnmp2NzopE2V3TvYKojkHCw",
    genre: "Action"
  },
  {
    thumbnailUrl: "/images/thumbnails/geethagovindam.jpg",
    title: "Geetha Govindam",
    driveFileId: "14r7QX8oEXL6h8QsMAMgc4WRSmDAbq3gz",
    genre: "Comedy"
  },
  {
    thumbnailUrl: "/images/thumbnails/kanchana.jpg",
    title: "Kanchana",
    driveFileId: "1alotGmc1i1mSNnYMmfCbZD_6bgm4LjF0",
    genre: "Thriller"
  },
  {
    thumbnailUrl: "/images/thumbnails/jathiratnalu.jpg",
    title: "Jathiratnalu",
    driveFileId: "1rvF-uJki3rnmp2NzopE2V3TvYKojkHCw",
    genre: "Comedy"
  },
  {
    thumbnailUrl: "/images/thumbnails/salaar.jpg",
    title: "Salaar",
    driveFileId: "14r7QX8oEXL6h8QsMAMgc4WRSmDAbq3gz",
    genre: "Action"
  }
];

const genres = ["Action", "Comedy", "Drama", "Thriller"];

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      <HeroBanner bannerImages={bannerImages} />
      <MovieSection title="Explore More" movies={exploreAMovies} />

      {/* Genre Sections (filtered reuse of MovieSection) */}
      {genres.map((genre) => (
        <MovieSection
          key={genre}
          title={genre}
          movies={exploreAMovies.filter((movie) => movie.genre === genre)}
        />
      ))}

      <Footer />
    </div>
  );
};

export default LandingPage;
