import data from "../assets/data.json"
import "../styles/cards.css"

function Cards(props) {
  const cards = data.map((card) => {
    return (
      <div className="cards">
        <img className="cover" src={card.cover} alt="cover" />
        <h1 className="title-card">{card.title}</h1>
      </div>
    )
  })
  return cards
}

export default Cards
