import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");

  const handleButton = (value) => {
    if (value === "c") {
      setInput("0");
    } else if (value === "<") {
      setInput(input.length > 1 ? input.slice(0, -1) : "0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };
  return (
    <div>
      <div className="Input">
        <input value={input}></input>
      </div>
      <div>
        <button onClick={() => handleButton("c")}>c</button>
        <button onClick={() => handleButton("<")}>&lt;</button>
        <button onClick={() => handleButton("%")}>%</button>
        <button onClick={() => handleButton("/")}>/</button>
      </div>
      <div>
        <button onClick={() => handleButton("7")}>7</button>
        <button onClick={() => handleButton("8")}>8</button>
        <button onClick={() => handleButton("9")}>9</button>
        <button onClick={() => handleButton("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleButton("4")}>4</button>
        <button onClick={() => handleButton("5")}>5</button>
        <button onClick={() => handleButton("6")}>6</button>
        <button onClick={() => handleButton("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleButton("1")}>1</button>
        <button onClick={() => handleButton("2")}>2</button>
        <button onClick={() => handleButton("3")}>3</button>
        <button onClick={() => handleButton("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleButton("0")}>0</button>
        <button onClick={() => handleButton("00")}>00</button>
        <button onClick={() => handleButton(".")}>.</button>
        <button onClick={() => handleButton("=")}>=</button>
      </div>
    </div>
  );
};

export default App;
