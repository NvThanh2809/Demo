import styles from "./form.module.css";
export default function Form({ todos, todo, setToDo, setToDos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...todos, todo]);
    setToDo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setToDo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
