import {Routes, Route} from "react-router-dom";
import Home from "./Home/home";
import Project from "./Projects/project";
import Navbar from "./Navbar/navbar";
import ErrorPage from "./Error/errorpage";
import Foot from './Footer/footer';
import Contact from "./contact";

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      <Foot/>
    </>
  );
}

export default App;
