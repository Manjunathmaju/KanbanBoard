import React, { useCallback, useContext } from "react";
import { useDrop } from "react-dnd";
import Card from "./Tasks/Card";
import {
  StyleDivList,
  StyleHeading,
  StyelDivContainer,
} from "./DisplayCard.style";
import { CardContext } from "./KanbanBoard";

function DisplayCards() {
  const { arrStore, setArrStore } = useContext(CardContext);

  const dropCard = useCallback(
    (id, targetStatus) => {
      arrStore.map((element) => {
        if (element.id === id) {
          element.status = targetStatus;
        }
        return element;
      });
      setArrStore(arrStore);
    },
    [arrStore]
  );

  const [, dropInpro] = useDrop(
    () => ({
      accept: "card",
      drop: (item) => {
        if (item.status === "requested") {
          dropCard(item.id, "inprogress");
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [dropCard]
  );
  const [, dropReq] = useDrop(
    () => ({
      accept: "card",
      drop: (item) => {
        if (item.status === "inprogress") {
          dropCard(item.id, "requested");
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [dropCard]
  );
  const [, dropComp] = useDrop(
    () => ({
      accept: "card",
      drop: (item) => {
        if (item.status === "inprogress") {
          dropCard(item.id, "completed");
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [dropCard]
  );

  return (
    <StyelDivContainer>
      <StyleDivList color="lightslategrey" ref={dropReq}>
        <StyleHeading color="lightslategrey">Requested</StyleHeading>
        {arrStore.map(
          (element) =>
            element.status === "requested" && (
              <Card
                key={element.id}
                task={element.task}
                id={element.id}
                status={element.status}
              />
            )
        )}
      </StyleDivList>
      <StyleDivList color="lightslategrey" ref={dropInpro}>
        <StyleHeading color="lightslategrey">inprogress</StyleHeading>
        {arrStore.map(
          (element) =>
            element.status === "inprogress" && (
              <Card
                key={element.id}
                task={element.task}
                id={element.id}
                status={element.status}
              />
            )
        )}
      </StyleDivList>
      <StyleDivList color="lightslategrey" ref={dropComp}>
        <StyleHeading color="lightslategrey">completed</StyleHeading>
        {arrStore.map(
          (element) =>
            element.status === "completed" && (
              <Card
                key={element.id}
                task={element.task}
                id={element.id}
                status={element.status}
              />
            )
        )}
      </StyleDivList>
    </StyelDivContainer>
  );
}

export default DisplayCards;
