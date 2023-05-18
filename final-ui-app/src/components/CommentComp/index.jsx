import React from 'react'
import Card from "react-bootstrap/Card";
import moment from "moment/moment";
import { useState } from 'react';
import './index.css';

const Index = (props) => {
    const {commentDetails}=props
    // console.log(commentDetails)
   
  return (
    <>
    <Card className='comment-card mt-5 mb-5'>
    <div className='d-flex flex-row'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSI1DfBDIv-jEpuqQDQx_wQ5p8VogUD6tAn3_V4BrqQlkLdsJ7eqbEiOD8nERJWUzkAMw&usqp=CAU" className="profile-img"/>
        <div >
            
            <div className='d-flex flex-row'>
              <h5 className="comment">{commentDetails.name}</h5>
            <p style={{marginLeft:'5px'}}>  {commentDetails?.commentedAt}</p></div>
            <p>{commentDetails.message}</p>
        </div>
    </div>
    </Card>
    </>
  )
}

export default Index;