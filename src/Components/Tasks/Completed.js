import React from "react";
import { StyleDivList, StyleHeading, StyleCard,StyleCardText } from "../DisplayCard.style";

function Completed({ task }) {
  return (
    <StyleDivList color="lightslategrey">
      <StyleHeading color="lightslategrey">Completed</StyleHeading>
      <StyleCard>
        <StyleCardText>{task}</StyleCardText>
      </StyleCard>
    </StyleDivList>
  );
}

export default Completed;
