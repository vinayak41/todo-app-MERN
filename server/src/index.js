const express = require('express')   
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    `mongodb+srv://vinayak:vinayak123@cluster0.jpxqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database Connected')
})
const todoRoutes = require('./routes/todo');

app.use('/todo', todoRoutes);

app.listen(8000);