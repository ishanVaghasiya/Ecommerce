import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, uesSelector, useSelector } from "react-redux";
import { userLoginAction } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Cookies from "universal-cookie";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("Token");
    if(token && token !== null){
      navigate("/");
    }
  });
  //////////////////////////////////
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.userLogin)

  const [userData, setUserData] = useState({});
  const handelOnchange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(userData);

  const isValidUser =  () => {
      dispatch(userLoginAction(userData));
      if(userInfo && userInfo._id){
        navigate("/")
      }
    // await axios.post("http://localhost:5000/login", userData)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    isValidUser();
  };
  //////////////////////////////////

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>LOGIN</h1>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  className="inputBorder"
                  name="email"
                  type="email"
                  placeholder="enter email"
                  onChange={handelOnchange}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label className="mt-3">Password</Form.Label>
                <Form.Control
                  className="inputBorder"
                  name="password"
                  type="password"
                  placeholder="enter password"
                  onChange={handelOnchange}
                ></Form.Control>
              </Form.Group>
              <button type="submit" className="btn btn-dark mt-3">
                LOGIN
              </button>
            </Form>
            <Row>
              <Col className="p-3">
                New Customer ?<Link to={"/register"}>Register</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
