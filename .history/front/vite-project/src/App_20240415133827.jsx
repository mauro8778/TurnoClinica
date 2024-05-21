
import "./index.css"
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./views/home/home.jsx"
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./views/Login/Login.jsx"
import MisTurnos from "./views/misTurnos/MisTurnos.jsx"
import Register from "./views/Register/Register.jsx"

function App() {
  const location = useLocation();

  return (
  <div className="app">
    {location.pathname ==="/" && null : <NavBar/>}
  <Routes>
    <Route path="/"element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/misTurnos" element={<MisTurnos/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
    
  </div>
     
  )
}

export default App
