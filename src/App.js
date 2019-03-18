import React, { useState } from 'react'
import AddItem from './AddItem'
import Items from './Items'

const App = () => {
  const [items, itemState] = useState([])
  const addItemHandler = array => {
    itemState(() => [...items, array])
  }
  return (
    <div>
      <header />
      <Items items={items} />
      <AddItem addItemHandler={addItemHandler} />
    </div>
  )
}

export default App
