import React from "react"
import logo from "./assets/BOK.png"
import './Header.css'
import { useNavigate } from "react-router-dom"

const  Header =({menuOption = "none"})=>{

       const navigate = useNavigate();


    return(
        <header className="headerContainer">
          <img onClick={()=>navigate('/')} src={logo}  className="profilephoto"  alt="kelvin"  />
          <p onClick={()=>navigate('/')} className="logoname boy">Badare O. Kelvin</p>
          <div onClick={()=>navigate('/')} className="lineindicator"></div>
      <div className='container'>
      <ul>
        {
        menuOption==="project"?<p className="activeMenu" onClick={()=>navigate('/project')}>Project</p>:<p onClick={()=>navigate('/project')}>Project</p>
        }
        {
        menuOption==="work"?<p className="activeMenu" onClick={()=>navigate('/work')}>Work</p>:<p onClick={()=>navigate('/work')}>Work</p>
        }
        {
        menuOption==="articles"?<p className="activeMenu" onClick={()=>navigate('/articles')}>Articles</p>:<p onClick={()=>navigate('/articles')}>Articles</p>
        }
        {
        menuOption==="contact"?<p className="activeMenu" onClick={()=>navigate('/contact')}>Contact</p>:<p onClick={()=>navigate('/contact')}>Contact</p>
        }
      </ul>
    </div>
        </header>
    )
}

export default Header;