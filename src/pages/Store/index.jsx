import "./store.module.scss"
import Card from "../../components/Card"
import React from "react"


function Store({cards,  saveAdding, isAddedToCart, saveFavorite}) {
    
    
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
                    {cards.map((item, index) => isAddedToCart.find(obj => obj["image"] === item["image"]) ? <Card key={index} {...item} saveAdding={saveAdding} saveFavorite={saveFavorite} preAdded={true} /> : <Card key={index} {...item} saveAdding={saveAdding} saveFavorite={saveFavorite} />)}
                </div>
            </div>
        </section>
    )
}

export default Store