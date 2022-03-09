import {ButtonContainer} from './styles'
import CartIcon from '../../../Cart/CartIcon';

export default function HeaderCartButton(props){
  return (
    <ButtonContainer onClick={props.onClick}>
      <span className="icon">
        <CartIcon/>
      </span>
      <span>Your cart</span>
      <span className="badge">3</span>
    </ButtonContainer>
  );
};

