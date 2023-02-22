import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import styles from './style.module.scss';

function App() {
  const { allTasks, getTasks, addTask, rmTask } = useContext(AppContext);
  const [newTask, setNewTask] = useState({
    task_name: '',
    short_description: '',
  })

  const handleClickAdd = async () => {
    addTask(newTask)
    setNewTask({
      task_name: '',
      short_description: '',
    })
  }
  const handleClickRm = async ({ target }) => rmTask(target.id)
  
  const getValue = ({ target }) => {
    const { name } = target
    setNewTask((prevState) => ({
      ...prevState, [name]: target.value
    }))
  }

  useEffect(()=>{
    getTasks();
  }, [getTasks]);

  return (
    <div className={styles.App}>
      <div className={styles.AppInputs}>
        <h3>Digite sua Tarefa:</h3>
        <div id={styles.divInputs}>
          <input
            type="text"
            name="task_name"
            id="inputText"
            value={newTask.task_name}
            placeholder='Nome da Tarefa'
            onChange={ getValue }
          />
          <input
            type="text"
            name="short_description"
            id="inputText"
            value={newTask.short_description}
            placeholder='Descrição da Tarefa'
            onChange={ getValue }
          />
          <input type="button" value="Salve a Tarefa" onClick={ handleClickAdd }/>
        </div>
        <div className={styles.tasks}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
              {allTasks && allTasks.map((task, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{task.task_name}</td>
                      <td>{task.short_description}</td>
                      <td>
                        <input type="button" id={task.id} value="X" onClick={ handleClickRm }/>
                      </td>
                    </tr>
                  </tbody>
                  ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
