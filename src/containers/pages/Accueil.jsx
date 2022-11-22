import Header from '../layout/header';
import IMG from '../../assets/IMG.png'
import SectionHome from '../layout/sectionHome'
import Footer from '../layout/footer'
import '../../styles/index.css'
import '../../styles/accueil.css'

function Accueil() {
  return (
    <div>
    <div className='margin'>
    <Header />
    <div className='position'>
      <span className='slogan'>Chez vous, partout et ailleurs</span>
    <img className='pic-header' src={IMG} alt="slogan"/>
    </div>
    <section>
      < SectionHome />
    </section>
    </div>
    <Footer />
    </div>
  );
}

export default Accueil;
