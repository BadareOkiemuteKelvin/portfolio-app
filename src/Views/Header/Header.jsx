import React from "react"
import logo from "./assets/BOK.png"
import './Header.css'

const  Header =()=>{

    return(
        <header className="headerContainer">
          <img  src={logo}  className="profilephoto"  alt="kelvin"  />
          <p className="logoname boy">Badare O. Kelvin</p>
          <div className="lineindicator"></div>
      <div className='container'>
      <ul>
          <li>
           Project
          </li>
          <li>
            Work
          </li>
          <li>
           Articles
          </li>
          <li>
            Contact
          </li>
      </ul>
    </div>
        </header>
    )
}

export default Header;