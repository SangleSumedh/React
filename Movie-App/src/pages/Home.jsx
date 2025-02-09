import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadPopularMovies = async () => {
//       try {
//         const popularMovies = await getPopularMovies();
//         setMovies(popularMovies);
//       } catch (e) {
//         console.log(e);
//         setError("Failed to load Movies...");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadPopularMovies();
//   }, []);

const movies = [
  {
    id: 1,
    title: "John Wick",
    release_date: 2020,
    url: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
  },
  {
    id: 2,
    title: "Terminator",
    release_date: 2021,
    url: "https://m.media-amazon.com/images/M/MV5BMjAyMTk3ODA2MF5BMl5BanBnXkFtZTcwMTkzNDQyNA@@._V1_.jpg",
  },
  {
    id: 3,
    title: "SpiderMan",
    release_date: 2022,
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/240px-Web_of_Spider-Man_Vol_1_129-1.png",
  },
  {
    id: 4,
    title: "Iron Man",
    release_date: 2023,
    url: "https://ironusa.vtexassets.com/arquivos/ids/196908-800-1067?v=637913412214170000&width=800&height=1067&aspect=true",
  },
  {
    id: 5,
    title: "Captain America",
    release_date: 2024,
    url: "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
  },
  {
    id: 6,
    title: "Captain America",
    release_date: 2024,
    url: "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg",
  },
  {
    id: 7,
    title: "Iron Man",
    release_date: 2023,
    url: "https://ironusa.vtexassets.com/arquivos/ids/196908-800-1067?v=637913412214170000&width=800&height=1067&aspect=true",
  },
];


  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="text-center p-2 sm:text-end sm:p-4 sm:h-[15vh]"
        id="search-form"
      >
        <input
          type="text"
          placeholder="Search for Movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-900 rounded-lg  text-center p-1 flex-nowrap outline-none text-white"
        />
        <button className="sm:p-2 text-center sm:text-2xl">🔍</button>
      </form>

      <div id="movie-grid" className="flex justify-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.slot} className="" />
        ))}
      </div>
    </>
  );
}

export default Home;

