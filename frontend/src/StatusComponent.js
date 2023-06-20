import ChildComp from "./InnerChildComponent";
// export default function StatusComp({ numValue }) {
export default function StatusComp() {
  return (
    <div>
      {/* <span>Current Num value is {numValue}</span> */}
      <ChildComp />
    </div>
  );
}
