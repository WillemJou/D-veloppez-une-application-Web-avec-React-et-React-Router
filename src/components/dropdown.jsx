import "../styles/dropdown.css"
import { useState } from "react"
import chevron from "../assets/chevron.svg"

function DropdownMenu({ title, content }) {
  const [open, setOpen] = useState(false)
  const [rotateChevron, setRotateChevron] = useState(false)
  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"
  const handleOpen = () => {
    return [setRotateChevron(!rotateChevron), setOpen(!open)]
  }
  return (
    <div className="menu">
      <button className="banner" onClick={() => handleOpen()}>
        {title}
        <img
          className="chevron"
          style={{ transform: rotate, transition: "0.5s" }}
          src={chevron}
          alt="chevron"
        />
      </button>
      {open ? <div className="main-content">{content}</div> : null}
    </div>
  )
}

export default DropdownMenu
