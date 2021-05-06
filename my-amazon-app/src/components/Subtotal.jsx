import React from 'react';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

function Subtotal() {
  const [{ basket }] = useStateValue();
  const calculSubtotal = () => {
      let subtotal = 0;
      basket.forEach(item => {
          subtotal += item.price;
      });
      return subtotal;
  };

  return (
    <div className="flex_col_justify_between subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift flex_row_align_center">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculSubtotal()}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'€'}
      />
      <button type="button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
