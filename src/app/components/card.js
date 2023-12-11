import Image from "next/image";

const Card = (props) => {      
    return (
        <div className="flex flex-col border p-4 shadow-lg">
            <div className="relative w-full h-full min-h-[12rem] lg:min-h-[20rem] rounded-sm overflow-hidden mb-2">
                <Image src={props.image} alt="food" fill />
            </div>
            {props.name && <p className="text-lg font-semibold">{props.name}</p>}
            {props.desc && <p className="text-sm">{props.desc}</p>}
        </div>
    )
}

export default Card