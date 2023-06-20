import React, { useContext } from "react";
import TestContext from "./TestContext";
export default function ChildComponent() {
  const sharedValue = useContext(TestContext);
  return (
    <div>
      <span>
        Current Num value is using context(without using props) {sharedValue}
      </span>
    </div>
  );
}
