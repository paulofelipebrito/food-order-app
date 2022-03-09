import {ButtonContainer} from './styles'
import CartIcon from '../../../Cart/CartIcon';

export default function HeaderCartButton(){
  return (
    <ButtonContainer>
      <span className="icon">
        <CartIcon/>
      </span>
      <span>Your cart</span>
      <span className="badge">3</span>
    </ButtonContainer>
  );
};

