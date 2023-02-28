import React from "react";
import Card from "../../components/Card"
import "./favorite.module.scss"


function Favorite({ saveAdding, isAddedToFavorites, removeFromFavorite, saveFavorite }) {
    const [favorite, setFavorite] = React.useState(true)

    return (
        <section className="favorite">
            <div className="container">
                <div className="favorite__descr">
                    <h2>Добавлено в избранное</h2>
                </div>
                <div className="cards_wrapper">
                    {isAddedToFavorites.map((item, index) => <Card key={index} {...item} saveAdding={saveAdding} onRemove={removeFromFavorite} saveFavorite={saveFavorite} favorite={favorite} onClickFavorite={() => setFavorite(!favorite)} />)}
                </div>
            </div>
        </section>
    )
}

export default Favorite