import { useState } from 'react'
import './App.css'
import ToDo from './todo/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app'>
      <h1>this is the code for this component</h1>
      <div className='code'>
      <pre><code>
          {`import React, { useState, useRef, useEffect } from "react";
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



  }`}
        </code></pre>
        </div>
      
      <ToDo/>
    </main>
  )
}

export default App
