import React from "react"
import Header from "../../Views/Header/Header";
import './Work.css'
import Footer from "../../Views/Footer/footer";


const Work =()=>{

 return(
    <div className="container">
        <main>
          <Header menuOption="work" />
          <p>Hello Work</p>

        </main>
   

        <Footer />
    </div>
 )
}


export default Work;