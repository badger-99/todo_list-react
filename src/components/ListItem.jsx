import styles from '@/styles/TodoItem.module.css';

const ListItem = ({ task, handleClick, deleteTask }) => {
  const { id, title, completed } = task;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
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
