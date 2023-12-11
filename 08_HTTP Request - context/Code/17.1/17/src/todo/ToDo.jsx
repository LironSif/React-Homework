import React, { useState, useRef, useEffect } from "react";
import '../todo/todo.css'

const ToDo = () => {
  const [list, setList] = useState(null);
  const myInput = useRef();

  useEffect(() => {
    const storgeList = localStorage.getItem("my_list");
    if (storgeList) {
      setList(JSON.parse(storgeList));
    } else {
      setList([]);
    }
  }, []);

  function addToList(e) {
    if(myInput.current.value === '') return
    const newTask = myInput.current.value;
    const newList = [...list, newTask + "-f"];
    setList(newList);
    localStorage.setItem("my_list", JSON.stringify(newList));
    myInput.current.value = "";
  }

useEffect(() => {
  console.log(list)
}, [list])


  function handleClick (i) {
    const [task, flag] = list[i].split("-")
    const temp = [...list]
    if(flag==="f"){
        temp.splice(i,1,task + '-t')
    } else{
        temp.splice(i,1,task + '-f')
    }
    setList(temp);
    localStorage.setItem("my_list", JSON.stringify(temp));
  }

  function HandleRemove (e, i) {
    e.stopPropagation()
    const temp = [...list]
    temp.splice(i,1)
    setList(temp);
    localStorage.setItem("my_list", JSON.stringify(temp));


  }

  return (
    <main className="todo">
        <h1>TO DO LIST</h1>
      <input ref={myInput} type="text" />
      <button onClick={addToList}>Add To List</button>
      {list &&
        list.map((el, i) => {
          const [task, flag] = el.split("-");
          return(
          <div onClick={()=> handleClick(i)}>{`${flag === "f" ? "X" : "V"}  -  ${task}`}
          <button onClick={(e)=>HandleRemove(e, i)}>X</button>
          </div>)
        })}
    </main>
  );
};

export default ToDo;
