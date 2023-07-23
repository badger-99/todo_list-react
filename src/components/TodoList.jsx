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
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const setUpdate = (updatedTitle, id) => {
    const newTasks = tasks.map((todo) => {
      if (todo.id === id) {
        todo.title = updatedTitle;
      }
      return todo;
    })
    setTasks(newTasks)
  };

  return (
      <ul>
      {
        tasks.map((task) => {
          const { id } = task
          return (
            <ListItem
              key={id}
              task={task}
              handleClick={handleClick}
              deleteTask={deleteTask}
              setUpdate={setUpdate}
            />
          );
        })
        }
      </ul>
  )
}
export default TodoList