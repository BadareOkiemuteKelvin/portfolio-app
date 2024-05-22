import React,{useState,useEffect} from "react"
import Header from "../../Views/Header/Header";
import Footer from "../../Views/Footer/footer";
import load from '../assets/giphy.webp'



const Article =()=>{

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)

  const fetchArticles = async () => {

    try{
    const requestOption = {
      method:'GET',
      Accept:'application/json',
      headers:{'Content-type':'application/json'},
   }

        const serverResponse = await fetch('https://portfolio-backend-kwc9.onrender.com/articles',requestOption)
        const responseData = await serverResponse.json();
        setArticles(responseData)

    }catch(error){

       alert(error);

    } finally{


    setLoading(false);


    }

  }


  useEffect(()=>{

    fetchArticles();

  },[])


  const Display = () =>{
    return(
      <div>
      


        <h1 id="articleheading">Recent Articles</h1>
        {

          articles.map((data)=>
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

 return(
  
  <div>
  <Header  menuOption="articles" />
  {loading===true?<img src={load} style={{marginLeft:50}} height={300} width={300} />:<Display />}
</div>
 )
}


export default Article;