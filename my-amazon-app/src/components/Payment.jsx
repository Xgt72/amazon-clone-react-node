import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";

import "./Payment.css";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(false);

  useEffect(() => {
    // generate the special stripe secret which allow us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        // Stripe expects the total in a currencies submits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    // console.log(e);
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <section className="payment">
      <div className="payment__container">
        <h1>Checkout ({<Link to="/checkout">{basket.length} items</Link>})</h1>
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
          <div className="payment__details">
            {/* Stripe magic will go */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"€"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
