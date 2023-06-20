//import { Router } from "express";
import { Router } from "express";
import ExpenseModel from "../models/Expense.js";
import ControllerFunctions from "../controllers/ExpenseController.js";

const routes = Router();

//const express = require("express");
//const routes = express.Router();

routes.get("/", ControllerFunctions.listExpense);

routes.get("/view/:id", ControllerFunctions.viewExpense);

routes.post("/create", ControllerFunctions.createExpense);

routes.delete("/delete/:id", ControllerFunctions.deleteExpense);

routes.patch("/update/:id", ControllerFunctions.updateExpense);

export default routes;
