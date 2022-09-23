import React from "react";
import { StyledButton } from "../StyleComponents/Button.style";


function AddButton({toggleInputComp}) {
  const displayForm = () => {
    toggleInputComp()
  };

  return (
    <div>
      <StyledButton  color='blueviolet' onClick={displayForm} >Add Card</StyledButton>
    </div>
  );
}

export default AddButton;
