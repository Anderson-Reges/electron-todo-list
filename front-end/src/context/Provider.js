import AppContext from './AppContext';
import React, { useState, useCallback } from 'react'
import taskApi from '../utils/fetch';

export default function Context({children}) {
  const [allTasks, setAllTasks] = useState()

  const getTasks = useCallback(async () => taskApi('GET', 'tasks')
    .then(({ data: tasks }) => setAllTasks(tasks)), []);

  const addTask = async (newTask) => taskApi('POST', 'task', newTask)
    .then(getTasks);

  const rmTask = async (id) => taskApi('DELETE', `tasks/${id}`)
    .then(getTasks);

  const obj = {
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