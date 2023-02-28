import "./addedCard.module.scss"
import React from "react"

function AddedCard({id, image, descr, title, coast, remove }) {
    
    return (
        <div className="added-card-item">
            <img className="sneaker" src={image} alt={descr} />
            <div className="descr_wrapper">
                <p className="sneaker-title">{title}</p>
                <p className="number_coast">{coast} руб.</p>
            </div>
            <div className="plus_button" onClick={() => remove(id)}>
                <img src="/img/icons/plus.svg" alt="plus" />
            </div>
        </div>
    )
}

export default AddedCard