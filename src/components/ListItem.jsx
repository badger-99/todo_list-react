const ListItem = ({ task, handleClick, deleteTask }) => {
  const { id, title, completed } = task;
  return (
    <li>
      {' '}
      <input
        type='checkbox'
        checked={completed}
        id={id}
        onChange={() => handleClick(id)}
      />{' '}
      {title}
      <button type="button" onClick={()=>deleteTask(id)}>remove</button>
    </li>
  );
};
export default ListItem