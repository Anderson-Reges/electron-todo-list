import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import styles from './style.module.scss';

function App() {
  const { allTasks, getTasks, addTask, rmTask } = useContext(AppContext);
  const [newTask, setNewTask] = useState({
    task_name: '',
    short_description: '',
  })

  const handleClickAdd = async () => addTask(newTask)
  const handleClickRm = async ({ target }) => rmTask(target.id)
  
  const getValue = ({ target }) => {
    const { name } = target
    setNewTask({
      [name]: target.value
    })
  }

  useEffect(()=>{
    getTasks();
  }, [getTasks]);

  return (
    <div className={styles.App}>
      <div className={styles.AppInputs}>
        <h3>Digite sua Tarefa e salve-a:</h3>
        <div id={styles.divInputs}>
          <input
            type="text"
            name="task_name"
            value={newTask.task_name}
            id="inputText"
            placeholder='Nome da Tarefa'
            onChange={ getValue }
          />
          <input
            type="text"
            name="short_description"
            value={newTask.short_description}
            id="inputText"
            placeholder='Descrição da Tarefa'
            onChange={ getValue }
          />
          <input type="button" value="SaveTodo" onClick={ handleClickAdd }/>
        </div>
        <div className="tasks">
          <table>
            <tbody className="containerTask">
              <tr>
                <th>id</th>
                <th>name</th>
                <th>description</th>
              </tr>
              {allTasks && allTasks.map((task, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{task.task_name}</td>
                      <td>{task.short_description}</td>
                      <td>
                        <input type="button" id={task.id} value="Remover Tarefa" onClick={ handleClickRm }/>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
