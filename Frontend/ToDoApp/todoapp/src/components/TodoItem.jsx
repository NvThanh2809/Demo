// const header = { color: "blue", fontSize: "100px" };
import styles from "./todoitem.module.css";
export default function TodoItem({ todos, item, setToDos }) {
  function handelDelete() {
    console.log("Đã xóa", item.name);
    setToDos(todos.filter((todo) => todo.name !== item.name));
  }
  function handleClick() {
    console.log("Đã ấn", item.name);
    const newArray = todos.map((todo) =>
      todo.name === item.name ? { ...todo, done: !todo.done } : todo,
    );
    setToDos(newArray);
  }
  return (
    <div className={styles.item}>
      <h1 className={styles.itemName}>
        <span
          className={item.done ? styles.completed : ""}
          onClick={handleClick}
        >
          {item.name}
        </span>

        <span>
          <button onClick={handelDelete} className={styles.modernButton}>
            x
          </button>
        </span>
      </h1>
      <hr className={styles.line} />
    </div>
  );
}
// todos.filter((todo) => todo !== item)
// todos.filter(): hàm lọc mảng- duyệt từng phần tử và giữ lại các phần tử thỏa mãn điều kiện và trả về mảng mới
// (todo) => todo !== item : todo là từng phần tử của mảng
// item: phần tử mình muốn xóa => Giữ lại mọi todo KHÁC item
