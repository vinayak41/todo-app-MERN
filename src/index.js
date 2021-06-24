const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");
const env = require('dotenv')
const path = require('path');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

env.config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


mongoose
  .connect(
    // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jpxqn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&ssl=true`,
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.jpxqn.mongodb.net:27017,cluster0-shard-00-01.jpxqn.mongodb.net:27017,cluster0-shard-00-02.jpxqn.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-ny7se5-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch(error => {
    console.log(error)
  });

app.use("/todo", todoRoutes);
app.use("/user", userRoutes);


if( process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT);
