import { Double } from "mongodb";
import mongoose from "mongoose";

const schema = mongoose.Schema;

const expenseSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currencytype: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    place: {
      type: String,
    },
  },
  { timestamps: true }
);

const ExpenseModel = mongoose.model("ExpenseCollection", expenseSchema);

export default ExpenseModel;
