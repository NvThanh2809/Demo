import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
export default function Todo() {
  const [todo, setToDo] = useState({ name: "", done: false });
  const [todos, setToDos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div>
      <Form todos={todos} todo={todo} setToDo={setToDo} setToDos={setToDos} />
      <TodoList todos={todos} setToDos={setToDos} />
      <h1>
        {" "}
        <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      </h1>
    </div>
  );
}
