


import './App.css'
import { Route,Routes,Navigate } from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import Home from "./components/Home"
import Products from "./components/Products"
import Profile from "./components/Profile"
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <Routes>
        
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      
    </div>

    
  )

  
}

export default App
