import { useContext } from "react";
import ExpenseContext from "../ExpenseContext";
import { redirect } from "react-router-dom";
export default function ExpenseComponent({ expenseDetails }) {
  const [setExpenseData, setStatus, navigate] = useContext(ExpenseContext);
  return (
    <div>
      <h2>
        {expenseDetails.name}
        <span>
          <button onClick={(e) => editExpense(e, expenseDetails._id)}>
            Edit
          </button>
          <button onClick={(e) => deleteExpense(e, expenseDetails._id)}>
            Delete
          </button>
        </span>
      </h2>
      {expenseDetails.amount}
      <br />
      {expenseDetails.currencytype}
      <br />
      {expenseDetails.date}
    </div>
  );

  async function deleteExpense(e, id) {
    e.preventDefault();
    try {
      //console.log("create expense with date--", selectedDate);
      console.log("id to be deleted--", id);
      const response = await fetch("/api/expense/delete/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      console.log("delete expense json--", responseJson);
      console.log("response.status--", response.status);
      if (response.ok && response.status != 500) {
        setStatus(
          "Expensed deleted successfully " + JSON.stringify(responseJson)
        );
        //window.location.href = "/";
        setExpenseData((prevData) =>
          prevData.filter((json) => json._id !== id)
        );
      } else {
        setStatus("Error in deleting expense " + responseJson);
      }
    } catch (error) {
      console.log("Exception in deleting expence--", error);
    }
  }

  async function editExpense(e, id) {
    e.preventDefault();
    try {
      //console.log("create expense with date--", selectedDate);
      console.log("id to be updated--", id);
      const response = await fetch("/api/expense/view/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      console.log("view expense json--", responseJson);
      console.log("response.status--", response.status);
      if (response.ok && response.status != 500) {
        //window.location.href = "/";
        // return (
        //   <redirect
        //     to={{ pathname: "/edit", state: JSON.stringify(responseJson) }}
        //   />
        // );
        navigate("/edit", { state: JSON.stringify(responseJson) });
      } else {
        setStatus("Error in viewing expense" + responseJson);
      }
    } catch (error) {
      console.log("Exception in deleting expence--", error);
    }
  }
}
