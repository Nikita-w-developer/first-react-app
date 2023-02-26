import AddedCard from "../AddedCard"
import Button from "../Button"

function Cart(props) {
    return (
        <div className="overlay">
            <div className="cart">
                <div className="top">
                    <h3>Корзина</h3>
                    <img onClick={props.isClose} src="/img/icons/plus.svg" alt="plus" />
                </div>
                <hr></hr>
                <div className="middle">
                    {props.itemsInCart.map((el) => <AddedCard {...el}/>)}
                </div>
                <div className="bottom">
                    <div className="text_wrapper">
                        <div>
                            <p>Итого: </p>
                            <b>21 999 руб.</b>
                        </div>
                        <div>
                            <p>Налог 5%: </p>
                            <b>1074 руб.</b>
                        </div>
                    </div>
                    <Button className="cart_button" text="Оформить заказ" />
                </div>
            </div>
        </div>
    )
}

export default Cart