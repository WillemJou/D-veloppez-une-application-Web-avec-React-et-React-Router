import logowhite from '../assets/logowhite.svg'
import '../styles/logo.css'

export function LogoFooter() {
    return (
        <div className='logo-footer'>
        <span>K</span>
        <img className='svg-footer' src={logowhite} alt="logo" />
        <span>sa</span>
      </div>
    )
  }