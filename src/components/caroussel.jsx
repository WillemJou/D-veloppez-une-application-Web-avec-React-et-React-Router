import { useState, useEffect } from "react"
import { FindApartment } from "./apartmentSheets"
import chevron from "../assets/chevron.svg"
import "../styles/caroussel.css"

export function Carousel() {
    const pictures = FindApartment().pictures
    const [currentImg, setCurrentImg] = useState(0)
    const [length, setLength] = useState(pictures.length)
    useEffect(() => {
        setLength(pictures.length)
    }, [pictures])
    const next = () => {
       const index = currentImg < length - 1 ? currentImg + 1 : 0
       return setCurrentImg(index)
        }
    const prev = () => {
        const index = currentImg > 0 ? currentImg - 1 : length - 1 
        return setCurrentImg(index)
        }
        const displayLeftArrow = () => {
            let leftArrow
            if (pictures.length !== 1) {
                leftArrow = <img src={chevron} className="left-arrow" onClick={prev} alt="bouton précédent" />
            } else { leftArrow = null }
        return leftArrow
    }
           const displayRightArrow = () => {
         let rightArrow  
        if (pictures.length !== 1) {
             rightArrow = <img src={chevron} className="right-arrow" onClick={next} alt="bouton suivant" />
         } else { rightArrow = null }
        return rightArrow
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {displayLeftArrow()}{displayRightArrow()}
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentImg * 1240}px)`}}>
                        {pictures.map((pic, index) => {
                            return <img key={index} className="pics" src={pic} alt="photos des logements" />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
