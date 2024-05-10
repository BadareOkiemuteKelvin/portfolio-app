import React from "react"
import Header from "../../Views/Header/Header";
import './Contact.css'
import Footer from "../../Views/Footer/footer";


const Contact =()=>{

 return(
    <div>
        <Header menuOption="contact" />

          <h1 id="contactheading">Contact Me</h1>
          <p id="message">if you'd like to chat about a project or just have question,please fill in the form below. I aim to get back within 2 days.</p>
        
        

   
      <Footer />
    </div>
 )
}


export default Contact;