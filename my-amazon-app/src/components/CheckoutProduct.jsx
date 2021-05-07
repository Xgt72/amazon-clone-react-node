import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [_, dispatch] = useStateValue();

  const getRatingWithStars = () => {
    const stars = Array(5);
    for (let i = 0; i < 5; i++) {
      stars[i] = <StarOutlineIcon key={`star_${i}`} />;
    }
    for (let i = 0; i < rating; i++) {
      stars[i] = <StarIcon key={`star_${i}`} />;
    }
    return stars;
  };

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };

  return (
    <div className="checkoutProduct flex_row_align_center">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">{getRatingWithStars()}</div>
        <button type="buton" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
