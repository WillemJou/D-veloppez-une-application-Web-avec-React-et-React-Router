import { LogoFooter } from '../../components/logoFooter'
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