import Header from '../layout/header';
import IMG from '../../assets/IMG.png'
import Cards from "../../components/cards" 
import Footer from '../layout/footer'
import '../../styles/index.css'
import '../../styles/accueil.css'

function Accueil() {
  return (
    <>
    <div className='margin'>
    <Header />
    <div className='position'>
      <span className='slogan'>Chez vous, partout et ailleurs</span>
    <div className='pic-header-container'><img className='pic-header' src={IMG} alt="slogan"/></div>
    </div>
    <section className='wrapper'>
      < Cards />
    </section>
    </div>
    <Footer />
    </>
  );
}

export default Accueil;
