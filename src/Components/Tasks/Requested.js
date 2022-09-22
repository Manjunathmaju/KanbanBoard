import { StyleDivList,StyleHeading,StyleCard } from '../DisplayCard.style'
import React from 'react'
import {useDrag} from 'react-dnd'


function Requested({task,id}) {
    const [{isDragging},drag]=useDrag(()=>({
                type:'heading',
                item:{id:id},
                collect:(monitor)=>({
                    isDragging:!!monitor.isDragging(),
                })
            }))
  return (
    <StyleDivList ref={drag} color="lightblue">
    <StyleHeading color="lightblue">Requested </StyleHeading>
    <StyleCard style={({border:isDragging?'yellow':'white'})} ref={drag}> {task}</StyleCard>
  </StyleDivList>
  )
}

export default Requested