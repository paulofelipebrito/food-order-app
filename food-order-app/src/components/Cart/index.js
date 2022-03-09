import {CartContainer} from './styles'

export default function Cart(props){
  const cartItems = 
    <ul className="cart-items">  
      {[{id: ''}].map((item)=> (        
          <li>{item.name}</li>        
      ))}
    </ul>

  return(
    <CartContainer>
      <div>
        {cartItems}
        <div className="total">
          <span> Total Amount: </span>  
          <span> 23.32 </span>  
        </div>
        <div className="actions">
          <button className="button--alt">Close</button>
          <button className="button--order">Order</button>
        </div>
      </div>  
    </CartContainer>
  );
};