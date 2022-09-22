import React from "react";
import { useDrag } from "react-dnd";
import {
  StyleDivList,
  StyleHeading,
  StyleCard,
  StyleCardText,
} from "../DisplayCard.style";

function Card({ task, id, status }) {
  const [isDragging, drag] = useDrag(
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
      <StyleCard >
        <StyleCardText ref={drag}>{task}</StyleCardText>
      </StyleCard>
    </>
  );
}

export default Card;
