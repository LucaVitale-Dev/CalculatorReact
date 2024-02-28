import "./App.css";
import { useState } from "react";
import { FaReact } from "react-icons/fa";

function App() {
  const [number, setNumber] = useState("");

  const handleAdd = (e) => {
    const input = e.target.value;

    // Controlla se il numero è vuoto e se l'input è uno degli operatori consentiti
    if (
      number === "" &&
      (input === "+" || input === "*" || input === "/" || input === "-")
    ) {
      setNumber("error");
    } else {
      setNumber((prevstate) => prevstate + input);
    }
  };

  const handleCanc = () => {
    setNumber("");
  };

  const handleCancLastNumber = () => {
    setNumber(number.slice(0, -1));
  };

  const handleTotal = () => {
    setNumber(eval(number).toString());
  };

  return (
    <div className="text-white w-screen h-screen flex  flex-col  gap-10 justify-center items-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 ">
      <div className=" flex gap-5 items-center text-5xl md:text-8xl">
        <h1>Calculator React</h1>
        <FaReact />
      </div>

      <div className=" grid grid-cols-4 border-2 p-10 gap-10 rounded-3xl max-w-80 ">
        <div className=" col-span-4  h-8 text-right text-4xl w-full ">
          {number}
        </div>
        <button onClick={handleCanc} className=" col-span-2">
          canc
        </button>
        <button onClick={handleCancLastNumber}>c</button>
        <button className=" " value="/" onClick={handleAdd}>
          /
        </button>
        <button value="7" onClick={handleAdd}>
          7
        </button>
        <button value="8" onClick={handleAdd}>
          8
        </button>
        <button value="9" onClick={handleAdd}>
          9
        </button>
        <button value="*" onClick={handleAdd}>
          *
        </button>
        <button value="4" onClick={handleAdd}>
          4
        </button>
        <button value="5" onClick={handleAdd}>
          5
        </button>
        <button value="6" onClick={handleAdd}>
          6
        </button>
        <button value="-" onClick={handleAdd}>
          -
        </button>
        <button value="1" onClick={handleAdd}>
          1
        </button>
        <button value="2" onClick={handleAdd}>
          2
        </button>
        <button value="3" onClick={handleAdd}>
          3
        </button>
        <button value="+" onClick={handleAdd}>
          +
        </button>
        <button value="0" onClick={handleAdd}>
          0
        </button>
        <button value="00" onClick={handleAdd}>
          00
        </button>
        <button value="." onClick={handleAdd}>
          .
        </button>
        <button onClick={handleTotal}>=</button>
      </div>
    </div>
  );
}

export default App;
