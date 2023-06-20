import { useState, useReducer } from "react";
import Buttons from "./ButtonsComponent";
import Status from "./StatusComponent";
import TestContext from "./TestContext";
function TestComp() {
  //const [num, setNum] = useState(0);
  //const num = 0;
  const [num, dispatch] = useReducer(actionReducer, 0);

  //   function increamentNum() {
  //     setNum(num + 1);
  //   }

  //   function decrementNum() {
  //     setNum(num - 1);
  //   }

  //   function resetNum() {
  //     setNum(0);
  //   }

  function increamentNumWithDispatch() {
    dispatch("increment");
  }

  function decrementNumWithDispatch() {
    dispatch("decrement");
  }

  function resetNumWithDispatch() {
    dispatch("reset");
  }

  return (
    <div>
      <Buttons
        incrementFunc={increamentNumWithDispatch}
        decrementFunc={decrementNumWithDispatch}
        resetFunc={resetNumWithDispatch}
      />
      {/* <Status numValue={num} /> */}
      <TestContext.Provider value={num}>
        <Status />
      </TestContext.Provider>
    </div>
  );
}

function actionReducer(stateValue, action) {
  //to seperate the state update action from the component. This function is not associated with component.
  //3 functions logic written in a single function outside the component
  console.log("actionType--", action);
  console.log("numValue--", stateValue);
  switch (action) {
    case "increment":
      return stateValue + 1;
    case "decrement":
      return stateValue - 1;
    case "reset":
      return 0;
    default:
      throw Error("unknown action");
  }
}

export default TestComp;
