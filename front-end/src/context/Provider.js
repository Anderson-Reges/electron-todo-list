import AppContext from './AppContext';
import React, { useState, useCallback } from 'react'
import taskApi from '../utils/fetch';

export default function Context({children}) {
  const [task, setTask] = useState({
    task_name: '',
    short_description: ''
  })
  const [allTasks, setAllTasks] = useState()

  console.log(task)

  const setTaskState = (task) => {
    setTask((prevState) => ({
      ...prevState, ...task
    }))
  };

  const getTasks = useCallback(async () => taskApi('GET', 'tasks')
    .then(({ data: tasks }) => setAllTasks(tasks)), []);

  const addTask = async () => taskApi('POST', 'task', task)
    .then(getTasks);

  const rmTask = async (id) => taskApi('DELETE', `tasks/${id}`)
    .then(getTasks);

  const obj = {
    setTaskState,
    task,
    allTasks,
    getTasks,
    addTask,
    rmTask,
  }
    return (
      <AppContext.Provider value={ obj } >
        {children}
      </AppContext.Provider>
    )
}