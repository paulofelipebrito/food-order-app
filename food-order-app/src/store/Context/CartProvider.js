import { useReducer } from 'react';
import CartContext from './CartContext'

const defaultCartState = {
  items: [],
  totalAmount: 0 
} 

const cartReducer = (prevState, action) => {
  if(action.type === 'ADD_CART_ITEM'){
    const updatedTotalAmount = prevState.totalAmount + action.item.price *  action.item.amount;

    const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.item.id);
    
    const existingCartItem = prevState.items[existingCartItemIndex];

    let updatedItems;

    if(existingCartItem){
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = prevState.items.concat(action.item);
    }

    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if(action.type === 'REMOVE_CART_ITEM'){
    const existingCartItemIndex = prevState.items.findIndex((item) => item.id === action.id);

    const existingItem = prevState.items[existingCartItemIndex];

    const updatedTotalAmount = prevState.totalAmount - existingItem.price;

    let updatedItems;

    if(existingItem.amount === 1){
      updatedItems = prevState.items.filter(item => item.id !== action.id)
    } else{
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount 
    }
  }

  if(action.type === 'CLEAR'){
    return defaultCartState;  
  }

  return defaultCartState;
}

function CartProvider(props){
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  function handlerAddItemToCart(item){
    dispatchCartAction({type: 'ADD_CART_ITEM', item: item})
  }

  function handlerRemoveItemFromCart(id){
    dispatchCartAction({type: 'REMOVE_CART_ITEM', id: id})
  
  }
  function handlerClearCart(id){
    dispatchCartAction({type: 'CLEAR'})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handlerAddItemToCart,
    removeItem: handlerRemoveItemFromCart,
    clearCart: handlerClearCart
  }

  return(
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
}
export default CartProvider;