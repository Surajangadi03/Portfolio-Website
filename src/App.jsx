import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


const App=()=>{
  return(
    <>
    <BrowserRouter>
       <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/project" element={<Project/>}/>
              <Route path="/Skills" element={<Skills/>}/>
              <Route path="/Resume" element={<Resume/>}/>
          </Routes>
       <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;