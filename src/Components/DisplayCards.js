import React, { useCallback, useContext } from "react";
import { useDrop } from "react-dnd";
import Card from "./Tasks/Card";
import {
  StyleDivList,
  StyleHeading,
  StyelDivContainer,
} from "./DisplayCard.style";
import { CardContext } from "./KanbanBoard";
import CardContainer from "./Tasks/CardContainer";

function DisplayCards() {
  const { arrStore, setArrStore } = useContext(CardContext);
console.log(arrStore);
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
 <StyleDivList color="lightslategrey">
      <CardContainer data={getObj(element.task, element.status, element.id)} />
    </StyleDivList>
      {/* {arrStore.map(renderCardContainer)} */}
    </StyelDivContainer>
  );
}

function dataProvider(object){
  for (const key in object) {
renderCardContainer(key)      
    }
  }



function renderCardContainer(element) {
  if (element.status === "requested") {
    return renderStyledCardContainer(element);
  }

  if (element.status === "inprogress") {
    return renderStyledCardContainer(element);
  }
  if (element.status === "completed") {
    return renderStyledCardContainer(element);
  }
}

function renderStyledCardContainer(element) {
  return (
    <StyleDivList color="lightslategrey">
      <CardContainer data={getObj(element.task, element.status, element.id)} />
    </StyleDivList>
  );
}

function getObj(task, status, id) {
  const propObj = {
    status: status,
    task: task,
    id: id,
  };

  return propObj;
}

export default DisplayCards;
