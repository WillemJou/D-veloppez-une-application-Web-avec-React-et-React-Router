import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/a-propos">A propos</Link>
        </nav>
    )
}

export default Header