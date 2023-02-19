require('dotenv').config()

const port = process.env.API_PORT;

export const getAllTask = async () => {
  const response = await fetch(`http://localhost:${port}/tasks`)
  const res = await response.json();
  return res
};

export const createTask = async (newTask) => {
  const response = await fetch(`http://localhost:${port}/task`, {
    method: 'POST',
    body: JSON.stringify({
      task_name: newTask.taskName,
      shor_description: newTask.shorDescription,
    })
  })
  const res = await response.json();
  return res
}

export const deleteTask = async (id) => {
  const response = await fetch(`http://localhost:${port}/tasks/${id}`, {
    method: 'DELETE'
  })
  const res = await response.json();
  return res
}