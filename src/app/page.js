import { getBannerImages, getCategories } from "./_utils/getters";
import ShopSection from "./_components/shopsection";
import CardsGrid from "./_components/cardsgrid";

export default function Home() {
  const bannerImages = getBannerImages();
  const categories = getCategories();
  return (
    <main>
      <div className="bg-lightgrey px-2 lg:px-12 pb-8">
        <ShopSection
          className="pt-12"
          headline="Good food Good Life"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
          images={bannerImages}
        />
        <ShopSection
          className="mt-16 lg:mt-20"
          headline="Categories"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
        />
        <CardsGrid cards={categories} />
      </div>
    </main>
  )
}
