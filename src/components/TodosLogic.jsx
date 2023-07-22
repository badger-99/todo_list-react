import { useState } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import todos from './todos';


const TodosLogic = () => {
  const [tasks, setTasks] = useState(todos);

  return (
    <div>
      <InputTodo tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};
export default TodosLogic;
