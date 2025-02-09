import React from "react";

function onFavourite() {
  alert("Clicked");
}

function MovieCard({ movie }) {
  return (
    <>
      <div
        className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group h-[40vh] w-[30vh] m-2 mr-2 "
        id="movie-card"
      >
        <div className="" id="movie-poster">
          <img src={movie.url} alt={movie.title} className="transition-transform group-hover:scale-110 duration-200 object-fill h-full w-full
          " />
          <div id="movie-overlay" className="h-full w-full flex justify-end bg-white">
            <button id="favourite-btn" onClick={onFavourite} className="absolute inset-0 m-4 max-h-6 max-w-6 backdrop-blur-2xl rounded-2xl hover:bg-orange-800 active:scale-110 duration-200 z-20">
              ❤️
            </button>
          </div>
        </div>
        <div id="movie-info" className="absolute inset-0 flex items-center justify-end flex-col bg-gradient-to-t from-black/90 ">
          <h3 className="text-2xl font-bold font-serif text-center">{movie.title}</h3>
          <p className="text-lg">{movie.release_date}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
