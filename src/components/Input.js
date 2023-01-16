import "./Input.css";
//pass the variable text , result from app to input as props.
const Input = ({ text, result }) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        <h1>{result}</h1>
      </div>

      <div className="text">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
