import React from "react";
import Card from "../../components/Card"
import "./favorite.module.scss"


function Favorite({ saveAdding, isAddedToFavorites, saveFavorite, removeFromFavorite }) {
    const [favorite, setFavorite] = React.useState(true)

    return (
        <section className="favorite">
            <div className="container">
                <div className="favorite__descr">
                    <h2>Добавлено в избранное</h2>
                </div>
                <div className="cards_wrapper">
                    {isAddedToFavorites.map((item, index) => <Card key={index} {...item} saveAdding={saveAdding} removeFromFavorite={removeFromFavorite}  saveFavorite={saveFavorite} preFavorite={favorite} onClickFavorite={() => setFavorite(!favorite)}  />)}
                </div>
            </div>
        </section>
    )
}

export default Favorite