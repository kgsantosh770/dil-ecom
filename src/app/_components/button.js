const Button = (props) => {
    const filledVariantStyle = 'text-white bg-primary';
    const btnStyle = "px-10 py-4 border-2 border-primary rounded-full lg:hover:scale-105 transition-all ease-in-out";
    return (
        <button
            className={`${btnStyle} ${props.variant !== 'outline' ? filledVariantStyle : ''} ${props.className}`}
            onClick={props.handleClick}
        >
            {props.text}
        </button>
    )
}

export default Button