import { useContext } from 'react';
import CartContext from '../../../store/Context/CartContext';
import MealItemForm from './MealItemForm';
import {MealItemLi} from './styles'

export default function MealItem(props){
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`

  function handlerAddToCart(amount){
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return(
    <MealItemLi>
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToChart={handlerAddToCart}/>
      </div>

    </MealItemLi>
  );
};