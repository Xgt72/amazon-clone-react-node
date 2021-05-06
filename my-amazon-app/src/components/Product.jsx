import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import './Product.css';

function Product({ title, image, price, rating }) {
    const getRatingWithStars = () => {
        const stars = Array(5).fill(<StarOutlineIcon />);
        for (let i=0; i < rating; i++) {
            stars[i] = <StarIcon />;
        }
        return stars;
    }
  return (
    <div className="product flex_col">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {getRatingWithStars()}
        </div>
      </div>
      <img src={image} alt={title} />
      <button type="buton">Add to Basket</button>
    </div>
  );
}

export default Product;
