import React, { useState } from 'react'
import  ReactDOM from 'react-dom';

function UserInput({toggleInputComp  ,addTask}) {
    const [text,setText]=useState();

    const handleOnchange=(value)=>{
        setText(value);
    }

    const handleOnclick=()=>{
        addTask(text)
        toggleInputComp()
    }

  return (
    ReactDOM.createPortal( <div>
        <input type='text' onChange={(e)=>handleOnchange(e.target.value)}/>
        <button onClick={handleOnclick}>Add</button>
        <button onClick={toggleInputComp}>Cancal</button>
    </div>, document.getElementById("modalRoot"))
  );

}

export default UserInput