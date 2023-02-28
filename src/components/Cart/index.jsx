import AddedCard from "../AddedCard"
import Button from "../Button"
import React from "react"

function Cart(props) {

    
    return (
        props.itemsInCart.length > 0 ? <div className="overlay">
            <div className="cart">
                <div className="top">
                    <h3>Корзина</h3>
                    <img onClick={props.isClose} src="/img/icons/plus.svg" alt="plus" />
                </div>
                <hr></hr>
                <div className="middle">
                    {props.itemsInCart.map((el, index) => <AddedCard key={index} {...el} remove={props.remove}/>)}
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
        </div> : <div className="overlay">
                <div className="cart">
                    <div className="top">
                        <h3>Корзина</h3>
                        <img onClick={props.isClose} src="/img/icons/plus.svg" alt="plus" />
                    </div>
                    <hr></hr>
                    <div className="middle_empty">
                        <img src="/img/icons/empty.svg" alt="cart-is-empty" />
                        <h3>Корзина пустая</h3>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <Button onBack={props.isClose} className="cart_button" text="Вернуться назад" />
                    </div>
                </div>
        </div>
    )
}

export default Cart