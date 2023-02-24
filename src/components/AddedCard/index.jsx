import "./addedCard.module.scss"

function AddedCard(props) {
    return (
        <div className="added-card-item">
            <img className="sneaker" src={props.image} alt={props.descr} />
            <div className="descr_wrapper">
                <p className="sneaker-title">{props.title}</p>
                <p className="number_coast">{props.coast}</p>
            </div>
            <div className="plus_button">
                <img src="/img/icons/plus.svg" alt="plus" />
            </div>
        </div>
    )
}

export default AddedCard