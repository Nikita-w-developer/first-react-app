import "./store.module.scss"
import Card from "../Card"
import React from "react"

const cards = [
    { 
        image: "/img/sneaker1.jpg",
        descr: "sneaker1",
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        coast: 12999
    },
    {
        image: "/img/sneaker2.jpg",
        descr: "sneaker2",
        title: "Мужские Кроссовки Nike Air Max 270",
        coast: 12999
    },
    {
        image: "/img/sneaker3.jpg",
        descr: "sneaker3",
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        coast: 8499
    },
    {
        image: "/img/sneaker4.jpg",
        descr: "sneaker4",
        title: "Кроссовки Puma X Aka Boku Future Rider",
        coast: 8999
    },
    {
        image: "/img/sneaker5.jpg",
        descr: "sneaker5",
        title: "Мужские Кроссовки Under Armour Curry 8",
        coast: 15199
    },
    {
        image: "/img/sneaker6.jpg",
        descr: "sneaker6",
        title: "Мужские Кроссовки Nike Kyrie 7",
        coast: 11299
    },
    {
        image: "/img/sneaker7.jpg",
        descr: "sneaker7",
        title: "Мужские Кроссовки Jordan Air Jordan 11",
        coast: 10799
    },
    {
        image: "/img/sneaker8.jpg",
        descr: "sneaker8",
        title: "Мужские Кроссовки Nike LeBron XVIII",
        coast: 16499
    },
    {
        image: "/img/sneaker9.jpg",
        descr: "sneaker9",
        title: "Мужские Кроссовки Nike Lebron XVIII Low",
        coast: 13999
    },
    {
        image: "/img/sneaker12.jpg",
        descr: "sneaker10",
        title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        coast: 11299
    },
]



function Store({onAddToCart}) {
    
    return (
        <section className="products">
            <div className="container">
                <div className="products__descr">
                    <h2>Все кроссовки</h2>
                    <div className="products__search">
                        <input placeholder="Поиск..." />
                    </div>
                </div>
                <div className="cards_wrapper">
                    {cards.map((item) => <Card  {...item} add={onAddToCart} />)}
                </div>
            </div>
        </section>
    )
}

export default Store