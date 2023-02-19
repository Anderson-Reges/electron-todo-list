const { Task } = require('../models');

const getAllTasks = async () => {
  const result = await Task.findAll();

  return result;
};

const getTaskWithYourProperties = async (taskName, description) => {
  const result = await Task.findAll({
    where: { task_name: taskName, short_description: description},
  });

  return result;
};


const createTask = async (newTask) => {
  const result = await Task.create(newTask);

  return result;
};

const deleteTask = async (id) => {
  const result = await Task.destroy({
    where: { id },
  });

  return result;
};

module.exports = {
  getAllTasks,
  getTaskWithYourProperties,
  createTask,
  deleteTask,
}