import React from 'react'


function Lists(props) {
    const {taskArr,onDeleteList}=props

    
  return (
    <div><ul>
    {taskArr.map((task,idx)=>{
      return <li key={idx} onClick={()=>{
        onDeleteList(idx)
      }}>{task}</li>
    })}
  </ul></div>
  )
}

export default Lists