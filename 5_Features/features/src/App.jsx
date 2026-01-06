


import './App.css'
import { Route,Routes,Navigate } from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import Home from "./components/Home"
import Products from "./components/Cart"
import Profile from "./components/Profile"
import NavBar from './components/NavBar'
import PaginationProvider from './components/contexts/PaginationContexts'
import User from './components/User'
import Cart from './components/Cart'


function App() {
  

  return (
    <div>
      <PaginationProvider>
      <NavBar></NavBar>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      </PaginationProvider>
    </div>

    
  )

  
}

export default App
