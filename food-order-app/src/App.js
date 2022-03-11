import { useState } from "react";

import Cart from "./components/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/Context/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function handlerShowCart(){
    setCartIsShown(true);
  }
  function handlerHideCart(){
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart 
          onClose={handlerHideCart}/>
        )}
      <Header 
        onShowCart={handlerShowCart} 
      />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
