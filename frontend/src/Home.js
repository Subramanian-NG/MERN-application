import { useState, useEffect, useContext } from "react";
import ExpenseComp from "./Components/ExpenseComponent";
import ExpenseFormComponent from "./Components/ExpenseFormComponent";
import ExpenseContext from "./ExpenseContext";
import { useNavigate } from "react-router-dom";
require("./index.css");

const Home = function () {
  const navigate = useNavigate();
  const contextValue = useContext(ExpenseContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/expense");
        if (response.ok) {
          const responseJson = await response.json();
          //console.log("response json--", responseJson);
          setExpenseData(responseJson);
        } else {
          console.log("error in fetching data", response.status);
        }
      } catch (error) {
        console.log("error in fetch API call ", error);
      }
    };
    fetchData();
  }, [contextValue]);

  const [expenseData, setExpenseData] = useState(null);
  const [status, setStatus] = useState("");
  return (
    <div>
      <ExpenseContext.Provider value={[setExpenseData, setStatus, navigate]}>
        <span>{status.length > 0 && status}</span>
        <div className="column">
          <h1>Expense Application</h1>
          {console.log("html print--", expenseData)}
          {expenseData &&
            expenseData.map((expense) => {
              return <ExpenseComp key={expense._id} expenseDetails={expense} />;
              // return <p key={expense._id}>{expense.Name}</p>;
            })}
        </div>
        <div className="column">
          <ExpenseFormComponent />
        </div>
      </ExpenseContext.Provider>
    </div>
  );
};

export default Home;
