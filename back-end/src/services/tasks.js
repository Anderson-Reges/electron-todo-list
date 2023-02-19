const { Task } = require('../models');

const getAllTasks = async () => {
  const result = await User.findAll();

  return result;
};

const createTask = async (newTask) => {
  const result = await User.create(newTask);

  return result;
};

const deleteTask = async (id) => {
  const result = await User.destroy({
    where: { id },
  });

  return result;
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
}