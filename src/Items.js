import React from 'react'
import Item from './Item'

const Items = props => {
  console.log(props)
  return (
  <div>
    <ol>
      {props.items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </ol>
  </div>
)}

export default Items
