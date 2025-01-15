import Home from "./pages/Home"
import Works from "./pages/Works"
import About from "./pages/About"
import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css'
import NavigationBar from './navbar'


function App() {
  return (
    <>
    <HashRouter>
      <div>
      <NavigationBar></NavigationBar>
      <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/Home" element = {<Home />}/>
      <Route path="/Works" element = {<Works />}/>
      <Route path="/About" element = {<About />}/>
      </Routes>
      </div>
      </HashRouter>
   </>

  )
}

export default App