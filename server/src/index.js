const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");
const env = require('dotenv')

const app = express();

app.use(cors());

env.config();
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

app.use("/todo", todoRoutes);
app.use("/user", userRoutes);

app.listen(8000);
