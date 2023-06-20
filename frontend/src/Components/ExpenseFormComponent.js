import { useState, useContext } from "react";
import ExpenseContext from "../ExpenseContext";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { parseISO } from "date-fns";
require("../index.css");

export default function ExpenseForm() {
  const [setExpenseData, setStatus] = useContext(ExpenseContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [currencytype, setCurrencytype] = useState("");
  //const [selectedDate, setSelectedDate] = useState(moment("01/01/2023"));
  const [date, setDate] = useState("");

  // function changeDate(selectedValue) {
  //   console.log("set selected date in changedate--", selectedValue);
  //   const formattedDate = moment(selectedValue).format("YYYY-MM-DD");
  //   setSelectedDate(selectedValue);
  // }
  return (
    <div>
      <h2>Add an expense</h2>
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
          type="text"
          value={date}
          selected={date}
          onChange={(selectedDate) => {
            const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
            console.log("formattedDate--", formattedDate);
            setDate(selectedDate);
          }}
        ></Datepicker>
        {/* <Datepicker
          type="text"
          selected={selectedDate}
          onChange={changeDate}
        ></Datepicker> */}
        <br />
        <button type="submit" style={{ maxWidth: "200px" }}>
          Create
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
      const response = await fetch("/api/expense/create", {
        method: "POST",
        body: JSON.stringify(expenseInput),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJson = await response.json();
      console.log("add response json--", responseJson);
      console.log("response.status--", response.status);
      if (response.ok && response.status != 500) {
        setStatus("Expensed add successfully " + JSON.stringify(responseJson));
        setName("");
        setAmount("");
        setCurrencytype("");
        setDate("");
        //window.location.href = "/";
        setExpenseData((prevData) => [...prevData, responseJson]);
      } else {
        setStatus("Error in adding expense " + responseJson);
      }
    } catch (error) {
      console.log("Error in submit form--", error);
    }
  }
}
