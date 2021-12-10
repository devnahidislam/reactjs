import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { cartContext } from './Cart';

const ContextCart = () => {

  const { item, clearCart, totalItem, totalAmount} = useContext(cartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="arrow" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h2>Shoping Cart</h2>
        <p className="total-items">You have <span className="total-items-count">{totalItem}</span> items in your shopping cart.</p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {
                item.map((curItem) => {
                  return <Items key={curItem.id} {...curItem}/>
                })
              }
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>Cart Total: <span> {totalAmount} $</span></h3>
          <button>Checkout</button>
          <button className="Clear-btn" onClick={ clearCart }>Clear Cart</button>
        </div>
      </section>
      </>
    )
  };
  return (
    <div>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>Continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="arrow" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h2>Shoping Cart</h2>
        <p className="total-items">You have <span className="total-items-count">{totalItem}</span> items in your shopping cart.</p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {
                item.map((curItem) => {
                  return <Items key={curItem.id} {...curItem}/>
                })
              }
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>Cart Total: <span> {totalAmount} $</span></h3>
          <button>Checkout</button>
          <button className="Clear-btn" onClick={ clearCart }>Clear Cart</button>
        </div>
      </section>
    </div>
  )
}

export default ContextCart;
