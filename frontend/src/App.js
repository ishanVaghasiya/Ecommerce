import React from "react";
import { Container } from "react-bootstrap";
import { Navbar, Footer } from "./components";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, ProductView, Error, Cart, Login, Register,Cheackout } from "./screens";
import  { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Navbar />
      <div className="endfooter">
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<ProductView />} />
            <Route exact path="/*" element={<Error />} />
            {/* <Route path="/cart/:id/:qty" element={<Cart />} />    ----second way*/}
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />  
            <Route path="/cheackout" element={<Cheackout/>} />  
          </Routes>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default App;
