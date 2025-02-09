import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

const movie = {
  title: "SpiderMan",
  url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/240px-Web_of_Spider-Man_Vol_1_129-1.png",
  release_date: "23/3/2025",
};
const movie2 = {
  title: "Terminator",
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveW8eBP7IqMaUeBTYhPM8NwwwIT2cxbkRYQ&s",
  release_date: "2/5/2025",
};

function App() {
  return (
    <>
      <div className="bg-gray-900 text-white flex justify-center items-center min-h-screen flex-wrap">
        <MovieCard movie={movie} />
        <MovieCard movie={movie2} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
        <MovieCard movie={movie} />
      </div>
    </>
  );
}

export default App;
