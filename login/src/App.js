import {useState,createContext} from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import About from "./About"
import Skills from './Skills'
import Projects from './Projects'
import NotFound from './NotFound'
import Profile from './Profile'
import Python from './Python'
import Html from './Html'
import Css from './Css'
import JavaScript from './JavaScript'
import Bootstrap from './Bootstrap'
import NodeJs from './NodeJs'
import ReactJs from './ReactJs'
import MySql from './MySql'

export const store = createContext();

const App = () => {
  const [token,setToken] = useState(null);
  return(
    <div>
      <store.Provider value = {[token,setToken]}>
      <BrowserRouter>
          <Routes> 
              <Route path = "/" element = {<Login/>}/> 
              <Route path = "/register" element = {<Register/>}/>
              <Route path = "/home" element = {<Home/>}/>
              <Route path = "/about" element = {<About/>}/>
              <Route path="/skills" element = {<Skills/>} />
              <Route path="/projects" element ={<Projects/>} />
              <Route path="/python" element ={<Python/>} />
              <Route path="/html" element ={<Html/>} />
              <Route path="/css" element ={<Css/>} />
              <Route path="/javascript" element ={<JavaScript/>} />
              <Route path="/bootstrap" element ={<Bootstrap/>} />
              <Route path="/nodejs" element ={<NodeJs/>} />
              <Route path="/reactjs" element ={<ReactJs/>} />
              <Route path="/mysql" element ={<MySql/>} />
              <Route path="/profile" element ={<Profile/>} />
              <Route element={<NotFound/>} />
          </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App