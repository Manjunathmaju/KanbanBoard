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
    (id, targetStatus, currentStatus) => {
      let count=0;
      arrStore.boardArr[currentStatus].map((element) => {
        if (element.id === id) {
          element.status = targetStatus;
          arrStore.boardArr[targetStatus].push(element)
          arrStore.boardArr[currentStatus].splice(count,1);
          console.log(arrStore);
          // delete arrStore.boardArr[currentStatus][count];
        }else{
          count+=1;
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
          dropCard(item.id, "inprogress",'requested');
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
          dropCard(item.id, "requested",'inprogress');
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
          dropCard(item.id, "completed",'inprogress');
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [dropCard]
  );


  function trialFun(obj,heading) {
    return (
      <div>
        <StyleHeading color="lightslategrey">{heading}</StyleHeading>
        {obj.map((element) => {
          return <Card key={element.id} obj={element}></Card>;
        })}
      </div>
    );
  }

  return (
    <StyelDivContainer>
      <StyleDivList color="lightslategrey" ref={dropReq}>
        {trialFun(arrStore.boardArr.requested,'requested')}
      </StyleDivList>

      <StyleDivList color="lightslategrey" ref={dropInpro}>
        {trialFun(arrStore.boardArr.inprogress,'inprogress')}
      </StyleDivList>

      <StyleDivList color="lightslategrey" ref={dropComp}>
        {trialFun(arrStore.boardArr.completed,'completed')}
      </StyleDivList>

      {/* {arrStore.map(renderCardContainer)} */}
    </StyelDivContainer>
  );
}

export default DisplayCards;
