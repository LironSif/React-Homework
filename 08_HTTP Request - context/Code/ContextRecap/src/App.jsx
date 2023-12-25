import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GrandParent from "./Dummy/GrandParent";
import MyComponent from "./Context/MyComponent";
import MyProvider from "./Context/MyProvider";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import About from "./Context/About";
import Contact from "./Context/Contact";
import Home from "./Blog/Home";
import Posts from "./Blog/Posts";
import Albums from "./Blog/Albums";
import Todos from "./Blog/Todos";
import Navbar from "./Blog/Navbar";
import PostContextComponent from "./Blog/BlogContext/PostContextComponent";
import TodosContextProvider from "./Blog/BlogContext/TodosContextProvider";
import SingleTodo from "./Blog/SingleTodo";
import ErrorPage from "./Blog/ErrorPage";
import Song from "./Blog/Song";

function App() {
  const [isError, setIsError] = useState(false);
  // const username = "John Doe";
  return (
    <>
      {/* <GrandParent username={username} /> */}
      {/* <MyProvider>
        <MyComponent />
      </MyProvider> */}
      {/* // ! Simple Routing */}
      {/* <BrowserRouter>
        <div>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <PostContextComponent>
          <TodosContextProvider>
            {isError ? (
              <Routes>
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            ) : (
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="posts" element={<Posts />} />
                  <Route path="albums" element={<Albums />}>
                    <Route path="song" element={<Song />} />
                  </Route>
                  <Route path="todos" element={<Todos />} />
                  <Route path="todos/:id" element={<SingleTodo />} />
                </Routes>
              </>
            )}
          </TodosContextProvider>
        </PostContextComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
