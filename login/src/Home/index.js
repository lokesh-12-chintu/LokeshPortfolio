import {useContext,useState,useEffect} from "react"
import {store} from "../App"
import axios from "axios"
import './index.css'
import Header from '../Header'

const Home = () => {
  const [token,setToken] = useContext(store)
  const [data,setData] = useState(null);
  useEffect(() =>{
    axios.get('http://localhost:5003/myprofile',{
      headers:{
        "x-token":token
      }
    }).then(res => setData(res.data)).catch((err) => console.log(err))
     
  },[])


  return (
    <div>   
      {
        data &&
        <div>
        <Header/>
        <div className = "home-container">
          <div className = "box">
        <center>
            <h1>Hello, I'm <br/> {data.username} <br/> And I am a learner in MERN Stack</h1><br/>
           
        </center>
        </div>
        </div>
        </div>
       }
    </div>
      
  )
}

export default Home