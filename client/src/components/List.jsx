
import React from 'react'
import  ListItem from './ListItem.jsx'

function List(props) {
  return (
    <div>
{props.items.map((e) => (
  <div >
    <ListItem item={e}  updateProduct={props.upd}  delet={props.deleteProduct} key={e.id}  />
  </div>
))}
  </div>
  )
}

export default List