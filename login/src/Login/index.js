import {useState,useContext} from "react"
import axios from "axios"
import {store} from "../App";
import {Link} from "react-router-dom"
import {Navigate} from "react-router"
import "./index.css"

const Login = () => {
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const [token,setToken] = useContext(store)
    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5003/login',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
        return <Navigate to = "/home" />
    }
    return(
        <div className = "login-container">
            <div className = "login-box"> 
                <form  className = "login-image" onSubmit = {submitHandler} autocomplete = "off">
                    <h3 className = "login-heading">Login</h3>
                    <input className = "input" type = "email" onChange = {changeHandler} name = "email" placeholder = "Email"/><br/>
                    <input className = "input" type = "password" onChange = {changeHandler} name = "password" placeholder = "Password"/><br/>
                    <input className = "input-1" type = "submit" value = "Login" /><br/>
                    <p className = "login-para">If you don't. Please register!!!</p>
                    <Link className = "register" to = "/register">Register</Link>
                </form>
                 
            </div>
        </div>
    )
}

export default Login