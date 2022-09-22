import React from "react";

const arr = [
  { task: "Todo list", status: "completed" },
  { task: "react", status: "completed" },
  {task:'typescript',status:'requested'},
  {task:'stylecomponents',status:'inprogress'},
  {task:'kanbanboard',status:'inprogress'},
];

function dbConnector() {
  const fetchData = () => {
    return [...arr];
  };
  const insertData = (value) => {
    arr.push(value);
  };

  return {
    insert: insertData,
    get: fetchData,
  };
}

export default dbConnector;
