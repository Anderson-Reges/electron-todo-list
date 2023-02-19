import styles from './style.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.AppInputs}>
        <h3>Digite sua Tarefa e salve-a:</h3>
        <div id={styles.divInputs}>
          <input type="text" name="todolist" id="inputText" />
          <input type="button" value="SaveTodo" />
        </div>
      </div>
    </div>
  );
}

export default App;
