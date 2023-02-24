import "./header.module.scss"

function Header() {
    return (
        <header className="header">
            <div className="left-part">
                <a href="/home"><img src="/img/icons/logo.svg" alt="logo" /></a>
                <div className="descr">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="right-part">
                <li>
                    <img src="/img/icons/cart.svg" alt="cart" />
                    <span className="balance">1205 руб.</span>
                </li>
                <li>
                    <img src="/img/icons/favourite.svg" alt="favourite" />
                </li>
                <li>
                    <img src="/img/icons/Union.svg" alt="profile" />
                </li>
            </ul>
        </header>
    )
}

export default Header