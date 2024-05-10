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
         
          <form>
            <label>Name <span>*</span></label>
            <br></br>
            <input type="text"  />
            <br></br>
            <br></br>


            <label>Email<span>*</span></label>
            <br></br>
            <input type="email" />
            <br></br>
            <br></br>
            

            <label>Message<span>*</span></label>
            <br></br>
            <input  type="text" id="messageBox"  />
            <br></br>
            <br></br>

            <div id="buttonBox">
                 <p>Send Message</p>
            </div>




          </form>
        

   
      <Footer />
    </div>
 )
}


export default Contact;