import React from "react"
import Header from "../../Views/Header/Header";
import './Home.css'

const Home =()=>{

 return(
    <div>
        <Header  />
          <div className="container-1">
            <h1>👨‍💻Web & Software Developer</h1>
            <p>I build websites and mobile apps(iOS and Android) with <span className="span1">Javascript</span>,<span className="span2">React.js</span>,<span className="span3">Nodejs</span>,<span className="span2">React Native</span> &</p>
            <p id="lastText"> <span className="span4">Expo</span>.</p>
            <p>I'm from Republic of Nigeria, Africa and am currently lead developer at bloomzon iouplc and codecamp academy.</p>
            <p>Find me on <a href="https://twitter.com/@MelvincodeJs">X(formerly twitter)</a>, <a href="https://github.com/badareokiemutekelvin">GitHub</a>, Facebook and Instagram.</p>


          </div>
   
 
    </div>
 )
}


export default Home;