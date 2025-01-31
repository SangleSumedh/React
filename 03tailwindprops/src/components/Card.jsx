import React from "react";

const Card = () => {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img
          class="size-48 shadow-xl rounded-md"
          alt=""
          src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
        />
      </div>
      <div class="flex"> 
        <span>Class Warfare</span>
        <span>The Anti-Patterns</span>
        <span class="flex">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
