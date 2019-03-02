import React from 'react'

const AddItem = props => {
  const handleSubmit = e => {
    e.preventDefault()
    props.addItemHandler(e.target.elements.new.value)
    e.target.elements.new.value = ''
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="new" type="text" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default AddItem
