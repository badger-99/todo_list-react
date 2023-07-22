import { useState } from "react";
import ListItem from "./ListItem";
import todos from "./todos";

const items = todos;
const TodoList = () => {
  const [tasks, setTasks] = useState(items)

  const handleClick = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, completed:!task.completed}
      }
      return task
    }) 
    setTasks(newTasks)
}

  return (
      <ul>
      {
        tasks.map((task) => {
          const { id, title, completed } = task
          return <ListItem key={id} id={id} title={title} completed={completed} handleClick={handleClick} />
        })
        }
      </ul>
  )
}
export default TodoList