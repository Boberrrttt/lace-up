import { SaleHeroSection } from "./sections/hero.section"
import { SaleCategoriesSection } from "./sections/categories.section"
import { SaleProductGridSection } from "./sections/products.section"

function SalePage() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Sale Header with Timer */}
                <SaleHeroSection />

                {/* Sale Categories */}
                <SaleCategoriesSection />

                {/* Sale Products */}
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Hot Deals</h2>
                            <p className="text-gray-600">These won't last long - grab them while you can!</p>
                        </div>
                        <SaleProductGridSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalePage
