import React from "react"
import Header from "../../Views/Header/Header";
import './Project.css'
import Footer from "../../Views/Footer/footer";


const Project =()=>{

 return(
    <div className="container">
        <main>
          <Header menuOption="project" />
          <p>Hello Project</p>

        </main>
   

        <Footer />
    </div>
 )
}


export default Project;