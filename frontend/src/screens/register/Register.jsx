import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css"

const Register = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
          <h1>Register</h1>
            <Form>
              <Form.Group controlId="email">
                <Form.Label className="mt-3">Name</Form.Label>
                <Form.Control className="inputBorder"
                  type="text"
                  placeholder="enter Name"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label className="mt-3">Email Address</Form.Label>
                <Form.Control className="inputBorder"
                  type="email"
                  placeholder="enter email"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label className="mt-3">Password</Form.Label>
                <Form.Control className="inputBorder"
                  type="password"
                  placeholder="enter password"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label className="mt-3">Confirm Password</Form.Label>
                <Form.Control className="inputBorder"
                  type="password"
                  placeholder="Re-enter password"
                ></Form.Control>
              </Form.Group>
              <button type="submit" className="btn btn-dark mt-3" >
                SING IN
              </button>
            </Form>
            <Row>
              <Col>
                Have an account !<Link to={"/login"}>Login</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
