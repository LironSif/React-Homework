/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { siteLinks } from "./constants/siteLinks";
import MainPage from "./pages/MainPage/MainPage";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import AboutPage from "./pages/AboutPage/AboutPage";

const [mainPage,infoPage,aboutPage] = siteLinks

function App() {
  const [currentPage, setCurrentPage] = useState("Main")

  const handleChangePage =(pageName)=>{
    setCurrentPage(pageName)
  }

  return (
    <div className="App">    
    <Header handleChangePage={handleChangePage}/>  
    {currentPage === mainPage && <MainPage />}
    {currentPage === infoPage && <InfoPage />}
    {currentPage === aboutPage && <AboutPage />}
   
    </div>
  );
}

export default App;
