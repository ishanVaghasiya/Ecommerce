import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions";
import toast from "react-hot-toast";

const ProductCard = ({
  _id,
  name,
  image,
  description,
  brand,
  rating,
  category,
  price,
  countInStock,
  numReviews,
}) => {
  const cartData = useSelector((state) => state.cart);
  const { cartItems } = cartData;
  const dispatch = useDispatch();

  const handleAddtocart = (id) => {
    const existingItem = cartItems.find((data) => data.product === id);
    if (existingItem) {
      toast("Already exist in cart", {
        icon: "🗑"
      });
    } else {
      toast.success("Added successfully");
      dispatch(addToCartAction(id, 1));
    }
  };
  return (
    <Card>
      <Link to={`/product/${_id}`} className="p-3">
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body>
        <a href={`/product/${_id}`}>
          <Card.Title className="m-2">{name}</Card.Title>
        </a>
        <Card.Text className="m-2">{brand}</Card.Text>
        {/* <Card.Text>{description}</Card.Text> */}
        <Card.Text className="m-2">
          <Rating rating={rating} numReviews={numReviews} />
        </Card.Text>
        <Card.Text className="m-2">${price}</Card.Text>
      </Card.Body>
      <Button
        variant="primary"
        className="m-3"
        disabled={countInStock === 0}
        onClick={() => handleAddtocart(_id)}
      >
        {countInStock === 0 ? "Out Of Stock" : "Add to Cart"}
      </Button>
    </Card>
  );
};

export default ProductCard;
