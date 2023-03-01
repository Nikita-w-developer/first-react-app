import "./card.module.scss"
import React from "react"

function Card({ saveAdding, image, descr, title, coast, saveFavorite, onClickFavorite, preFavorite, removeFromFavorite }) {
    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavourite, setIsFavourite] = React.useState(false)


    const onClickAdd = () => {
            saveAdding({ image, descr, title, coast })
            setIsAdded(!isAdded)
    }
    const onFavourite = () => {
        if ( isFavourite || preFavorite ) {
            onClickFavorite()
            removeFromFavorite({ image, descr, title, coast })
            setIsFavourite(false)
        } else {
            saveFavorite({ image, descr, title, coast })
            setIsFavourite(!isFavourite)        
        }
    }
    return (
        <div className="card-item">
            <div className="img__wrapper">
                <div className="favourite-block">
                    <img onClick={onFavourite} className="favourite" src={isFavourite || preFavorite ? "/img/icons/favourite_fill.svg" : "/img/icons/favourite.svg"} alt="favourite" />
                </div>
                <img className="sneaker" src={image} alt={descr} />
            </div>
            <p className="sneaker-title">{title}</p>
            <div className="descr_wrapper">
                <div className="coast">
                    <p className="text_coast">Цена:</p>
                    <p className="number_coast">{coast} руб.</p>
                </div>
                <img onClick={onClickAdd} src={(isAdded) ? "/img/icons/sucsess.svg" : "/img/icons/plus.svg"} alt={isAdded ? "sucsess" : "plus"} />
            </div>
        </div>
    )
}

export default Card