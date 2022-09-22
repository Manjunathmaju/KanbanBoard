
import React from 'react'
import { useDrop,useDrag } from "react-dnd";
import { StyleDivList,StyleHeading,StyleCard } from '../DisplayCard.style'

function Inprogress({task,id}) {
 
  return (
    <StyleDivList color="lightgreen">
        <StyleHeading color="lightgreen">Inprogress</StyleHeading>
        <StyleCard >{task}</StyleCard>
      </StyleDivList>
  )
}

export default Inprogress