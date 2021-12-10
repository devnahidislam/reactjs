import React, {useContext} from 'react';
import { cartContext } from './Cart';

const Items = ({ id, title, description, price, img, quantity }) => {
  const { removeItem, increment, decrement } = useContext(cartContext);

  return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="phone" />
        </div>
        <div className="title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add" onClick={ () => increment(id)}></i>
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <i className="fas fa-trash-alt trash" onClick={ () => removeItem(id)}></i>
        </div>
      </div>
    </div>
  )
}

export default Items;
