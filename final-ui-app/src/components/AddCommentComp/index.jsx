import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import axios from "axios";
import './index.css'

const Index = (props) => {
  const { blogId } = props;
  const navigate = useNavigate();

  

  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };
  const [comment, setComment] = useState(defaultValues);

  const formik = useFormik({
    initialValues: comment,
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "should be more than 3 characters")
        .max(150, "Must be 150 characters or less")
        .required("Required"),
      message: Yup.string()
        .min(3, "Must be  3 characters or more")
        .max(1000, "Must be 1000 characters or less")
        .required("Required"),
      email: Yup.string()
        .email()
        .min(3, "should be more than 3 characters")
        .max(150, "Must be 150 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      values.blogId = blogId;
      values.commentedAt=moment().format("Do dddd MMMM gggg");

      console.log(JSON.stringify(values, null));
      console.log("Details are being Posted");
      axios
        .post("http://localhost:3000/comments", values)
        .then(function (response) {
          console.log(response);
          navigate("/details");
          window.location.reload();
          setComment(defaultValues);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-row">
          <Form.Group
            className="mb-3"
            controlId="name"
            style={{ width: "50%", marginRight: "10px" }}
          >
            <Form.Control
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter name"
            />
            <Form.Text className="text-danger">
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="email"
            style={{ width: "50%" }}
          >
            <Form.Control
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Email"
            />
            <Form.Text className="text-danger">
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </Form.Text>
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="message">
          <Form.Control
            as="textarea"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            placeholder="Enter Message"
          />
          <Form.Text className="text-danger">
            {formik.touched.message && formik.errors.message ? (
              <div className="text-danger">{formik.errors.message}</div>
            ) : null}
          </Form.Text>
        </Form.Group>

        <Button type="submit" className="post-comment-btn">
          Post Comment
        </Button>
      </Form>
    </>
  );
};

export default Index;
