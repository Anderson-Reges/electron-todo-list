const { getAllTasks, createTask, deleteTask, getTaskWithYourProperties } = require('../services/tasks');

const getAllTasksCont = async (_req, res) => {
  const allTasks = await getAllTasks();

  if (!allTasks) return res.status(500).json({ message: 'Internal Error' });

  return res.status(200).json(allTasks);
};

const createNewTask = async (req, res) => {
  const { taskName, shorDescription } = req.body;

  const ifExistTask = await getTaskWithYourProperties(taskName, shorDescription);

  if (ifExistTask.length !== 0) {
    return res.status(409).json({ message: 'Existe uma tarefa com esse nome ou com essa descrição' });
  }

  await createTask(req.body);

  const payload = {
    taskName,
    shorDescription,
  };

  return res.status(201).json(payload);
};

const deleteOneTask = async (req, res) => {
  const { id } = req.params

  await deleteTask(id);
  return res.status(204).json({ message: 'Task deletada com sucesso' });
};

module.exports = {
  getAllTasksCont,
  createNewTask,
  deleteOneTask,
}