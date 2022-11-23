import {Routes, Route} from "react-router-dom";
import Home from "./Home/home";
import Project from "./Projects/project";
import Navbar from "./Navbar/navbar";
import ErrorPage from "./Error/errorpage";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      {/* <Foot/> */}
    </>
  );
}

export default App;
