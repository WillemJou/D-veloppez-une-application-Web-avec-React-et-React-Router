import Header from '../layout/header';
import imgapropos from '../../assets/imgapropos.png'
import DropdownMenu from '../../components/dropdown'
import Footer from '../layout/footer'
import "../../styles/a-propos.css"
import '../../styles/accueil.css'
import '../../styles/index.css'

function Fiabilité() {
  return (
    <div className="main-container">
      <DropdownMenu
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
    </div>
  )
}

function Respect() {
  return (
    <div className="main-container">
      <DropdownMenu
        title="Respect"
        content="
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
    </div>
  )
}

function Service() {
  return (
    <div className="main-container">
      <DropdownMenu
        title="Service"
        content="
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
    </div>
  )
}

function Sécurité() {
  return (
    <div className="main-container">
      <DropdownMenu
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet ànos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </div>
  )
}

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