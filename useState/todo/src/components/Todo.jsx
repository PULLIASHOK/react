import React from 'react'
import Lists from './Lists'
import InputBox from './InputBox'

import {useState} from 'react'

function Todo() {

    const [taskArr,setTaskArr]=useState([])
    const addTasks = (inputValue) =>{
      const newTask=inputValue
      const newTaskArr=[...taskArr,newTask]
      setTaskArr(newTaskArr)
    }

    const onDeleteList = (idx)=>{
      const filterTodoList=taskArr.filter((task,cIdx) => {
        return idx != cIdx
      })
      setTaskArr(filterTodoList)
    }
  return (
    <div>
        <InputBox addTasks={addTasks}></InputBox>
        <Lists taskArr={taskArr} onDeleteList={onDeleteList}></Lists>
    </div>
  )
}

export default Todo