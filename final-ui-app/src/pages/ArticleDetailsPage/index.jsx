import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentComp from "../../components/CommentComp";
import AddCommentComp from "../../components/AddCommentComp";
import { useContext } from "react";
import { articleDetailContext } from "../../App";
import { likesContext } from "../../App";

import "./index.css";
// const count1=Math.ceil(Math.random()*100)
// const count2=Math.ceil(Math.random()*100)



const Index = () => {

    const [likesArr,setLikesArr]=useContext(likesContext)
     console.log(likesArr)
  //   const location = useLocation();
  //   const state = location.state;
  const [comments, setComments] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisliked] = useState(false);
  const [data, setData] = useState();
  //   const[articleDetails,setArticleDetails] =useContext(articleDetailContext)
//   const count1=Math.ceil(Math.random()*100)
//   const count2=Math.ceil(Math.random()*100)


  const [likesCount, setLikesCount]=useState(80)
  const [disLikesCount, setDislikesCount]=useState(30)
  const articleId = localStorage.getItem("articleid");

//  let likesData=likesArr.filter((each)=>each._id===articleId)

//   console.log(likesData)



  const onLike = () => {
    setIsLiked(!isLiked);

    // console.log("Blog is Liked");
    if(isLiked){
        setLikesCount(likesCount-1)
    }else{
        setLikesCount(likesCount+1)
    }
   
  };

  const onDisLike = () => {
    setIsDisliked(!isDisLiked);
    
    // console.log("Blog is DisLiked");
   
    if(isDisLiked){
        setDislikesCount(disLikesCount-1)
    }else{
        setDislikesCount(disLikesCount+1)
    }
  };

  useEffect(() => {
    console.log(articleId);
    console.log("Hello");
    axios
      .get(
        "http://localhost:3000/articles/" + localStorage.getItem("articleid")
      )
      .then((res) => {
        setData(res.data[0]);

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(data)
  useEffect(() => {
    axios
      .get("http://localhost:3000/comments/" + articleId)
      .then((res) => {
        // console.log(res.data)
        setComments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(state)
  console.log(data);
  //   console.log(data[0].title)
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <div className="about-article-container">
            
              <div className="d-flex flex-row justify-content-center mt-3 mb-3">
                <div>
                  <h1>{data?.title}</h1>
                  <img src={data?.image} className="img mb-3" />
                  <h2>1. Nemo enim ipsam voluptatem quia</h2>
                  <p>
                    Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum.
                  </p>
                  <h6>1.1 VERO EOS ET ACCUSAMUS ET IUSTO</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Culpa delectus enim esse, nulla quam quos. Cumque
                    dignissimos dolore dolorem dolores explicabo maxime natus
                    nihil nisi perferendis, placeat quae qui vel?
                  </p>

                  <h6>2. Aenean vulputate eleifend tellus.</h6>
                  <p>
                    Peaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="comments-container">
              <div className="like-btns-container d-flex flex-row justify-content-between  mb-3">
                <button onClick={onLike} className="like-or-dislike-btn">
                  {isLiked ? (
                    <span className="material-icons">thumb_up</span>
                  ) : (
                    <span className="material-icons-outlined">thumb_up</span>
                  )}
                </button>
                    <span>Likes {likesCount}</span>
                <button onClick={onDisLike} className="like-or-dislike-btn">
                  {isDisLiked ? (
                    <span className="material-icons">thumb_down_alt</span>
                  ) : (
                    <span className="material-icons-outlined">
                      thumb_down_off_alt
                    </span>
                  )}
                </button>
                <span> Dislikes {disLikesCount}</span>
              </div>
              <h2>{comments && comments.length} Comments</h2>
              {comments &&
                comments.map((each) => {
                  return <CommentComp key={each._id} commentDetails={each} />;
                })}
            </div>
            <hr />
            <div className="leave-comment-container p-3 m-3">
              <h5>Leave a comment</h5>
              <AddCommentComp blogId={articleId} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
