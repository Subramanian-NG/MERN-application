import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function TestApp() {
  const [clickCount, setClickCount] = useState(0);

  function onClickFunc() {
    setClickCount(clickCount + 1);
  }

  return (
    <div>
      <MyButton countProp={clickCount} buttonClickFunc={onClickFunc} />
      <MyButton countProp={clickCount} buttonClickFunc={onClickFunc} />
    </div>
  );
}

// function MyButton(props) {
//   return (
//     <button onClick={props.buttonClickFunc}>
//       Click me to update count {props.countProp}
//     </button>
//   );
// }

//button component
function MyButton({ countProp, buttonClickFunc }) {
  return (
    <button onClick={buttonClickFunc}>
      Click me to update count {countProp}
    </button>
  );
}

export default TestApp;
