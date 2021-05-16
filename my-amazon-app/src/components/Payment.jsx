import React from 'react';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <section className="payment">
      <div className="payment__container">
        <h1>
          Checkout ({<Link to="/checkout">{basket.length} items</Link>})
        </h1>
        {/* Payment section  - delivery address */}
        <div className="payment__section flex_row">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          {user && (
            <div className="payment__address">
              <p>
                {user.lastname} {user.firstname}
              </p>
              <p>{user.street}</p>
              <p>
                {user.zip_code} {user.city}
              </p>
            </div>
          )}
        </div>
        {/* Payment section  - Review items */}
        <div className="payment__section flex_row">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, index) => (
              <CheckoutProduct key={`product_${item.id}-${index}`} {...item} />
            ))}
          </div>
        </div>
        {/* Payment section  - Payment method */}
        <div className="payment__section flex_row">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe magic will go */}</div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
