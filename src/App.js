import Header from "./components/Header";
import Store from "./components/Store";
import Button from "./components/Button";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="main">
      <Cart />
      <div className="wrapper">
        <Header />
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
        <Store />
      </div>
    </div>
  );
}

export default App;
