
import { Container, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";

import React from 'react'
import './index.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { articleDetailContext } from "../../App";

const Index = (props) => {
    const {articleData,likesArr}=props;
const navigate=useNavigate()

const[articleDetails,setArticleDetails] =useContext(articleDetailContext )

const goToDetails=(articleData)=>{
    setArticleDetails(articleData)
    localStorage.setItem("articleid",articleData._id)
    navigate('/details')
}


  return (
   <>

<Card className="card bounce mb-3 mt-3 mr-3" >
<img src={articleData.image} className="image card-img" />



<div style={{ padding: "10px" }}>
    <p>{articleData?.postedAt}</p>
  <h3 style={{color:"brown"}}>{articleData.title}</h3>
  <p>{articleData.description}</p>

  <button onClick={()=>goToDetails(articleData)} className="readmore-btn">Read More</button>

  
 
</div>

</Card>
   </>
  )
}

export default Index
