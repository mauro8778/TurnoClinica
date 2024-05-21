
import "./index.css"
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./views/home/home.jsx"
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login.jsx"

function App() {
  

  return (
  <div className="app">
    <NavBar/>
  <Routes>
    <Route path="/"element={Login}/>
    <Route path="/home" element={<Home/>}/>
  </Routes>
    
  </div>
     
  )
}

export default App
