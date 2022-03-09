import Modal from '../UI/Modal';
import {CartContainer} from './styles'

export default function Cart(props){
  const cartItems = 
    <ul className="cart-items">  
      {[{id: ''}].map((item)=> (        
          <li>{item.name}</li>        
      ))}
    </ul>

  return(
    <Modal onClose={props.onClose}>
      <CartContainer>
          {cartItems}
          <div className="total">
            <span> Total Amount: </span>  
            <span> 23.32 </span>  
          </div>
          <div className="actions">
            <button className="button--alt" onClick={props.onClose}>Close</button>
            <button className="button--order">Order</button>
          </div>
      </CartContainer>
    </Modal>
  );
};