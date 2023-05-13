import { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  //text to render the number that i have clicked.
  const [text, setText] = useState("");
  //result to store and render the result of the operation.
  const [result, setResult] = useState("");

  // function addToText takes the butoon value and store it as the text value.
  const addToText = (val) => {
    //...text : mean take the first value of it before add the new one.
    setText((text) => [...text, val]);
  };

  // function calculateResult takes the text values which are the number or maybe the operation.
  const calculateResult = () => {
    const input = text.join(""); // Remove commas.
    console.log("input: "+input);
    setResult(math.evaluate(input));
  };
//for clear button
  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Button symbol="Clear" color="black" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default App;
