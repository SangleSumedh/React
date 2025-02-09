import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-800 min-h-screen w-full flex-col flex-wrap text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
{
  /* <div className="bg-gray-800 min-h-screen w-full flex-col flex-wrap">
         <Home />
      </div> */
}
