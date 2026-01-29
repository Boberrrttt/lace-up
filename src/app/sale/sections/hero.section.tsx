"use client"

import { useEffect, useState } from "react"

function getTimeRemaining(endTime: number) {
    const total = endTime - Date.now()

    if (total <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))

    return { days, hours, minutes, seconds }
}

export function SaleHeroSection() {
    // 👉 set your sale end date here
    const SALE_END = new Date("2026-02-01T23:59:59").getTime()

    const [timeLeft, setTimeLeft] = useState(() =>
        getTimeRemaining(SALE_END)
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining(SALE_END))
        }, 1000)

        return () => clearInterval(interval)
    }, [SALE_END])

    return (
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

                    {/* Left Side */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-yellow-500 text-black rounded-full px-4 py-2 mb-4">
                            <span className="text-sm font-bold animate-pulse">
                                FINAL HOURS
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-3">
                            MEGA <span className="text-yellow-400">SALE</span>
                        </h1>

                        <p className="text-lg text-white/90 mb-6">
                            Up to 70% off - Limited stock available!
                        </p>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold">70%</div>
                                <div className="text-xs">MAX OFF</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold">500+</div>
                                <div className="text-xs">ITEMS</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Timer */}
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center min-w-[280px]">
                        <h3 className="text-lg font-bold mb-4">SALE ENDS IN:</h3>

                        <div className="grid grid-cols-4 gap-2">
                            {[
                                { label: "Days", value: timeLeft.days },
                                { label: "Hours", value: timeLeft.hours },
                                { label: "Mins", value: timeLeft.minutes },
                                { label: "Secs", value: timeLeft.seconds },
                            ].map((item) => (
                                <div key={item.label} className="text-center">
                                    <div className="bg-white/10 rounded-lg px-2 py-3 mb-1">
                                        <div className="text-2xl font-bold">
                                            {String(item.value).padStart(2, "0")}
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-300">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-bold py-3 rounded-lg mt-4 transition-colors">
                            SHOP NOW - DON'T WAIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
