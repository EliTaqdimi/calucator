import React, { useState } from "react";
import "./App.css";

function App() {


  const[display,setDisplay]=useState('');
  const[expression,setExpression]=useState([]);



  const handleClick = value => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  }

  return (
<section class="calculator">
    <h3 className="display">{display}</h3>
    {/* <h4 className="expression">{expression}</h4> */}
 

    <div class="buttons">
          {/* yellow  */}
          <button type="button" className="btn btn-yellow"  onClick={() => handleClick("x")}>x</button>
          <button type="button" className="btn btn-yellow"   onClick={() => handleClick("÷")}>÷</button>
          <button type="button" className="btn btn-yellow" onClick={() => handleClick("-")}>-</button>
          <button type="button" className="btn btn-yellow"  onClick={() => handleClick("+")}>+</button>
          {/* grey buttons  */}
        
          <button type="button" className="btn btn-grey" onClick={() => handleClick(9)}>9</button>
          <button type="button" className="btn btn-grey"  onClick={() => handleClick(8)}>8</button>
          <button type="button" className="btn btn-grey" onClick={() => handleClick(7)}>7</button>
          <button type="button" className="btn btn-grey"  onClick={() => handleClick(6)}>6</button>
          <button type="button" className="btn btn-grey"  onClick={() => handleClick(5)}>5</button>
          <button type="button" className="btn btn-grey"  onClick={() => handleClick(4)}>4</button>
          <button type="button" className="btn btn-grey"  onClick={() => handleClick(3)}>3</button>
          <button type="button" className="btn btn-grey"  onClick={() => handleClick(2)}>2</button>
          <button type="button" className="btn btn-grey"  onClick={() => handleClick(1)}>1</button>
          <button type="button" className="btn btn-grey" onClick={() => handleClick(0)}>0</button>
          <button type="button" class="btn-clear btn-grey" onClick={() => handleClick('')}>C</button>
          <button type="button" className="btn btn-grey"  onClick={() => handleResult()}>=</button>
    </div>
</section>
 );
}
export default App;
