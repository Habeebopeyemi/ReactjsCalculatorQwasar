import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const clickHandler = e => {
    const { name } = e.target;
    setResult(result.concat(name));
  };
  const clear = () => setResult("");

  const backspace = () => setResult(result.substring(0, result.length - 1));

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <div className="calculator-container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="btn-wrapper">
        <button className="red" id="clear" onClick={clear}>
          Clear
        </button>
        <button className="red" id="backspace" onClick={backspace}>
          C
        </button>
        <button className="yellow" name="/" onClick={clickHandler}>
          &divide;
        </button>
        <button name="7" onClick={clickHandler}>
          7
        </button>
        <button name="8" onClick={clickHandler}>
          8
        </button>
        <button name="9" onClick={clickHandler}>
          9
        </button>
        <button className="yellow" name="*" onClick={clickHandler}>
          &times;
        </button>
        <button name="4" onClick={clickHandler}>
          4
        </button>
        <button name="5" onClick={clickHandler}>
          5
        </button>
        <button name="6" onClick={clickHandler}>
          6
        </button>
        <button className="yellow" name="-" onClick={clickHandler}>
          &ndash;
        </button>
        <button name="1" onClick={clickHandler}>
          1
        </button>
        <button name="2" onClick={clickHandler}>
          2
        </button>
        <button name="3" onClick={clickHandler}>
          3
        </button>
        <button className="yellow" name="+" onClick={clickHandler}>
          +
        </button>
        <button name="0" onClick={clickHandler}>
          0
        </button>
        <button name="." onClick={clickHandler}>
          .
        </button>
        <button className="yellow" id="result" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
