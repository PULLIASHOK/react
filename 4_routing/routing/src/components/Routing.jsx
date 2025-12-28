import React from 'react'
import { useState , useEffect} from 'react'
import { Routes,Route,Link ,useParams, Navigate} from 'react-router-dom'

function Routing() {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/list">Listing Page</Link></li>
        
      </ul>
    </nav>

    <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about/*" element={<About></About>}></Route>
      <Route path="/list" element={<Listing></Listing>}></Route>
      <Route path="/users/:id" element={<User></User>}></Route>
      <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
      <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </div>

    
  )

  function User(){
    const [user,setUser]=useState(null)
    let params=useParams()

    useEffect(()=>{
        (async function () {
            const res=await fetch(`https://fakestoreapi.com/users/${params.id}`)
            const data=await res.json()
            setUser(data)
            console.log(data)
            
        })
        ()
    },[]);
    
    return (
        <>
        {user == null ? <h3>Loading....</h3>:
        <>
        <h1>UserName : {user.username}</h1>
        <h1>Name : {user.name.firstname + " " + user.name.lastname}</h1>
        <h3>Email : {user.email}</h3>

        </>
        }
        </>
    )
  }


  function Home(){
    return (<h1>Home Page</h1>)
  }

  function About(){
    return (<>
    <h2>About Page</h2>
    <Routes>
      <Route path="/company"element={<Company></Company>}></Route>
      <Route path="/Founder"element={<Founder></Founder>}></Route>
      <Route path="/*"element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </>)
  }

  function Listing(){
    return (<h1>Listing Page</h1>)
  }

  function PageNotFound(){

    return (<h1>Page Not Found</h1>)
  }

  function Company(){
    return (<h3>Congratulations!!! you are a part of Wipro</h3>)
  }

  function Founder(){
    return (<h3>Founder of wipro Mohammed Hashmi Premji</h3>)
  }
}

export default Routing