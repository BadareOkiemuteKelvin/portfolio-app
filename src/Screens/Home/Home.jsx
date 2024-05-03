import React from "react"
import Header from "../../Views/Header/Header";
import './Home.css'
import { Articles } from "../../Views/dummyArticleData/articles";
import Footer from "../../Views/Footer/footer";


const Home =()=>{

 return(
    <div>
        <Header  />
          <div className="container-1">
            <h1>👨‍💻Web & Software Developer</h1>
            <p>I build websites and mobile apps(iOS and Android) with <span className="span1">Javascript</span>,<span className="span2">React.js</span>,<span className="span3">Nodejs</span>,<span className="span2">React Native</span> &</p>
            <p id="lastText"> <span className="span4">Expo</span>.</p>
            <p>I'm from Republic of Nigeria, Africa and am currently lead developer at bloomzon iouplc and codecamp academy.</p>
            <p>Find me on <a href="https://twitter.com/@MelvincodeJs">X(formerly twitter)</a>, <a href="https://github.com/badareokiemutekelvin">GitHub</a>, <a href="https://web.facebook.com/?_rdc=1&_rdr">Facebook</a> and <a href="https://www.instagram.com/badareokiemute">Instagram</a>.</p>


          </div>

          <h1 id="articleheading">Recent Articles</h1>
          {

            Articles.map((data)=>
            <div key={data.id} id="articlecontainer">
               <h1>{data.heading}</h1>
               <div>
               <p id="language">{data.language}</p>
               <p id="date">{data.date}</p>
               <p id="min-read">{(Number((data.body).length)/100).toFixed(0)} mins read</p>
               </div>
               <p>{data.body}</p>

               <p id="readmore"> {`Read Article >`}</p>
               <hr></hr>
             
            </div>)

          }
        

   
      <Footer />
    </div>
 )
}


export default Home;