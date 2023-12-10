import React from 'react'
import ShopSection from '../components/shopsection'
import CardsGrid from '../components/cardsgrid'

const ListingPage = ({ category }) => {
    return (
        <div>
            <ShopSection
                headline={category.name}
                description={category.desc}
                className="bg-primary text-white py-5"
            />
            <CardsGrid cards={category.products} className="px-4 py-8"/>
        </div>
    )
}

export default ListingPage