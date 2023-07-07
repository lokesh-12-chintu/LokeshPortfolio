import {useState} from "react"
import axios from "axios"
import "./index.css"

const Register = () => {
    const [data,setData] = useState({
        username:"",
        birthdate:"",
        mobileno:"",
        yearofgraduation:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5003/register',data).then(
            res => alert(res.data)
        )
    }

    return(
        <div className = "login-container">
            <div className = "login-box">
                <form className = "login-image-1" onSubmit = {submitHandler}>
                    <h3 className = "register-heading">Register</h3>
                    <div className = "register-details">
                    <form>
                    <input className = "register-input" type = "text" onChange = {changeHandler}   name = "username" placeholder = "User Name"/><br/>
                    <input className = "register-input" type = "text" onChange = {changeHandler}   name = "birthdate" placeholder = "DD MM YYYY"/><br/>
                    <input className = "register-input" type = "text" onChange = {changeHandler}   name = "mobileno" placeholder = "Mobile No"/><br/>
                    <input className = "register-input" type = "text" onChange = {changeHandler}   name = "yearofgraduation" placeholder = "Graduation Year"/><br/>
                    </form>
                    <form>
                    <input className = "register-input" type = "email" onChange = {changeHandler} name = "email" placeholder = "Email"/><br/>
                    <input className = "register-input" type = "password" onChange = {changeHandler} name = "password" placeholder = "password"/><br/>
                    <input className = "register-input" type = "password" onChange = {changeHandler} name = "confirmpassword" placeholder = "confirm password"/><br/>
                    <input className = "register-input-1" type = "submit" value = "Register" /><br/>
                    </form>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register