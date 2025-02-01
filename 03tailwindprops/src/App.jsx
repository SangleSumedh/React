import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <div className="bg-gray-600 flex justify-between items-center">
        <Card userName="Tiger" />
        <Card  />
        <Card  />
      </div>
    </>
  );
}

export default App;
