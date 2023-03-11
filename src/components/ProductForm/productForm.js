import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./productForm.css";

function AddProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      price,
      category,
    };

    axios
      .post(`${BACKEND_URL}/api/products`, data)
      .then((response) => {
        console.log(response.data);
        toast.success("Product added successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Could not add product. Please try again later.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });

    setName("");
    setPrice("");
    setCategory("");
  };

  return (
    <Row className="mx-auto" style={{ width: "70%" }}>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="number"
              required
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Enter Price"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category:</Form.Label>
            <Form.Control
              type="text"
              required
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              placeholder="Enter Category"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default AddProductForm;
