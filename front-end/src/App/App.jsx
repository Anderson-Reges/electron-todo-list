import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from './style.module.scss';

function App() {
  const { setTask } = useContext(AppContext);

  const handleClick = () => {
    
  }
  
  const getValue = ({ target }) => {
    const { name } = target
    setTask({
      [name]: target.value
    })
  }

  return (
    <div className={styles.App}>
      <div className={styles.AppInputs}>
        <h3>Digite sua Tarefa e salve-a:</h3>
        <div id={styles.divInputs}>
          <input type="text" name="taskName" id="inputText" onChange={ getValue } />
          <input type="text" name="shorDescription" id="inputText" onChange={ getValue } />
          <input type="button" value="SaveTodo" onClick={ handleClick }/>
        </div>
      </div>
    </div>
  );
}

export default App;
