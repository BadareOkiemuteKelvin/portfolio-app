import React from "react"
import Header from "../../Views/Header/Header";
import './Article.css'
import { Articles } from "../../Views/dummyArticleData/articles";
import Footer from "../../Views/Footer/footer";


const Article =()=>{

 return(
    <div>
        <Header menuOption="articles" />

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


export default Article;