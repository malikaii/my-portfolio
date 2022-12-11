import {Routes, Route} from "react-router-dom";
import Home from "./Home/home";
import Project from "./Projects/project";
import Navbar from "./Navbar/navbar";
import ErrorPage from "./Error/errorpage";
import Foot from './Footer/footer';
import Contact from "./contact";
import About from "./About/about";
import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
        <div className="my-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </div>
        <Foot/>        
    </>
  );
}

export default App;
