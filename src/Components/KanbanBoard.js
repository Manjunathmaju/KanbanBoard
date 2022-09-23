import React, { createContext, useState } from "react";
import AddButton from "./AddButton/AddButton";
import { Title } from "./StyleComponents/Button.style";
import UserInput from "./UserInput/UserInput";
import dbConnector from "./DbConnector";
import DisplayCards from "./DisplayCards";
const connectionObj = dbConnector();

export const CardContext =  createContext();
// const array = [
//   { task: "Todo list", id: "99", status: "completed" },
//   { task: "react", id: "33", status: "completed" },
//   { task: "typescript", id: "22", status: "requested" },
//   { task: "stylecomponents", id: "11", status: "inprogress" },
//   { task: "kanbanboard", id: "00", status: "inprogress" },
// ];


function KanbanBoard() {
  const [toggleInputCompStatus, setToggleInputComp] = useState(false);
  const [arrStore, setArrStore] = useState(connectionObj.get());


  const addTask = (value) => {
    const taskObj = { task: value, id:Date.now(),status: "requested" };
    connectionObj.insert(taskObj);
    setArrStore(connectionObj.get());
  };  

  const toggleInputComp = () => {
    setToggleInputComp((prevState) => !prevState);
  };

  return (
    <CardContext.Provider value={{arrStore,setArrStore}}>
      <Title>KanBanBoard</Title>
      <AddButton toggleInputComp={toggleInputComp} />
      {toggleInputCompStatus && (
        <UserInput
          toggleInputComp={toggleInputComp}
          addTask={addTask}
        />
      ) }
      <DisplayCards/>
    </CardContext.Provider>
  );
}
// function databaseAbstracT(){
//     const arr
//     fetch()
//     insert()
//     delete()

// }

  /* <kanborad>
  <container>
    const [arr,setArr]=useState()

    insert(
        setArr
    )
    delete()
    <UserInputForm insert={insert}>

    </UserInputForm>
    <display arr={arr}>
        
    </display>
  </container>
</kanborad>; */


// const tasks = [
//   "TodoList",
//   "KanbanBoard",
//   "JavaScript",
//   "React",
//   "TypeScript",
//   "Stylecomponents",
//   "Redux",
// ];
export default KanbanBoard;
