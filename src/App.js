import Header from "./components/Header";
import Store from "./pages/Store";
import Button from "./components/Button";
import Cart from "./components/Cart";
import React from "react";
import axios from "axios";
import Favorite from "./pages/Favorite";
import { useRoutes } from "react-router-dom";


function App() {
  const [isCartOpened, setIsCartOpened] = React.useState(false)
  const [isAddedToCart, setIsAddetToCart] = React.useState([])
  const [isAddedToFavorite, setIsAddetToFavorite] = React.useState([])

  const onCartOpen = () => {
    setIsCartOpened(true)
  }
  const onClose = () => {
    setIsCartOpened(false)
  }

  React.useEffect(() => {
    axios.get("https://63fb26d62027a45d8d60e678.mockapi.io/cart").then(res => setIsAddetToCart(res.data))
  }, []) 

  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    axios.get("https://63fb26d62027a45d8d60e678.mockapi.io/cards").then(res => setCards(res.data))
  }, [])

  const saveAdding = async (obj) => {
    try {
      axios.post("https://63fb26d62027a45d8d60e678.mockapi.io/cart", obj)
      setIsAddetToCart(prev => [...prev, obj])
    } catch (error) {
      alert("Sorry... It's an error :(")
    }
  }

  const removeFromCart = async (id) => {
    try {
      if (isAddedToCart.find(obj => obj.id === id)) {
        axios.delete(`https://63fb26d62027a45d8d60e678.mockapi.io/cart/${id}`)
      }
      setIsAddetToCart(prev => prev.filter((el) => el.id !== id))
    } catch (error) {
      alert("Sorry... It's an error :(")
    } 
  }

  const saveFavorite =  (obj) => {
    setIsAddetToFavorite(prev => [...prev, obj])
  }
  
  const removeFromFavorite = (obj) => {
    setIsAddetToFavorite(prev => prev.filter((el) => el.image !== obj.image))
  }

  let element = useRoutes([
    { path: "/", element: <Store saveAdding={saveAdding} isAddedToCart={isAddedToCart} saveFavorite={saveFavorite} removeFromFavorite={removeFromFavorite} cards={cards} /> },
    { path: "/favorites", element: <Favorite isAddedToFavorites={isAddedToFavorite} saveAdding={saveAdding} removeFromFavorite={removeFromFavorite} saveFavorite={saveFavorite} /> }
  ])

  return (
    <div className="main">
      {isCartOpened && <Cart isClose={onClose} itemsInCart={isAddedToCart} remove={removeFromCart}/>}
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
        {element}
        
      </div>
    </div>
  );
}

export default App;
