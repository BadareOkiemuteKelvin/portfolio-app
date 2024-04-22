import React from "react"
import logo from "./assets/logo.JPG"
import './Header.css'

const  Header =()=>{

    return(
        <div className="headerContainer">
          <img  src={logo}  className="profilephoto"  alt="kelvin"  />
          <p className="logoname boy">Badare O. Kelvin</p>
          <div className="lineindicator"></div>
   

        </div>
    )
}

export default Header;