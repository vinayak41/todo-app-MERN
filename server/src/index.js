const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


mongoose
  .connect(
    `mongodb+srv://vinayak:vinayak123@cluster0.jpxqn.mongodb.net/todo-app-mern?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  });
const todoRoutes = require("./routes/todo");

app.use("/todo", todoRoutes);

app.listen(8000);
