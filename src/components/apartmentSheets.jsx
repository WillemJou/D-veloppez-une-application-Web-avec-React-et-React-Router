import { useParams } from 'react-router-dom'
import data from "../assets/data.json"
import { Carousel } from './caroussel'
import DropdownMenu from './dropdown'
import StarsRating from './starsRating'
import "../styles/apartmentSheets.css"

export const FindApartment = () => {
  const { id } = useParams()
  const apartment = data.find((flat) => flat.id === id)
  return apartment
}


function ApartmentSheets() {
  
  return (  
    <>
    <Carousel />
      <div className="main-info-container">
        <div className="title-container">
          <h1 className='title-flat'>{FindApartment().title}</h1>
          <div className="location">{FindApartment().location}</div>
          <div className='tags-container'>
          {FindApartment().tags.map((tag, index) => { return <div key={index} className='tags'>{tag}</div>
          })}
          </div>
        </div>
        <div className='host-stars-container'>
      <div className="host-container">
        <div className='name'>{FindApartment().host.name}</div>
        <img className='portrait' src={FindApartment().host.picture} alt="host"></img>
      </div>
      <StarsRating />
      </div>
      </div>
      <div className="dropdown-container">
        <DropdownMenu title="Description" content={FindApartment().description} />
        <DropdownMenu title="Equipements" content={FindApartment().equipments.map((equipment, index) => {
          return <div key={index} >{equipment}<br /></div> })}/>
      </div>
    </>
  )
}

export default ApartmentSheets