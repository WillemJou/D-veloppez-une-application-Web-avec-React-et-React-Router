import logoorange from '../assets/logoorange.svg'
import { Link } from 'react-router-dom'
import '../styles/logo.css'

function LogoHeader() {
    return (
        <Link to="/" className='logo-header'>
        <span className='logo-header'>K</span>
        <img className='logo' src={logoorange} alt="logo" />
        <span className='logo-header'>sa</span>
      </Link>
    )
}

export { LogoHeader }