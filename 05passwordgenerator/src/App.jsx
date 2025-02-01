import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*()_+";

    for(let i=1;i<length;i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  useEffect(()=>{
    generatePassword();
  },[length, numberAllowed, charAllowed, ])

  function copyPasswordToClipboard(){
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    console.log(password);
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white my-3 text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button 
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-sky-500 active:bg-red-500 duration-500"
        onClick={copyPasswordToClipboard}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name=""
            id=""
            min={6}
            max={100}
            value={length}
            className="cursor-pointer accent-orange-500"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
