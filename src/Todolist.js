import React from 'react'
import Todocard from './Todocard'

const Todolist = ({Tododata}) => {
    console.log('sd',Tododata)
  return (
   <>
    {
      Tododata.map((el)=>(<Todocard  el={el}  />))
    }
    </>
  )
}

export default Todolist
