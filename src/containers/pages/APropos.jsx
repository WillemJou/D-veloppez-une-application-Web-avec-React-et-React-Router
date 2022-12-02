import Header from '../layout/header';
import imgapropos from '../../assets/imgapropos.png'
import { Fiabilité } from "../../components/fiabilité"
import { Respect } from "../../components/respect"
import { Service } from "../../components/service"
import { Sécurité } from "../../components/securite"
import Footer from '../layout/footer'
import "../../styles/a-propos.css"
import '../../styles/accueil.css'
import '../../styles/index.css'

function APropos() {
  return (
    <>
      <div className='margin'>
    <Header />
    <img className='pic-header' src={imgapropos} alt="slogan"/>
    <div className='bloc'>
    <Fiabilité />
    <Respect />
    <Service />
    <Sécurité/>
    </div>
    </div>
    <Footer />
    </>
  );
}

export default APropos;