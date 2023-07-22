const ListItem = ({id, title}) => {
  return (
    <li> <input type="checkbox" id={id} /> { title }</li>
  )
}
export default ListItem