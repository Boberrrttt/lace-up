import { ShopHeroSection } from "./sections/hero.section"
import { ProductGridSection } from "../product-grid.section"
import { FeaturedSection } from "../landing/sections/featured.section"

function ShopPage() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <ShopHeroSection />

                {/* Products Grid */}
                <ProductGridSection />
                
                {/* Featured Products */}
                {/* <FeaturedSection /> */}
            </div>
        </>
    )
}

export default ShopPage
