import React from "react"
import newnew from "../assets/newnew.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSidebar}) => {
  return (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={newnew} alt="logo" />
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
  )
}

export default Navbar
