import Image from "next/image"

const Card = (props) => {
    return (
        <a href="#" className="flex flex-col">
            <div className="relative w-full h-full min-h-[12rem] lg:min-h-[20rem] rounded-sm overflow-hidden mb-2">
                <Image src={props.image} alt="food" objectFit="cover" layout="fill" />
            </div>
            {props.name && <p className="text-lg font-semibold">{props.name}</p>}
            {props.desc && <p className="text-sm">{props.desc}</p>}
        </a>
    )
}

export default Card