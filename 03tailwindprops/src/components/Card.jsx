import React from "react";

function Card({userName = "Animal "}) {
  // console.log(props);
  
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img
          className="shadow-xl rounded-md list-image-none "
          alt=""
          src="/img/tiger.jpg"
        /> 
      </div>
      <div className="flex ">
        <span>{userName}</span>
        <span className="flex"></span>
      </div>
    </div>
  );
}

export default Card; 
