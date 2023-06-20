import ExpenseModel from "../models/Expense.js";
import mongoose from "mongoose";

const createExpense = async (req, res) => {
  //console.log("create expense API");
  //res.write("create expense API");
  console.log("request body--", req.body);
  const { name, amount, currencytype, date, place } = req.body;

  console.log("name from body--", name);

  try {
    const expense = await ExpenseModel.create({
      name,
      amount,
      currencytype,
      date,
      place,
    });

    //res.write(expense);
    res.json(expense);
  } catch (error) {
    console.log("catching error message--", error.message);
    //res.write("Error in inserting data to model--", error.message);
    res.status(500);
    res.json(error.message);
  }

  //res.end();
};

const listExpense = async (req, res) => {
  try {
    const expenses = await ExpenseModel.find({}).sort({ createdAt: -1 });
    res.json(expenses);
  } catch (error) {
    console.log("catching error message--", error.message);
    //res.write("Error in inserting data to model--", error.message);
    res.json(error.message);
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("delete expense API");
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.json("Invalid object id");
    const expense = await ExpenseModel.findOneAndDelete({ _id: id });
    if (expense) res.json(expense);
    else res.json("Object not found for deletion");
  } catch (error) {
    console.log("catching error message--", error.message);
    //res.write("Error in inserting data to model--", error.message);
    res.status(500);
    res.json(error.message);
  }
};

const viewExpense = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.json("Invalid object id");
    const expense = await ExpenseModel.findById(id);
    if (expense) res.json(expense);
    else res.json("Object not found");
  } catch (error) {
    console.log("catching error message--", error.message);
    //res.write("Error in inserting data to model--", error.message);
    res.status(500);
    res.json(error.message);
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.json("Invalid object id");
    const expense = await ExpenseModel.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (expense) res.json(expense);
    else res.json("Object not found");
  } catch (error) {
    console.log("catching error message--", error.message);
    //res.write("Error in inserting data to model--", error.message);
    res.status(500);
    res.json(error.message);
  }
};

const ControllerFunctions = {
  createExpense,
  listExpense,
  viewExpense,
  deleteExpense,
  updateExpense,
};

export default ControllerFunctions;
