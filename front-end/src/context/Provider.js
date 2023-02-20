import AppContext from './AppContext';
import React, { useState, useCallback } from 'react'
import taskApi from '../utils/fetch';

export default function Context({children}) {
  const [newtask, setNewTask] = useState({
    task_name: '',
  })
  const [allTasks, setAllTasks] = useState()
  
  const setTaskState = (task) => {
    setNewTask((prevState) => ({
      ...prevState, ...task
    }))
  };

  const getTasks = useCallback(async () => taskApi('GET', 'tasks')
    .then(({ data: tasks }) => setAllTasks(tasks)), []);

  const addTask = async () => taskApi('POST', 'task', newtask)
    .then(getTasks);

  const rmTask = async (id) => taskApi('DELETE', `tasks/${id}`)
    .then(getTasks);

  const obj = {
    setTaskState,
    newtask,
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