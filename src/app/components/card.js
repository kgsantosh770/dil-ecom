import Image from "next/image"

const Card = (props) => {
    return (
        <div className="flex flex-col">
            <div className="relative w-full h-full min-h-[12rem] lg:min-h-[20rem] rounded-sm overflow-hidden mb-2">
                <Image src={props.image} alt="food" objectFit="cover" layout="fill" />
            </div>
            {props.title && <p className="text-lg font-semibold">{props.title}</p>}
            {props.subtitle && <p className="text-sm">{props.subtitle}</p>}
        </div>
    )
}

export default Card