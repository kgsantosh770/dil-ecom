import { getCategory, getProducts } from '@/app/_utils/getters';
import ShopSection from '@/app/_components/shopsection'
import CardsGrid from '@/app/_components/cardsgrid'

const Category = ({params}) => {
    const category = getCategory(params.categoryid);
    const products = getProducts(category.productIds);

    return category && products ? (
        <div>
            <ShopSection
                headline={category.name}
                description={category.description}
                className="bg-primary text-white py-5 px-4"
            />
            <CardsGrid cards={products} className="px-2 py-6" />
        </div>
    ): "Loading";
}

export default Category