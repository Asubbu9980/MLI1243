import React from "react";
import ArticleCard from "../ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { likesContext } from "../../App";

import "./index.css";

const Index = () => {
  const [articlesList, setArticlesList] = useState();
  const [likesArr,setLikesArr]=useContext(likesContext)
  useEffect(() => {
    axios
      .get("http://localhost:3000/articles")
      .then((res) => {
        setArticlesList(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

useEffect(()=>{
    const myLikesArr = articlesList&&articlesList.map((each,index)=>{return {artId:each._id,likesCount:Math.ceil((Math.random()*100)+index),dislikesCount:Math.ceil((Math.random()*100)+index)}})
    setLikesArr(myLikesArr)
},[])
 
console.log(likesArr)

  return (
    <>
      
    
      <Container>
        <Row>
       
          <h1>Trending Blogs</h1>
          {articlesList &&
            articlesList.map((each) => {
              return (
                <Col sm="12" md="4" key={each._id}>
                  <div>
                    <ArticleCard articleData={each} likesArr={likesArr}/>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Index;
