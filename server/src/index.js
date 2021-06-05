const express = require('express')   

const app = express();
const todoRoutes = require('./routes/todo');

app.use('/todo', todoRoutes);

app.listen(8000);