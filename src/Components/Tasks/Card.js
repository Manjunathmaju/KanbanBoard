import React from "react";
import { useDrag } from "react-dnd";
import {
  StyleCard,
  StyleCardText,
} from "../DisplayCard.style";

function Card({obj}) {
  const id=obj.id
  const task=obj.task
  const status=obj.status;
  const [, drag] = useDrag(
    () => ({
      type: "card",
      item: {  id,task,status },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <>
      <StyleCard ref={drag}>
        <StyleCardText ref={drag}>{task}</StyleCardText>
      </StyleCard>
    </>
  );
}

export default Card;
