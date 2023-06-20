import { useState, useContext, memo, useMemo } from "react";
import ExpenseContext from "../ExpenseContext";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { parseISO } from "date-fns";
import { useLocation } from "react-router-dom";
require("../index.css");

function ExpenseEditComponent() {
  //const [setExpenseData, setStatus] = useContext(ExpenseContext);
  const location = useLocation();
  const state = location.state;
  console.log("state value--", state);
  const editExpenseData = JSON.parse(state);
  console.log("editExpenseData in edit form--", editExpenseData);
  const [udpdateStatus, setUpdateStatus] = useState("");
  const [name, setName] = useState(editExpenseData.name);
  const [amount, setAmount] = useState(editExpenseData.amount);
  const [currencytype, setCurrencytype] = useState(
    editExpenseData.currencytype
  );

  const formattedDate = new Date(editExpenseData.date)
    .toISOString()
    .split("T")[0];
  console.log("formatted date--", formattedDate);
  const [date, setDate] = useState(formattedDate);
  //const [date, setDate] = useState("");
  const expenseId = editExpenseData._id;

  return (
    <div>
      <h2>Edit an expense</h2>
      <span>{udpdateStatus.length > 0 && udpdateStatus}</span>
      <form onSubmit={onSubmitForm} className="container">
        <label>Expense Category</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Expense Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        ></input>
        <label>Currency Type</label>
        <input
          type="text"
          value={currencytype}
          onChange={(e) => {
            setCurrencytype(e.target.value);
          }}
        ></input>
        <label>Date of expense</label>
        <Datepicker
          value={date}
          onChange={(selectedDate) => {
            const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
            console.log("formattedDate--", formattedDate);
            setDate(formattedDate);
          }}
        ></Datepicker>
        <br />
        <button type="submit" style={{ maxWidth: "200px" }}>
          Update
        </button>
        <button
          style={{ maxWidth: "200px" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      //console.log("create expense with date--", selectedDate);
      const expenseInput = { name, amount, currencytype, date };
      console.log("expenseInput--", expenseInput);
      const response = await fetch("/api/expense/update/" + expenseId, {
        method: "PATCH",
        body: JSON.stringify(expenseInput),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      console.log("update response json--", responseJson);
      console.log("response status--", response.status);
      if (response.ok && response.status != 500) {
        // setStatus(
        //   "Expensed updated successfully " + JSON.stringify(responseJson)
        // );
        // setName("");
        // setAmount("");
        // setCurrencytype("");
        // setDate("");
        window.location.href = "/";
        //setExpenseData((prevData) => [...prevData, responseJson]);
      } else {
        setUpdateStatus("Error in adding expense " + responseJson);
      }
    } catch (error) {
      console.log("Error in submit form--", error);
    }
  }
}

export default ExpenseEditComponent;
