const express = require('express');
const { getAllTasksCont, createNewTask, deleteOneTask } = require('./controllers/tasks');

const app = express();

app.use(express.json());

app
  .get('/tasks', getAllTasksCont)
  .post('/task', createNewTask)
  .delete('/tasks/:id', deleteOneTask);

module.exports = app;