import { useState, createContext, useContext } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import todos from './todos';

const items = todos;
export const TodoContext = createContext()
export const todoAppContext = useContext(TodoContext)

const TodosLogic = () => {
  const [tasks, setTasks] = useState(items);

  return (
    <TodoContext.Provider value={{tasks, setTasks}}>
    <div>
      <InputTodo />
      <TodoList />
    </div>
    </TodoContext.Provider>
  )
}
export default TodosLogic