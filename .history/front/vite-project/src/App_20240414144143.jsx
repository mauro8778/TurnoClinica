
import "./index.css"
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./views/home/home.jsx"
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
  <Routes>
    <Route path="Home" element={<Home contacts={contacts}/>}/>
  </Routes>
    </>
     
     
  )
}

export default App
