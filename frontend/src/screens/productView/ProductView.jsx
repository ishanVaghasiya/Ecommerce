import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  Form,
} from "react-bootstrap";
import { Rating } from "../../components/index.js";
import { TbCurrencyDollar } from "react-icons/tb";
import { BiArrowBack } from "react-icons/bi";
import { singleProductListAction } from "../../redux/actions/productAction.js";
import { addToCartAction } from "../../redux/actions/cartActions"
import { useSelector, useDispatch } from "react-redux";
import toast from 'react-hot-toast';

const ProductView = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.singleProduct);
  const { product } = productDetails;

  useEffect(() => {
    dispatch(singleProductListAction(id));
  }, [dispatch, id]);

  
  const handleAddToCart = () => {
    // navigate(`/cart/${id}/${qty}`);  ---second way
    navigate(`/cart/${id}?qty=${qty}`)
    // dispatch(addToCartAction(id, qty))
  };
  return (
    <>
      <Link to="/" className="myLink">
        <BiArrowBack />
        <span> Go back</span>
      </Link>
      <>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </ListGroupItem>

              <ListGroupItem>
                <h3 className="d-flex align-content-center">
                  <TbCurrencyDollar />
                  {product.price}
                </h3>
              </ListGroupItem>

              <ListGroupItem>
                <h3>{product.brand}</h3>
              </ListGroupItem>

              <ListGroupItem>
                <p>{product.description}</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>Staus :</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                  </Col>
                </Row>

                {product.countInStock > 0 && (
                  <ListGroupItem className="mt-2">
                    <Col>Qty</Col>
                    <Form.Control
                      name="qty"
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((data) => (
                        <option key={data + 1} value={data + 1}>
                          {data + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </ListGroupItem>
                )}
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Button
                    className="btn btn-primary"
                    disabled={product.countInStock === 0}
                    onClick={handleAddToCart}
                  >
                    {product.countInStock === 0
                      ? "Out Of Stock"
                      : "Add to Cart"}
                  </Button>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </>
    </>
  );
};

export default ProductView;
