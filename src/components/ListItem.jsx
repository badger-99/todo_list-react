const ListItem = ({id, title, completed, handleClick}) => {
  return (
    <li> <input type="checkbox" checked={completed} id={id} onChange={()=>handleClick(id)}/> { title }</li>
  )
}
export default ListItem