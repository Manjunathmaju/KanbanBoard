const boardArr = {
  requested: [{ task: "typescript", id: "22", status: "requested" }],

  inprogress: [
    { task: "stylecomponents", id: "11", status: "inprogress" },
    { task: "kanbanboard", id: "00", status: "inprogress" },
  ],
  completed: [
    { task: "Todo list", id: "99", status: "completed" },
    { task: "react", id: "33", status: "completed" },
  ],
};

function dbConnector() {
  const getData = () => {
    return { boardArr };
  };

  const setData = (arr) => {
    const status = arr.status;
    boardArr[status].push(arr);
  };

  // const updateData=(arr)=>{
  //   const status=arr.status;
  //   const id=arr.id;
  //   boardArr[status].map((item)=>{
  //     if(item.id===id){
  //       item.status=status
  //       return;
  //     }

  //   })

  // }

  return {
    insert: setData,
    get: getData,
  };
}

export default dbConnector;
