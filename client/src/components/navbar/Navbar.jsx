import "./navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">DDMS CORPORATION</span>
        </Link>
        <div className="navItems">
          <button className="navButton">SignUp</button>
          <button className="navButton">LogIn</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar