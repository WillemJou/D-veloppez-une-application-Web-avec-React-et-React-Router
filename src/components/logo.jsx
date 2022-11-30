import logoorange from '../assets/logoorange.svg'
import { Link } from 'react-router-dom'
import logowhite from '../assets/logowhite.svg'
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

function LogoFooter() {
  return (
      <div className='logo-footer'>
      <span>K</span>
      <img className='svg-footer' src={logowhite} alt="logo" />
      <span>sa</span>
    </div>
  )
}

export { LogoHeader, LogoFooter }