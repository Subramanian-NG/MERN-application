import HomePage from "./Home";
import ExpenseEditComponent from "./Components/ExpenseEditFormComponent";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function ExpenseApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<ExpenseEditComponent />} />
      </Routes>
    </div>
  );
}
