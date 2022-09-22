import React, { useContext, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Card from "./Tasks/Card";
import { StyleDivList, StyleHeading } from "./DisplayCard.style";
import { CardContext } from "./KanbanBoard";
import { UserConsumer } from "./Tasks/UserContext";
// import { UserConsumer } from "../Tasks/UserContext";



function DisplayCards({ mainArr,UpdateState }) {
  useEffect(() => {
    console.log("hi i am useEffect");
  });
  const cardsArr = [[], [], []];
  
  mainArr.map((element) => {
    element.status === "completed"
      ? cardsArr[2].push(
          <Card key={element.id} task={element.task} id={element.id} />
        )
      : element.status === "inprogress"
      ? cardsArr[1].push(
          <Card key={element.id} task={element.task} id={element.id} />
        )
      : cardsArr[0].push(
          <Card key={element.id} task={element.task} id={element.id} />
        );
  });
  
  const dropCard = (id) => {
    
    mainArr.map((element)=>{})
    UpdateState()
    console.log(id.status);
    // arr[0].map(card => console.log(card))
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => dropCard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
let val;
  return (
    <div>
    {(value) => {
      return <h1>{value[0].task}</h1>;
    }}

      <StyleDivList color="lightslategrey">
        <StyleHeading color="lightslategrey">Requested</StyleHeading>
        {mainArr.map((element)=>{return(element.status==='requested'?<Card key={element.id} task={element.task} id={element.id} status={element.status} />:console.log('first'))})}
        {/* {cardsArr[0]} */}
      </StyleDivList>
      <StyleDivList color="lightslategrey" ref={drop}>
        <StyleHeading color="lightslategrey">inprogress</StyleHeading>
        {mainArr.map((element)=>{return(element.status==='inprogress'?<Card key={element.id} task={element.task} id={element.id} status={element.status}/>:console.log('second'))})}

        {/* {cardsArr[1]} */}
      </StyleDivList>
      <StyleDivList color="lightslategrey">
        <StyleHeading color="lightslategrey">completed</StyleHeading>
        { mainArr.map((element)=>{
        return( element.status==='completed'?<Card key={element.id} task={element.task} id={element.id} status={element.status}/>:console.log('third'))})}
         
         {/* {basket.map(pet => <PetCard id={pet.id} name={pet.name} />)} */}
        {/* {cardsArr[2]} */}
      </StyleDivList>

    </div>
  );
}

export default DisplayCards;

//   const sortedTasks = getSortedTasks(arr);

//   return (
//     <StyelDivContainer>
//       <StyleDivList  color="lightblue">
//         <StyleHeading color="lightblue">Requested </StyleHeading>
//         <StyleCard> {sortedTasks[0]}</StyleCard>
//       </StyleDivList>
//       <StyleDivList color="lightgreen">
//         <StyleHeading color="lightgreen">Inprogress</StyleHeading>
//         <StyleCard>{sortedTasks[1]}</StyleCard>
//       </StyleDivList>
//       <StyleDivList color="lightslategrey">
//         <StyleHeading color="lightslategrey">Completed</StyleHeading>
//         <StyleCard>{sortedTasks[2]}</StyleCard>
//       </StyleDivList>
//     </StyelDivContainer>
//   );
// }

// const getSortedTasks = (arr) => {
//   const sortedTasks = [[], [], []];

//   arr.forEach((element) => {
//     element.status === "completed"
//       ? sortedTasks[2].push(<StyleCardText  >{element.task}</StyleCardText>)
//       : element.status === "inprogress"
//       ? sortedTasks[1].push(<StyleCardText>{element.task}</StyleCardText>)
//       : sortedTasks[0].push(<StyleCardText >{element.task}</StyleCardText>);
//   });

//   return [...sortedTasks];
// };
