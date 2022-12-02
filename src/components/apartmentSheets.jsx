import { useParams } from 'react-router-dom'
import Header from '../containers/layout/header'
import { useFindApartment } from '../hooks/hooks'
import { Carousel } from './caroussel'
import DropdownMenu from './dropdown'
import StarsRating from './starsRating'
import Error from '../containers/pages/error404'
import "../styles/apartmentSheets.css"

function ApartmentSheets() {
  const { id } = useParams()
  const {apartment, error } = useFindApartment(id)
  if (error) return <Error />
  return (  
    <>
    <Header />
    <Carousel apartment={apartment} />
      <div className="main-info-container">
        <div className="title-container">
          <h1 className='title-flat'>{apartment.title}</h1>
          <div className="location">{apartment.location}</div>
          <div className='tags-container'>
          {apartment.tags.map((tag, index) => { return <div key={index} className='tags'>{tag}</div>
          })}
          </div>
        </div>
        <div className='host-stars-container'>
      <div className="host-container">
        <div className='name'>{apartment.host.name}</div>
        <img className='portrait' src={apartment.host.picture} alt="host"></img>
      </div>
      <StarsRating apartment={apartment} />
      </div>
      </div>
      <div className="dropdown-container">
        <DropdownMenu title="Description" content={apartment.description} />
        <DropdownMenu title="Equipements" content={apartment.equipments.map((equipment, index) => {
          return <div key={index} >{equipment}<br /></div> })}/>
      </div>
    </>
  )
}

export default ApartmentSheets