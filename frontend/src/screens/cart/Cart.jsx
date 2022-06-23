import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../redux/actions/cartActions";

import emptyCart from "../../assets/emptyCart.svg";
import { Message } from "../../components";

import { MdRemoveShoppingCart } from "react-icons/md";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const qty = searchParams.get("qty");

  // TODO: why we write if(id) here
  useEffect(() => {
    if (id) {
      dispatch(addToCartAction(id, qty));
    }
  }, [id, dispatch, qty]);

  const checkout = () => {
    const cookie = new Cookies();
    const token = cookie.get("Token");
    console.log(token);
    if (!token && token === undefined) {
      navigate("/login");
    }else{
      navigate("/cheackout");
    }
  };

  const cartData = useSelector((state) => state.cart);
  const { cartItems } = cartData;

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCartAction(id));
    toast("Deleted", {
      icon: "🚮",
    });
  };
  return (
    <div>
      <Container>
        {cartItems.length === 0 ? (
          <>
            <Row>
              <Message variant="danger">
                Your cart is empty
                <Link to="/" className="myLink">
                  Add Now
                </Link>
              </Message>
            </Row>
            <Row>
              <Col className="svgPic">
                <img src={emptyCart} alt="" />
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col md={4}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      <h2>
                        Total items :
                        {cartItems.reduce((acc, item) => acc + item.qty * 1, 0)}
                      </h2>
                      <h5>
                        Total Amount:- $
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                      </h5>
                    </ListGroupItem>
                    <Button
                      type="button"
                      className="btn-block"
                      disabled={cartItems.length === 0}
                      onClick={checkout}
                    >
                      Proceed to checkOut
                    </Button>
                    <Link to="/" className="btn btn-dark">
                      &nbsp; Countinue Shopping
                    </Link>
                  </ListGroup>
                </Card>
              </Col>
              <Col md={8}>
                <ListGroup variant="flash">
                  {cartItems.map((data) => (
                    <Row
                      key={data.product}
                      style={{ backgroundColor: "white" }}
                      className="m-1 p-2"
                    >
                      <Col md={2}>
                        <Image src={data.image} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link
                          className="myLink"
                          to={`/product/${data.product}`}
                        >
                          {data.name}
                        </Link>
                      </Col>
                      <Col md={2}>${data.price}</Col>{" "}
                      <Col md={2}>
                        <sapn className="pe-2"> Qty</sapn>
                        <span
                          className=""
                          style={{
                            color: "red",
                            cursor: "pointer",
                            fontSize: "18px",
                          }}
                          onClick={() => handleRemoveFromCart(data.product)}
                        >
                          <MdRemoveShoppingCart />
                        </span>
                        <Form.Control
                          name="qty"
                          as="select"
                          value={data.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCartAction(data.product, e.target.value)
                            )
                          }
                        >
                          {[...Array(data.countInStock).keys()].map((data) => (
                            <option key={data + 1} value={data + 1}>
                              {data + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default Cart;
