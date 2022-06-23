import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ProductCard} from "../../components/index.js";
import { productListAction } from "../../redux/actions/productAction";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

 return (
    <>
      <div className="produtsCards">
        {products.map((products) => (
              <ProductCard
                key={products._id}
                _id={products._id}
                name={products.name}
                image={products.image}
                description={products.description}
                brand={products.brand}
                category={products.category}
                price={products.price}
                rating={products.rating}
                countInStock={products.countInStock}
                numReviews={products.numReviews}
              />
            ))}
      </div>
    </>
  );
};

export default Home;
