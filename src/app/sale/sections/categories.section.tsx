export function SaleCategoriesSection() {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Shop by Discount</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-6 border-2 border-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer">
                        <div className="text-4xl font-bold text-red-600 mb-2">70% OFF</div>
                        <p className="text-gray-600">Clearance Items</p>
                    </div>
                    <div className="text-center p-6 border-2 border-orange-600 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
                        <div className="text-4xl font-bold text-orange-600 mb-2">50% OFF</div>
                        <p className="text-gray-600">Last Season</p>
                    </div>
                    <div className="text-center p-6 border-2 border-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors cursor-pointer">
                        <div className="text-4xl font-bold text-yellow-600 mb-2">30% OFF</div>
                        <p className="text-gray-600">Selected Styles</p>
                    </div>
                    <div className="text-center p-6 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                        <div className="text-4xl font-bold text-green-600 mb-2">20% OFF</div>
                        <p className="text-gray-600">Member Exclusive</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
