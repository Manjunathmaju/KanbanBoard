import React, { useState } from 'react'
import  ReactDOM from 'react-dom';
import { StyleUserInputDiv,StyledButton } from '../StyleComponents/Button.style';

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
    ReactDOM.createPortal( 
      <StyleUserInputDiv>
        <h5>Enter the task!</h5>
        <input type='text' onChange={(e)=>handleOnchange(e.target.value)}/>
        <div>
          <br/>
        <StyledButton  color='blueviolet' onClick={handleOnclick}>Add</StyledButton>
        <StyledButton color='red' onClick={toggleInputComp}>Cancal</StyledButton>
        </div>
        </StyleUserInputDiv>
   , document.getElementById("modalRoot"))
  );

}

export default UserInput