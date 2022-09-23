import React from "react";
import { StyleDivList, StyleHeading } from "../DisplayCard.style";
import Card from "./Card";

function CardContainer({ data }) {
  return (
    <div>
      <StyleHeading color="lightslategrey">{data.status}</StyleHeading>
      <Card key={data.id} task={data.task} id={data.id} status={data.status} />
    </div>
  );
}

export default CardContainer;
function Hoc(props){
  const {componetn,array}=props;
  cosnt res=array.map((elem)=>{
<Card></Card>
  })
  
}