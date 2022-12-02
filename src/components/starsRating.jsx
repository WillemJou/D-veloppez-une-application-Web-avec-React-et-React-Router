import starorange from "../assets/starorange.svg"
import stargrey from "../assets/stargrey.svg"
import "../styles/apartmentSheets.css"



function StarsRating({apartment}) {
    let starArr = []
    for (let i = 0; i < 5; i++) {
        i < apartment.rating
          ? starArr.push(<img src={starorange} alt="starorange" className="star" />)
          : starArr.push(
              <img key={i} src={stargrey} alt="stargrey" className="star" />
            );
      }
    return (
        <div className="stars-container">{starArr.map((star, index) => {
          return <span key={index}>{star}</span>
        })}</div>
    )
}



export default StarsRating