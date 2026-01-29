export function SaleTimerSection() {
    return (
        <div className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-2xl font-bold mb-6">Sale Ends In:</h3>
                <div className="flex justify-center gap-4 md:gap-8">
                    <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 mb-2">
                            <div className="text-3xl font-bold">02</div>
                        </div>
                        <div className="text-sm text-gray-400">Days</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 mb-2">
                            <div className="text-3xl font-bold">14</div>
                        </div>
                        <div className="text-sm text-gray-400">Hours</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 mb-2">
                            <div className="text-3xl font-bold">38</div>
                        </div>
                        <div className="text-sm text-gray-400">Minutes</div>
                    </div>
                    <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 mb-2">
                            <div className="text-3xl font-bold">42</div>
                        </div>
                        <div className="text-sm text-gray-400">Seconds</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
