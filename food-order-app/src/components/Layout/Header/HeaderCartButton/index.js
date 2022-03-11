import { useContext, useEffect, useState } from 'react';

import CartContext from '../../../../store/Context/CartContext';
import CartIcon from '../../../Cart/CartIcon';
import {ButtonContainer} from './styles'

export default function HeaderCartButton(props){
  const cartContext = useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const {items} = cartContext;

  const numberOfCartItems = items.reduce(
    (currentNumber, item)=>{
      return currentNumber + item.amount;
    }, 0);


  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(()=>{
      setButtonIsHighlighted(false);
    }, 300);

    return ()=>{
      clearTimeout(timer);
    }
  },[items]);


  return (
    <ButtonContainer className={buttonIsHighlighted ? 'bump' : ''} onClick={props.onClick}>
      <span className="icon">
        <CartIcon/>
      </span>
      <span>Your cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </ButtonContainer>
  );
};

