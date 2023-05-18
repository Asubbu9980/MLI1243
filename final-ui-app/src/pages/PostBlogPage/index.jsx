import React from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import moment from "moment/moment";
import axios from 'axios';
import './index.css'

const Index = () => {

    const navigate = useNavigate();
    
   
   
    const defaultValues = {
      title: "",
      description: "",
      isLiked:false,
      category:"",
      image: "",
    }
    const [blog, setBlog] = useState(defaultValues);
    
    
    const formik = useFormik({
      initialValues: blog,
      enableReinitialize:true,
      validationSchema: Yup.object({
        title: Yup.string()
          .min(3, "should be more than 3 characters")
          .max(150, "Must be 150 characters or less")
          .required("Required"),
        description: Yup.string()
          .min(3, "Must be  3 characters or more")
          .max(1000, "Must be 1000 characters or less")
          .required("Required"),

        category:Yup.string()
        .min(3, "Must be  3 characters or more")
        .max(1000, "Must be 1000 characters or less")
        .required("Required"),
        
        image: Yup.string()
          .min(3, "Must be  3 characters or more")
          .max(500, "Must be 500 characters or less")
          .required("Required"),
      }),
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2))
        values.postedAt=moment().format("Do dddd MMMM gggg");
        axios.post('http://localhost:3000/articles', values)
        .then(function (response) {
          console.log(response);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error);
        });
       
      
     
    }
  })

  
  return (
    <>
     <Container>
      <Row>
        <Col>
        <Card className='card m-5'>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value = {formik.values.title}
                onChange={formik.handleChange}
                placeholder='Enter Title'
              />
              <Form.Text className='text-danger'>
                {formik.touched.title && formik.errors.title ? (
                  <div className='text-danger'>{formik.errors.title}</div>
                ) : null}
              </Form.Text>
            </Form.Group>


            <Form.Group className='mb-3' controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                name='category'
                value = {formik.values.category}
                onChange={formik.handleChange}
                placeholder='Enter Category'
              />
              <Form.Text className='text-danger'>
                {formik.touched.category && formik.errors.category ? (
                  <div className='text-danger'>{formik.errors.category}</div>
                ) : null}
              </Form.Text>
            </Form.Group>



            <Form.Group className='mb-3' controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                name='description'
                onChange={formik.handleChange}
                value={formik.values.description}
                placeholder='Enter Description'
              />
              <Form.Text className='text-danger'>
                {formik.touched.description && formik.errors.description ? (
                  <div className='text-danger'>{formik.errors.description}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
            
            <Form.Group className='mb-3' controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                name='image'
                onChange={formik.handleChange}
                value = {formik.values.image}
                placeholder='Enter Image url'
              />
              <Form.Text className='text-danger'>
                {formik.touched.image && formik.errors.image ? (
                  <div className='text-danger'>{formik.errors.image}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
            <Button  type='submit' className="post-btn">
              Post Blog
            </Button>
          </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Index;

