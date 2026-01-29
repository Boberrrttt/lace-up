export function ComingSoonSection() {
    return (
        <div className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
                    <p className="text-gray-400">Get notified when these drop</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-600">Product Image</span>
                        </div>
                        <h3 className="font-bold mb-2">Air Jordan 4 "Black Cat"</h3>
                        <p className="text-gray-400 text-sm mb-4">Dropping Next Week</p>
                        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold text-sm">
                            Notify Me
                        </button>
                    </div>
                    <div className="text-center">
                        <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-600">Product Image</span>
                        </div>
                        <h3 className="font-bold mb-2">Yeezy Boost 350 V2</h3>
                        <p className="text-gray-400 text-sm mb-4">Dropping in 2 Weeks</p>
                        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold text-sm">
                            Notify Me
                        </button>
                    </div>
                    <div className="text-center">
                        <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-600">Product Image</span>
                        </div>
                        <h3 className="font-bold mb-2">Nike Dunk Low "Safari"</h3>
                        <p className="text-gray-400 text-sm mb-4">Dropping This Month</p>
                        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold text-sm">
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
