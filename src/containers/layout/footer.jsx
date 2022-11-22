import { LogoFooter } from '../../components/logo.jsx'
import copyright from '../../assets/copyright.svg'
import '../../styles/footer.css'

function Footer() {
    return (
        <div className='footer'>
        <LogoFooter />
        <img className='copyright' src={copyright} alt="copyright"/>
        </div>
    )
}

export default Footer