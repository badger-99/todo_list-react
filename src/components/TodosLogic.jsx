import { useState, useEffect } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import todos from './todos';


const TodosLogic = () => {
  const getInitialTodos = () => {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [tasks, setTasks] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(tasks);
    localStorage.setItem('todos', temp);
  }, [tasks]);

  return (
    <div>
      <InputTodo tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default TodosLogic;
