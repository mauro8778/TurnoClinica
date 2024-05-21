
import "./index.css"
import NavBar from "./components/NavBar/NavBar.jsx"
import Home from "./views/home/home.jsx"
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./views/Login/Login.jsx"
import MisTurnos from "./views/misTurnos/MisTurnos.jsx"
import Register from "./views/Register/Register.jsx"

function App() {
  const location = useLocation();
  const userId = useSelector(state => state.auth.user?.id);

  return (
  <div className="app">
    {location.pathname !== "/" &&  location.pathname !== "/register" &&  <NavBar/>}
  <Routes>
    <Route path="/"element={<Login/>}/>
    <Route path="/home/:userId" element={<Home/>}/>
    <Route path="/misTurnos" element={<MisTurnos userId={userId}/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
    
  </div>
     
  )
}

export default App
