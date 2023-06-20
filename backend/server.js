//const express = require("express");
//require("dotenv").config();
import express from "express";
import routes from "./routes/expenseroutes.js";
import dotenv from "dotenv";
import mongodb from "mongodb";
import mongoose from "mongoose";
dotenv.config();

const app = express();

// Middleware to parse request bodies as JSON
app.use(express.json());

app.use((req, res, next) => {
  console.log("request method type ", req.method);
  console.log("request path ", req.path);
  next();
});

app.use("/api/expense/", routes);

// app.get("/", (req, res) => {
//   res.json({ msg: "Response message" });
//   /*
//   res.write("hello message", () => {
//     console.log("data written to response successfully");
//   });
//   */
//   res.write("hello message");
//   res.end();
// });

//mongodb.MongoClient.connect;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(
//         "Mongo DB connected and express server running on ",
//         process.env.PORT
//       );
//     });
//   })
//   .catch((error) => {
//     console.log("error in connecting to DB ----", error);
//   });

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(
        "Mongo DB connected and express server running on ",
        process.env.PORT
      );
    });
  } catch (error) {
    console.log("error in connecting to DB ----", error);
  }
}

connectDB();
