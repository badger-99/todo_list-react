import { useState } from "react";
import ListItem from "./ListItem";

const TodoList = ({tasks, setTasks}) => {

  const handleClick = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, completed:!task.completed}
      }
      return task
    }) 
    setTasks(newTasks)
  }
  
  const deleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id)
    setTasks(newTask)
  }

  return (
      <ul>
      {
        tasks.map((task) => {
          const { id } = task
          return <ListItem key={id} task={task} handleClick={handleClick} deleteTask={deleteTask} />
        })
        }
      </ul>
  )
}
export default TodoList