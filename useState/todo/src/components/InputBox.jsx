import React from 'react'
import { useState } from 'react'

function InputBox(props) {
  
    const [inputValue, setInputValue] = useState("")
    
    const onChangeInput = (e) =>{
        setInputValue(e.target.value)
        
  }
  const addChildTasks = () =>{
    props.addTasks(inputValue)
    setInputValue("")
  }
  return (
    <div>
        <div>
            <input type="text" value={inputValue} onChange={onChangeInput}/>
            <button onClick={addChildTasks}>Set</button>
        </div>
    </div>
  )
}

export default InputBox