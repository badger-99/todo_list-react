const ListItem = ({id, title, handleClick}) => {
  return (
    <li> <input type="checkbox" id={id} onChange={()=>handleClick(id)}/> { title }</li>
  )
}
export default ListItem