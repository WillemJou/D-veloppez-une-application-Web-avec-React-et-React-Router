import Header from '../layout/header';
import imgapropos from '../../assets/imgapropos.png'
import Footer from '../layout/footer'
import '../../styles/accueil.css'
import '../../styles/index.css'

function APropos() {
  return (
    <div>
      <div className='margin'>
    <Header />
    <img className='pic-header' src={imgapropos} alt="slogan"/>
    </div>
    <Footer />
    </div>
  );
}

export default APropos;