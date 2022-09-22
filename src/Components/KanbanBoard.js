import React, { useState } from "react";
import AddButton from "./AddButton/AddButton";
import SortTask from "./SortTask/SortTask";
import { Title } from "./StyleComponents/Button.style";
import UserInput from "./UserInput/UserInput";
import dbConnector from "./DbConnector";
import DisplayCards from "./DisplayCards";

const connectionObj = dbConnector();

function KanbanBoard() {
  const [toggleInputCompStatus, setToggleInputComp] = useState(false);
  const [arrStore, setArrStore] = useState(connectionObj.get());

  const addTask = (value) => {
    const taskObj = { task: value, status: "requested" };
    connectionObj.insert(taskObj);
    setArrStore(connectionObj.get());
    setTimeout(() => {
      console.log(arrStore);
    }, 1000);

  };

  const toggleInputComp = () => {
    setToggleInputComp((prevState) => !prevState);
  };

  return (
    <div>
      <Title>KanBanBoard</Title>
      <AddButton toggleInputComp={toggleInputComp} />
      {toggleInputCompStatus ? (
        <UserInput
          toggleInputComp={toggleInputComp}
          addTask={addTask}
        ></UserInput>
      ) : null}
      <DisplayCards arr={arrStore}/>
    </div>
  );
}
// function databaseAbstracT(){
//     const arr
//     fetch()
//     insert()
//     delete()

// }
{
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
}

const tasks = [
  "TodoList",
  "KanbanBoard",
  "JavaScript",
  "React",
  "TypeScript",
  "Stylecomponents",
  "Redux",
];
export default KanbanBoard;
