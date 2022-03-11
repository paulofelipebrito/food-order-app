import { useContext } from 'react';
import CartContext from '../../store/Context/CartContext';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import {CartContainer} from './styles'

export default function Cart(props){
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  function handlerAddCartItem(item) {
    cartContext.addItem({...item, amount:1});
  }

  function handlerRemoveCartItem(id){
    cartContext.removeItem(id);
  }

  const cartItems = 
    <ul className="cart-items">  
      {cartContext.items.map((item)=> (        
          <CartItem 
            key={item.id}
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onAdd={handlerAddCartItem.bind(null, item)}
            onRemove={handlerRemoveCartItem.bind(null, item.id)}
            />        
      ))}
    </ul>

  return(
    <Modal onClose={props.onClose}>
      <CartContainer>
          {cartItems}
          <div className="total">
            <span> Total Amount: </span>  
            <span> {totalAmount} </span>  
          </div>
          <div className="actions">
            <button className="button--alt" onClick={props.onClose}>Close</button>
            {hasItems && <button className="button--order">Order</button>}
          </div>
      </CartContainer>
    </Modal>
  );
};