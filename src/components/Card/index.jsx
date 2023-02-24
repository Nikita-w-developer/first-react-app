import "./card.module.scss"

function Card(props) {
    return (
        <div className="card-item">
            <div className="img__wrapper">
                <div className="favourite-block">
                    <img className="favourite" src="/img/icons/favourite.svg" alt="favourite" />
                </div>
                <img className="sneaker" src={props.image} alt={props.descr} />
            </div>
            <p className="sneaker-title">{props.title}</p>
            <div className="descr_wrapper">
                <div className="coast">
                    <p className="text_coast">Цена:</p>
                    <p className="number_coast">{props.coast}</p>
                </div>
                <div className="plus_button">
                    <img src="/img/icons/plus.svg" alt="plus" />
                </div>
            </div>
        </div>
    )
}

export default Card