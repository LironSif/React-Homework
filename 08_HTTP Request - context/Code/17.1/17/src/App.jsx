import { useState } from 'react'
import './App.css'
import ToDo from './todo/ToDo'
import List from './list/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app'>
      <h1>this is the component code use here :</h1>
      <div className='code'>
      <pre><code>
          {`import React, { useEffect, useRef, useState } from "react";
import "../list/list.css";

const List = () => {
  const [toDoList, setToDoList] = useState([]);
  
 

  const inputRef = useRef();

  useEffect(() => {
    const localList = localStorage.getItem('myList')
    if(localList){
      setToDoList(JSON.parse(localList));
    }
    else{
      setToDoList([])
    }
  }, []);

  function HandleClick() {
    if(inputRef.current.value === '') return
    const userInput = inputRef.current.value;
    const newList = [...toDoList, userInput + "-f"]
    setToDoList(newList);
    localStorage.setItem('myList', JSON.stringify(newList))
    inputRef.current.value = ""

  }

  function HandleRemove(e, index) {
    console.log('click to removr')
    const temp = [...toDoList]
    temp.splice(index,1)
    console.log(temp)
    setToDoList(temp)
    localStorage.setItem('myList', JSON.stringify(temp))

  }

  function toggleDone(index) {
    const [task, marker] = toDoList[index].split("-")
    const temp = [...toDoList]
    console.log(task)
    console.log(marker)
    if(marker==="f"){
      temp.splice(index,1,task + '-t')
      console.log(temp)
    }else{
      console.log("f is t")
      temp.splice(index,1, task+ '-f')
    }
    setToDoList(temp);
    localStorage.setItem('myList', JSON.stringify(temp));
  }

  return (
    <main className="list">
      <h1>TODOS</h1>;
      <h3>Local Storge CRUD app</h3>;
      <h4>CURD - Create Read Update Delete</h4>;
      <p>
        Add todos
        <input type="text" ref={inputRef} placeholder="Add to list" />
        <button onClick={() => HandleClick()}>Add</button>
      </p>
      <div className="list-item">
      
        {toDoList && toDoList.map((el, index) => {
          const [task, marker] = el.split("-")
          return (
            <div className="taskDiv">
            <div 
            onClick={()=>toggleDone(index)}
            key={index}
            className="tasks">
      
           </div>
              <button onClick={(e)=>HandleRemove(e,index)}>X</button>
            </div>
          )

        })}
        </div>
    </main>
  );
};
  
`}
        </code></pre>
        </div>
      <List/>
    </main>
  )
}

export default App


