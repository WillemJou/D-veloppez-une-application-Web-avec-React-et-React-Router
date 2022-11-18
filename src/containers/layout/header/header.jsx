import { Link, useLocation } from 'react-router-dom'
import '../../../styles/header.css'
import Logo from '../../../assets/Logo.svg'

  function Header() { 
    const location = useLocation()
    console.log(location)
  return (
    <nav className="nav">
      <div className="logo">
        <span>K</span>
        <img src={Logo} alt="logo" />
        <span>sa</span>
      </div>
      <div className="links">
          <Link style={{borderBottom: location.pathname === "/" ? "thin solid #FF6060" : "none"}} 
          to="/">Accueil</Link>
          <Link style={{borderBottom: location.pathname === "/a-propos" ? "thin solid #FF6060" : "none"}}  
          to="/a-propos">A propos</Link>
        </div>
    </nav>
  )
}

export default Header