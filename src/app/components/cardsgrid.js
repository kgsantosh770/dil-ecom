import Card from "./card"

const CardsGrid = ({ categories }) => {
    return (
        <div className='grid grid-cols-2 gap-4 lg:gap-10 lg:grid-cols-4'>
            {
                categories.map((category, index) => (
                    <Card key={index} image={category.image} title={category.name} subtitle={category.desc} />
                ))
            }
        </div>
    )
}

export default CardsGrid