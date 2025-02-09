import React from "react";

function Favorites() {
  return (
    <div className="h-screen w-full flex justify-center items-center text-center">
      <div className="shadow-lg border border-black h-[50%] sm:w-[50%] flex-col justify-center items-center">
        <h2 className="text-red-600 text-2xl">No favorites yet!</h2>
        <p>
          Start Adding <span className="text-red-500">Movies</span> to Favorites
          to see them here!
        </p>
        <img
          src="https://comodosslstore.com/blog/wp-content/uploads/2024/01/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg"
          alt="Not Found!"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Favorites;
