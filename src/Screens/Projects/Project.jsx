import React from "react"
import Header from "../../Views/Header/Header";
import './Project.css'
import Footer from "../../Views/Footer/footer";
import image1 from './assets/freshapp.png'

const projects = [{
  "id":1,
 "image":image1,
 "header":"Fresh App",
 "description":"Fresh Food delievery app for managing customers request for various types of orders",
 "Apptype":"Mobile Native App",
 "Langauge":"React Native, Expo and JavaScript",
 "link":"https://apps.apple.com/ng/app/bloomzon/id6464309937",
},{
 "id":2,
"image":"",
"header":"Wedlock",
"description":"Wedding planner app with tools for managing guests,guest list and task.",
"Apptype":"Web App Design",
"Langauge":"Laravel Development",
"link":"",
},{
 "id":3,
"image":"",
"header":"Wedlock",
"description":"Wedding planner app with tools for managing guests,guest list and task.",
"Apptype":"Web App Design",
"Langauge":"Laravel Development",
"link":"",
}]



const Project =()=>{

 return(
    <div className="container">
        <main>
          <Header menuOption="project" />
          <h1>Projects</h1>
          <p className="p1">Some of my spare time tinkering</p>
          {
            projects.map((data)=><div key={data.id}>
              <div  className="imgdiv">
                 <img src={data.image} alt="projectimage" />
              </div>
             
              <h2>{data.header}</h2>
              <p className="p2">{data.description}</p>
              <p className="p3">{">"}{" "}{data.Apptype}</p>
              <p className="p3">{">"}{" "}{data.Langauge}</p>
              <div className="div2"><a href={data.link}><p>Visit App</p></a></div>
          

            </div>)
          }
              








        </main>
        <Footer />
    </div>
 )
}


export default Project;