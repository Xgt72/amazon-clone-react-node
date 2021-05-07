import React from 'react';
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';

import './Checkout.css';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout flex_row">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="advertising"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {basket.map((item, index) => (
          <CheckoutProduct key={`product_${item.id}-${index}`} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
