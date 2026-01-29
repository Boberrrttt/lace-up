import { NewArrivalsHeroSection } from "./sections/hero.section"
import { ComingSoonSection } from "./sections/coming-soon.section"
import { NewArrivalsProductGridSection } from "./sections/products.section"

function NewArrivalsPage() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <NewArrivalsHeroSection />

                {/* Featured New Products */}
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">This Week's Hottest Releases</h2>
                            <p className="text-gray-600">Limited quantities - grab them before they're gone!</p>
                        </div>
                        <NewArrivalsProductGridSection />
                    </div>
                </div>

                {/* Coming Soon */}
                <ComingSoonSection />
            </div>
        </>
    )
}

export default NewArrivalsPage
