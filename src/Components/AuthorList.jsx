import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";


const Author = ({ author, setAuthor, authedit }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: authedit,

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),

      date: Yup.date().nullable().required("Required"),

      bio: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/AuthorPage");
      formik.resetForm();

      if (values.isEditing) {
        let a = [];
        for (let x of author) {
          if (x.isEditing) {
            a.push({ ...values, isEditing: false });
          } else {
            a.push(x);
          }
        }
        setAuthor(a);
      } else {
        setAuthor([...author, values]);
      }
    },
  });

  return (
    <Card style={{ backgroundColor: "#081b29", color: "#ededed" }}>
      <Card.Body>
        <Card.Title>
          <h1 className="text-uppercase" style={{ textAlign: "center", backgroundColor: "#219ebc", color: "white" }}>
            Enter Author-Details
          </h1>
        </Card.Title>
        <br />

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label className="text-uppercase">Author-Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Author-Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={formik.touched.name && !!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <br />

          <Form.Group controlId="date">
            <Form.Label className="text-uppercase">Date-of-Birth:</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter the Date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              isInvalid={formik.touched.date && !!formik.errors.date}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.date}
            </Form.Control.Feedback>
          </Form.Group>
          <br />

          <Form.Group controlId="bio">
            <Form.Label className="text-uppercase">Enter Short Biography:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter the Biography"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bio}
              isInvalid={formik.touched.bio && !!formik.errors.bio}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.bio}
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          
          <div className="d-grid gap-1">
            <Button type="submit" variant="outline-primary">
              Add the Details
            </Button>
          </div>
          <br />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Author;
