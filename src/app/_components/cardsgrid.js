import Card from "./card";
import Link from "next/link";

const CardsGrid = (props) => {
    const { cards, className } = props;

    return cards ? (
        <div className={`grid grid-cols-2 gap-2 lg:gap-10 lg:grid-cols-4 ${className}`}>
            {
                cards.map((card, index) => {
                    let desc = card.description;
                    let page = "category";
                    let image = card.image;
                    if (card.price) {
                        page = "products";
                        desc = `₹${card.price}/${card.unit}`;
                        image = card.images[0];
                    }
                    return (
                        <Link key={index} href={`/${page}/${card.id}`}>
                            <Card id={card.id} image={image} name={card.name} desc={desc} />
                        </Link>
                    )
                })
            }
        </div>
    ) : "Loading"
}

export default CardsGrid