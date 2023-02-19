const express = require('express');
const cors = require('cors');
const { getAllTasksCont, createNewTask, deleteOneTask } = require('./controllers/tasks');

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true, //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app
  .get('/tasks', getAllTasksCont)
  .post('/task', createNewTask)
  .delete('/tasks/:id', deleteOneTask);

module.exports = app;