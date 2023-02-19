import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import styles from './style.module.scss';

function App() {
  const { setTask, task, allTasks, getTasks, addTask, rmTask } = useContext(AppContext);

  const handleClickAdd = async () => addTask()
  const handleClickRm = async ({ target }) => {
    console.log(target)
  }
  
  const getValue = ({ target }) => {
    const { name } = target
    setTask({
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
          <input type="text" name="taskName" id="inputText" onChange={ getValue } />
          <input type="text" name="shorDescription" id="inputText" onChange={ getValue } />
          <input type="button" value="SaveTodo" onClick={ handleClickAdd }/>
        </div>
        <div className="tasks">
          <table>
            <div className="containerTask">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>description</th>
            </tr>
            {allTasks && allTasks.map((task) => (
                <div className="taskLine">
                  <tr>
                    <td>{task.id}</td>
                    <td>{task.task_name}</td>
                    <td>{task.short_description}</td>
                  </tr>
                  <input type="button" value="Remover Tarefa" onClick={ handleClickRm }/>
                </div>
                ))}
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
