import React from "react"
import Header from "../../Views/Header/Header";
import './Home.css'

const Articles = [{
   "id":1,
   "heading":"Javascript Security: Understanding Policies & Gates",
   "language":"javascript",
   "date":"26 April 2024",
  "body":"What's a policy? What's a gate? It can be difficult understanding the difference between the two. Let's go over which does what and how to apply them to your Laravel app."
},{ "id":2,
"heading":"Javascript Security: Understanding Policies & Gates",
"language":"React.js",
"date":"26 April 2024",
"body":"What's a policy? What's a gate? It can be difficult understanding the difference between the two. Let's go over which does what and how to apply them to your Laravel app."},
{ "id":3,
"heading":"Javascript Security: Understanding Policies & Gates",
"language":"React Native",
"date":"26 April 2024",
"body":"What's a policy? What's a gate? It can be difficult understanding the difference between the two. Let's go over which does what and how to apply them to your Laravel app."
}
]

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
               <p>{data.language}</p>
               <p>{data.date}</p>
               </div>
               <p>{data.body}</p>
             







            </div>)

          }
        

   
 
    </div>
 )
}


export default Home;