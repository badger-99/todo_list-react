import { useState } from "react";
import ListItem from "./ListItem";
import todos from "./todos";

const items = todos;
const TodoList = () => {
  const [tasks, setTasks] = useState(items)

  const handleClick = () => {
    setTasks()
}
  return (
      <ul>
      {
        items.map((item) => {
          const { id, title, completed } = item
          return <ListItem key={id} id={id} title={title} completed={completed} />
        })
        }
      </ul>
  )
}
export default TodoList