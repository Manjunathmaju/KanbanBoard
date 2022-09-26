import React from "react";
import Card from "./Card";

function CardContainer({ data }) {
  return (
    <div>
      <Card key={data.id} task={data.task} id={data.id} status={data.status} />
    </div>
  );
}

export default CardContainer;
// function Hoc(props){
//   const {componetn,array}=props;
//   const res=array.map((elem)=>{
// <Card></Card>
//   })
  
