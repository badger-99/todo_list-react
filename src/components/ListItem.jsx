import { useState } from 'react';
import styles from '@/styles/TodoItem.module.css';

const ListItem = ({ task, handleClick, deleteTask, setUpdate }) => {
  const { id, title, completed } = task;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

    const handleUpdatedDone = (event) => {
      if (event.key === 'Enter') {
        setEditing(false);
      }
    };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type='checkbox'
          checked={completed}
          id={id}
          onChange={() => handleClick(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button type='button' onClick={() => deleteTask(id)}>
          Remove
        </button>
        <button onClick={handleEditing}>Edit</button>
      </div>
      <input
        type='text'
        value={title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default ListItem;
