import data from "../assets/data.json"
import { Link } from "react-router-dom"
import "../styles/cards.css"

function Cards(props) {
  const cards = data.map((card, index) => {
    return (
      <Link key={index} to={`/fiche-logement/${card.id}`} className="cards">
        <img className="cover" src={card.cover} alt="cover" />
        <h1 className="title-card">{" " + card.title}</h1>
      </Link>
    )
  })
  return cards
}

export default Cards
