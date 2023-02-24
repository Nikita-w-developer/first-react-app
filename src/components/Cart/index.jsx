import AddedCard from "../AddedCard"
import Button from "../Button"

const obj = {
    image: "/img/sneaker9.jpg",
    descr: "sneaker9",
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    coast: "13 999 руб."
}
function Cart() {
    return (
        <div className="overlay">
            <div className="cart">
                <div className="top">
                    <h3>Корзина</h3>
                    <hr></hr>
                </div>
                <div className="middle">
                    <AddedCard {...obj} />
                    <AddedCard {...obj} />
                    <AddedCard {...obj} />
                    <AddedCard {...obj} />
                    <AddedCard {...obj} />
                </div>
                <div className="bottom">
                    <div className="text_wrapper">
                        <div>
                            <p>Итого: </p>
                            <b>21 498 руб.</b>
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