import React from 'react'

const Todocard = ({el}) => {
  return (
    <div  className='tasks'>
      {el.Text}
      <button>X</button>
      <button>Done</button>
    </div>
  )
}

export default Todocard
