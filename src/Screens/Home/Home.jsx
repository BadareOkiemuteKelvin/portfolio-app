import React from "react"
import Header from "../../Views/Header/Header";
import './Home.css'

const Articles = [{
   "id":1,
   "heading":"Javascript Security: Understanding Policies & Gates",
   "language":"javascript",
   "date":"26 April 2024",
  "body":"In the fast-paced world of web development, security remains a top priority, especially when dealing with JavaScript, which powers the majority of interactive and dynamic websites.",
  "fullbody":""

},{ "id":2,
"heading":"React Routing: React router main concept and usage for developers",
"language":"React.js",
"date":"26 April 2024",
"body":"React Router is an indispensable tool in the toolbox of a modern web developer working with React applications. It enables the navigation among different components in a React application, mimicking the experience of multi-page web applications. "},
{ "id":3,
"heading":"React Native: Native UI routing and statemanagement",
"language":"React Native",
"date":"26 April 2024",
"body":"In the world of app development, managing the user interface (UI) and navigating between different screens (routing) are central to creating a fluid, intuitive user experience. Similarly, state management ensures that the UI behaves as expected as users interact with the app. "
},{ "id":4,
"heading":"Non-Blocking I/O: Nodejs Robust structure for modern days Web server",
"language":"Nodejs",
"date":"26 April 2024",
"body":"Node.js has revolutionized the way web servers are built by offering a non-blocking, event-driven architecture that is especially suited to handling numerous concurrent connections, a common requirement in today's digital world. This JavaScript runtime enables developers to build scalable and efficient web applications with ease."},
{ "id":5,
"heading":"API Design: Understanding API routing and security in express.js",
"language":"Express",
"date":"26 April 2024",
"body":"Express.js is a fast, unopinionated, minimalist web framework for Node.js that is widely used for building web applications and APIs. It simplifies routing, middleware, and server-side logic, but with this simplicity comes the need to understand and implement robust security practices, especially when dealing with API routes."
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
               <p id="language">{data.language}</p>
               <p id="date">{data.date}</p>
               <p id="min-read">{(Number((data.body).length)/100).toFixed(0)} mins read</p>
               </div>
               <p>{data.body}</p>

               <p id="readmore"> {`Read Article >`}</p>
               <hr></hr>
             







            </div>)

          }
        

   
 
    </div>
 )
}


export default Home;