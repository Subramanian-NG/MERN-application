export default function ButtonsComp({
  incrementFunc,
  decrementFunc,
  resetFunc,
}) {
  return (
    <div>
      <ButtonComp buttonName="Increment" onclickFunc={incrementFunc} />
      <ButtonComp buttonName="Decrement" onclickFunc={decrementFunc} />
      <ButtonComp buttonName="Reset" onclickFunc={resetFunc} />
    </div>
  );
}

function ButtonComp({ buttonName, onclickFunc }) {
  return (
    <div>
      <button onClick={onclickFunc}>{buttonName}</button>
    </div>
  );
}
