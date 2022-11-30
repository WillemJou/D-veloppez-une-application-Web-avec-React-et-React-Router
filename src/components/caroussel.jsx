import { useState, useEffect } from "react"
import chevron from "../assets/chevron.svg"
import "../styles/caroussel.css"

export function Carousel({ apartment }) {
  const [currentImg, setCurrentImg] = useState(0)
  const [length, setLength] = useState(apartment.pictures.length)
  useEffect(() => {
    setLength(apartment.pictures.length)
  }, [apartment.pictures])
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
    if (apartment.pictures.length !== 1) {
      leftArrow = (
        <img
          src={chevron}
          className="left-arrow"
          onClick={prev}
          alt="bouton précédent"
        />
      )
    } else {
      leftArrow = null
    }
    return leftArrow
  }
  const displayRightArrow = () => {
    let rightArrow
    if (apartment.pictures.length !== 1) {
      rightArrow = (
        <img
          src={chevron}
          className="right-arrow"
          onClick={next}
          alt="bouton suivant"
        />
      )
    } else {
      rightArrow = null
    }
    return rightArrow
  }

  const findIndex = () => {
    if (length > 1) {
      return (
        <p className="index">
          {currentImg + 1}/{length}{" "}
        </p>
      )
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {displayLeftArrow()}
        {displayRightArrow()}
        {findIndex()}
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentImg * 100}%)`, MozTransform: `translateX(-${currentImg * 100}%)` }}
          >
            {apartment.pictures.map((pic, index) => {
              return (
                <img
                  key={index}
                  src={pic}
                  alt="photos des logements"
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
