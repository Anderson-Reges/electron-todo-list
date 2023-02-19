import AppContext from './AppContext';
import React, { useState } from 'react'

export default function Context({children}) {
  const [taskList, setTaskList] = useState({
    taskName: '',
    shorDescription: ''
  })
  console.log(taskList)

  const setTask = (task) => {
    setTaskList((prevState) => ({
      ...prevState, ...task
    }))
  }

  const obj = {
    setTask,
    taskList,
  }
    return (
      <AppContext.Provider value={ obj } >
        {children}
      </AppContext.Provider>
    )
}