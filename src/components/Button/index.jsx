import "./button.module.scss"

function Button(props) {
    return (
        <button onClick={props.onBack} className={props.className}>{props.text}</button>
    )
}

export default Button