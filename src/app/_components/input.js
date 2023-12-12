const Input = (props) => {
    return props.type == "dropdown" ?
        (
            <select className={`border border-black px-2 py-3 ${props.className} ${props.value === '' ? 'text-grey' : ''}`}>
                {
                    props.options.map((option) => (
                        <option className="text-black" value={option}>{option}</option>
                    ))
                }
            </select>
        ) :
        (
            <div className={props.className}>
                {props.label && <label>{props.label}</label>}
                <input
                    value={props.value}
                    className="border px-2 py-3 w-full"
                    type={props.type}
                    placeholder={props.placeholder}
                    maxLength={props.maxLength ?? ''}
                />
            </div >

        )
}

export default Input