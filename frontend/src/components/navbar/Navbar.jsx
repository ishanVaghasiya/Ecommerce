import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import Cookies from "universal-cookie";
import { CgLogOut } from "react-icons/cg";
import "./navbar.css";
import { userLogout } from "../../redux/actions/userAction";

const NavScrollExample = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState(false);

  useEffect(() => {
    const cookie = new Cookies();
    const mytoken = cookie.get("Token");
    if (mytoken && mytoken !== null) setToken(true);
  });

  const handelLogout = () => {
    dispatch(userLogout());
    setToken(false)
    navigate("/login");
  };

  const handeleLogin = () => {
    navigate("/login");
  };
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      collapseOnSelect
      style={{ color: "white" }}
    >
      <Container fluid>
        <Link to="/" className="myLink">
          MyShop
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" ms-auto  my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="myLink ms-2 me-3" to="/cart">
              <span className="d-flex align-items-center">
                <AiOutlineShoppingCart size={20} />
                <p className="ps-2">cart</p>
              </span>
            </Link>

            <span className="d-flex align-items-center">
              {token ? (
                <>
                  <CgLogOut size={20} />
                  <button className="unsetBtn" onClick={handelLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <MdLogin size={20} />
                  <button className="unsetBtn" onClick={handeleLogin}>
                    Login
                  </button>
                </>
              )}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavScrollExample;
