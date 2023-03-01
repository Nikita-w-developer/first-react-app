import "./store.module.scss"
import Card from "../../components/Card"
import React from "react"


function Store({ cards, saveAdding, isAddedToCart, saveFavorite, removeFromFavorite}) {
    const [favorite, setFavorite] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState("")

    const onChangeInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <section className="products">
            <div className="container">
                <div className="products__descr">
                    {searchValue ? <h2>Поиск по запросу: {searchValue}</h2> : <h2>Все кроссовки</h2>}
                    <div className="products__search">
                        <input onChange={onChangeInput} value={searchValue} placeholder="Поиск..." />
                    </div>
                </div>
                <div className="cards_wrapper">
                    {cards.filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) ).map((item, index) => isAddedToCart.find(obj => obj["image"] === item["image"]) ? <Card key={index} {...item} saveAdding={saveAdding} onClickFavorite={() => setFavorite(!favorite)} saveFavorite={saveFavorite} preAdded={true} removeFromFavorite={removeFromFavorite} /> : <Card key={index} {...item} saveAdding={saveAdding} onClickFavorite={() => setFavorite(!favorite)} saveFavorite={saveFavorite} removeFromFavorite={removeFromFavorite} />)}
                </div>
            </div>
        </section>
    )
}

export default Store