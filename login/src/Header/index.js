import {useContext} from "react"
import {store} from "../App"
import {Navigate} from "react-router"
import "./index.css"
import {Link} from "react-router-dom"

const Header = () => {
    const [token,setToken] = useContext(store)
    if(!token){
        return <Navigate to = "/"/>
      }
    return(
        <div>
            <ul className = "header">
                <Link className="heading" to="/home">
                <h1>PORTFOLIO</h1>
                </Link>

                <div className="sub-header">
                <Link to="/home" className="para">
                    Home
                </Link>
                <Link to="/about" className="para">
                    About
                </Link>
                <Link to="/skills" className="para">
                    Skills
                </Link>
                <Link to="/projects" className="para">
                    Projects
                </Link>
                <Link to="/profile" className="para">
                    Profile
                </Link>
                <button onClick = {() => setToken(null )} className = "logout-button para">Logout</button>
                </div>
            </ul>
        </div>
    )
}

export default Header