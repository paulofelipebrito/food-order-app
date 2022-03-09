import { useState } from "react";

import Cart from "./components/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function handlerShowCart(){
    setCartIsShown(true);
  }
  function handlerHideCart(){
    setCartIsShown(false);
  }

  return (
    <>
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
    </>
  );
}

export default App;
