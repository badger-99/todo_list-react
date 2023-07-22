import { useState } from "react";

const ListItem = ({ task, handleClick, deleteTask }) => {
  const { id, title, completed } = task;
  const [isEditable, setIsEditable] = useState(true)
  return (
    <li>
      {' '}
      <input
        type='checkbox'
        checked={completed}
        id={id}
        onChange={() => handleClick(id)}
      />{' '}
      <input
        type='text'
        value={title}
        readOnly={isEditable}
        style={{ width: '13rem', border: 'none' }}
      />
      <button type='button' onClick={() => deleteTask(id)}>
        remove
      </button>
      <button type='button' onClick={()=>setIsEditable(!isEditable)}>edit</button>
    </li>
  );
};
export default ListItem;
