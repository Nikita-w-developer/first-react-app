import "./header.module.scss"
import React from "react"
import { Link } from "react-router-dom"

function Header(props) {
    

    return (
        <header className="header">
            <Link to={"/"}>
                <div className="left-part">
                    <img src="/img/icons/logo.svg" alt="logo" />
                    <div className="descr">
                        <h3>REACT SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="right-part">
                <li onClick={props.onCartOpen} >
                    <img src="/img/icons/cart.svg" alt="cart" />
                    <span className="balance">1205 руб.</span>
                </li>
                <Link to={"/favorites"}>
                    <li>
                        <img src="/img/icons/favourite.svg" alt="favourite" />
                    </li>
                </Link>
                <li>
                    <img src="/img/icons/Union.svg" alt="profile" />
                </li>
            </ul>
        </header>
    )
}

export default Header