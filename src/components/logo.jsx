import logoorange from '../assets/logoorange.svg'
import logowhite from '../assets/logowhite.svg'
import '../styles/logo.css'

function LogoHeader() {
    return (
        <div className='logo-header'>
        <span>K</span>
        <img src={logoorange} alt="logo" />
        <span>sa</span>
      </div>
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