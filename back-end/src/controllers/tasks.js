const { getAllTasks, createTask, deleteTask } = require('../services/tasks');

const getAllTasksCont = async (_req, res) => {
  const allTasks = await getAllTasks();

  if (!allTasks) return res.status(500).json({ message: 'Internal Error' });

  return res.status(200).json(allTasks);
};

module.exports = {
  getAllTasksCont
}