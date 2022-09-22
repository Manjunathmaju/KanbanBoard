import React from "react";

const arr = [];
function dbConnector() {
  const fetchData = () => {
    return [...arr];
  };
  const insertData = (value) => {
    arr.push(value);
  };

  return {
    insert:insertData,
    get:fetchData
  }
}

export default dbConnector;
