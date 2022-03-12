import { useContext, useState } from 'react';
import MealsService from '../../services/MealsService';
import CartContext from '../../store/Context/CartContext';
import Modal from '../UI/Modal';
import UserForm from '../UserForm';
import CartItem from './CartItem';
import {CartContainer} from './styles'

export default function Cart(props){
  const cartContext = useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  function handlerAddCartItem(item) {
    cartContext.addItem({...item, amount:1});
  }

  function handlerRemoveCartItem(id){
    cartContext.removeItem(id);
  }

  function handleOrder(){
    setShowForm(true);
  }

  async function onConfirmSubmit(userData){
    setIsSubmitting(true);  
    await MealsService.orderMeal(userData,cartContext.items);
    setIsSubmitting(false);
    setDidSubmit(true); 
    cartContext.clearCart();
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

  const modalActions = 
    <div className="actions">
      <button className="button--alt" onClick={props.onClose}>Close</button>
      {hasItems && <button className="button--order" onClick={handleOrder}>Order</button>}
    </div>

  const cartModalContent = 
    <CartContainer>
      {cartItems}
      <div className="total">
        <span> Total Amount: </span>  
        <span> {totalAmount} </span>  
      </div>
      {showForm && <UserForm onClose={props.onClose} onConfirm={onConfirmSubmit}/>}
      {!showForm && modalActions}
  </CartContainer>

  const isSubmittingModalContent = <p>Sending order data...</p>
  const didSubmitModalContent = 
  <CartContainer>
    <p>Successfully sent the order...</p>
    <div className="actions">
      <button className="button--alt" onClick={props.onClose}>Close</button>
    </div>
  </CartContainer>


  return(
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};