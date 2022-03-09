import {MealsItemLi} from './styles'

export default function MealsItem(props){
  const price = `$${props.price.toFixed(2)}`

  return(
    <MealsItemLi>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <h3></h3>
      </div>

    </MealsItemLi>
  );
};