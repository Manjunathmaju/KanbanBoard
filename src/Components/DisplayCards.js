import React from "react";
import { Title, Lable } from "./StyleComponents/Button.style";
import { StyelDivContainer, StyleCardText,StyleDivList, StyleHeading, StyleCard } from "./DisplayCard.style";

import { useDrag, useDrop } from "react-dnd";
import Requested from "./Tasks/Requested";
import Inprogress from "./Tasks/Inprogress";

function DisplayCards({ arr }) {
  const sortedTasks = getSortedTasks(arr);

 

  return (
    <StyelDivContainer>
      <StyleDivList  color="lightblue">
        <StyleHeading color="lightblue">Requested </StyleHeading>
        <StyleCard> {sortedTasks[0]}</StyleCard>
      </StyleDivList>
      <StyleDivList color="lightgreen">
        <StyleHeading color="lightgreen">Inprogress</StyleHeading>
        <StyleCard>{sortedTasks[1]}</StyleCard>
      </StyleDivList>
      <StyleDivList color="lightslategrey">
        <StyleHeading color="lightslategrey">Completed</StyleHeading>
        <StyleCard>{sortedTasks[2]}</StyleCard>
      </StyleDivList>
    </StyelDivContainer>
  );
}


const getSortedTasks = (arr) => {
  const sortedTasks = [[], [], []];
 
  arr.forEach((element) => {
    element.status === "completed"
      ? sortedTasks[2].push(<StyleCardText  >{element.task}</StyleCardText>)
      : element.status === "inprogress"
      ? sortedTasks[1].push(<StyleCardText>{element.task}</StyleCardText>)
      : sortedTasks[0].push(<StyleCardText >{element.task}</StyleCardText>);
  });

  return [...sortedTasks];
};

export default DisplayCards;
