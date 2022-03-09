import { HeaderContainer, ImageContainer } from './styles'
import mealsImage from '../../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

export default function Header(props){
  return(
    <>
      <HeaderContainer>
        <h1>Hayako food</h1>
        <HeaderCartButton 
          onClick={props.onShowCart}
        >
          Cart
        </HeaderCartButton>
      </HeaderContainer>
      <ImageContainer>
        <img src={mealsImage} alt="Meals's food"/>
      </ImageContainer>
    </>
  );
}