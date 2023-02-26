import Header from "./components/Header";
import Store from "./components/Store";
import Button from "./components/Button";
import Cart from "./components/Cart";
import React from "react";


function App() {
  const [isCartOpened, setIsCartOpened] = React.useState(false)

  const onCartOpen = () => {
    setIsCartOpened(true)
  }
  const onClose = () => {
    setIsCartOpened(false)
  }

  const [isAddedToCart, setIsAddetToCart] = React.useState([])

  
  const handleAddedToCart = (obj) => {
    setIsAddetToCart(prev => [...prev, obj]
      )
  }

  return (
    <div className="main">
      {isCartOpened && <Cart isClose={onClose} itemsInCart={isAddedToCart}/>}
      <div className="wrapper">
        <Header onCartOpen={onCartOpen}/>
        <hr />
        <div className="main_banner">
          <div className="left_banner_part">
            <img src="/img/adidas.png" alt="adidas" />
            <h1><span>Stan Smith</span>,<br />
              Forever!</h1>
            <Button className="banner_button" text="Купить"/>
          </div>
          <div className="right_banner_part">
            <img src="/img/bg_top.jpg" alt="main_bg" />
          </div>
        </div>
        <Store onAddToCart={handleAddedToCart}/>
      </div>
    </div>
  );
}

export default App;
