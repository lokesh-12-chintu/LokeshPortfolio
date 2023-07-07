import {useContext,useState,useEffect} from "react"
import {store} from "../App"
import axios from "axios"
import './index.css'
import Header from '../Header'

const About = () => {
  const [token,setToken] = useContext(store)
  const [data,setData] = useState(null);
  useEffect(() =>{
    axios.get('http://localhost:5003/myprofile',{
      headers:{
        "x-token":token
      }
    }).then(res => setData(res.data)).catch((err) => console.log(err))
     
  },[])
  return(
  <>
    <Header />
    <div className="template-container">
      {data &&
      <div className="about-box">
        <img
          src="https://t4.ftcdn.net/jpg/04/87/86/21/240_F_487862125_c1a6mXw4esypDn0zXpNsk6D4ojJst8gW.jpg"
          className="about-image"
        />
        <center>
          <p className="paragraph">
            Myself {data.username},
            <br /> In {data.yearofgraduation}, I completed my graduation.
            <br /> At Present I am doing a MERN stack certification program in
            NXT Wave.
          </p>
        </center>
      </div>
          }
    </div>
  </>
)
  }
export default About
