import React from "react"
import Header from "../../Views/Header/Header";
import './Work.css'
import Footer from "../../Views/Footer/footer";
import pblog from '../Projects/assets/pblog.png'
import bloomzon from '../Projects/assets/Bloomzon.png'

const works = [{
 "id":1,
"image":bloomzon,
"header":"Bloomzon App",
"description":"An ecommerce app for selling and buying goods and services globally",
"Apptype":"Web App Design",
"Langauge":"React Native , Express , MySQL and Nodejs",
"link":"https://apps.apple.com/ng/app/bloomzon/id6464309937",
},{
  "id":2,
 "image":pblog,
 "header":"PremiumBlog",
 "description":"Blogging app for news on sports,jobs,Tech,politics and travel world wide",
 "Apptype":"Web App Design",
 "Langauge":"JavaScript , Nodejs",
 "link":"https://www.premiumblognews.com",
 }]



const Work =()=>{

 return(
    <div className="container">
        <main>
          <Header menuOption="work" />
          <h1>Works</h1>
          <p className="p1">Some of my works</p>
          {
            works.map((data)=><div key={data.id}>
               <h2>{data.header}</h2>
               <p className="p2">{data.description}</p>
              <div  className="imgdiv">
                 <img src={data.image} alt="projectimage" />
              </div>
              <p className="p3">{">"}{" "}{data.Apptype}</p>
              <p className="p3">{">"}{" "}{data.Langauge}</p>
              <div>

              </div>
              <div className="buttonContainer">
                 <div className="button"><a href={data.link}><p>Visit App</p></a></div>
              </div>
           
          

            </div>)
          }
        </main>
        <Footer />
    </div>
 )
}


export default Work;