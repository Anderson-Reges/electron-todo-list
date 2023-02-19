import AppContext from './AppContext';
import React, { useState, useCallback } from 'react'
import taskApi from '../utils/fetch';

export default function Context({children}) {
  const [task, setTask] = useState({
    taskName: '',
    shorDescription: ''
  })
  const [allTasks, setAllTasks] = useState()

  console.log(allTasks)

  const setTaskState = (task) => {
    setTask((prevState) => ({
      ...prevState, ...task
    }))
  };

  const getTasks = useCallback(async () => taskApi('GET', 'tasks')
    .then(({ data: tasks }) => setAllTasks(tasks)), []);

  const addTask = async () => taskApi('POST', 'task', task)
    .then(({ status }) => console.log(status));

  const rmTask = async (id) => taskApi('DELETE', `task/${id}`)
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