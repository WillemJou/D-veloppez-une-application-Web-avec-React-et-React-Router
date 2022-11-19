import { Link, useLocation } from 'react-router-dom'
import '../../styles/header.css'
import { LogoHeader } from '../../components/logo.jsx'

  function Header() { 
    const location = useLocation()
  return (
    <nav className="nav">
      <LogoHeader />
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