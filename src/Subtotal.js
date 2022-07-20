import React from 'react';
import CurrencyFormat from 'react-currency-format';
//import { useHistory } from 'react-router-dom';
//import { useStateValue } from './StateProvider';
import './Subtotal.css';
//import { getBasketTotal } from './reducer';

function Subtotal() {
    //const history = useHistory();
    //const [{ basket }] = useStateValue();


  return (
    <div className='subtotal'>
    <CurrencyFormat
    renderText={(value) => (
      <>
        <p>
          Subtotal (0 items): <strong>0</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>
    )}
    decimalScale={2}
    value={0} 
    displayType={'text'}
    thousandSeparator={true}
    prefix={'$'}
  />

    <button>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal