import Card from "./card"

const CardsGrid = ({ cards, className }) => {
    return (
        <div className={`grid grid-cols-2 gap-4 lg:gap-10 lg:grid-cols-4 ${className}`}>
            {
                cards.map((card, index) => {
                    let desc = card.desc;
                    if(card.price)
                        desc = `₹${card.price}`;
                    if(card.measure)
                        desc += `/${card.measure}`;
                    return <Card key={index} image={card.image} name={card.name} desc={desc} />
                })
            }
        </div>
    )
}

export default CardsGrid