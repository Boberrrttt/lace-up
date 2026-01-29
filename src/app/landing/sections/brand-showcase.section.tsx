"use client";

import { useState, useEffect } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Check } from "@esmate/shadcn/pkgs/lucide-react";

const brandShowcase = [
  {
    id: 1,
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
    description: "Just Do It - Innovation and performance for every athlete",
    founded: "1964",
    headquarters: "Beaverton, Oregon",
    rating: 4.8,
    products: 234,
    featured: true,
    color: "from-black to-gray-800"
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=200&fit=crop",
    description: "Impossible is Nothing - German engineering meets sport",
    founded: "1949",
    headquarters: "Herzogenaurach, Germany",
    rating: 4.7,
    products: 189,
    featured: true,
    color: "from-blue-600 to-black"
  },
  {
    id: 3,
    name: "Jordan",
    logo: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=200&fit=crop",
    description: "Inspired by the greatest - Legacy of excellence",
    founded: "1984",
    headquarters: "Portland, Oregon",
    rating: 4.9,
    products: 67,
    featured: true,
    color: "from-red-600 to-black"
  },
  {
    id: 4,
    name: "New Balance",
    logo: "https://images.unsplash.com/photo-1551698628-1ffd4cdf6aeb?w=300&h=200&fit=crop",
    description: "Crafted with purpose - Quality American manufacturing",
    founded: "1906",
    headquarters: "Boston, Massachusetts",
    rating: 4.6,
    products: 89,
    featured: false,
    color: "from-gray-700 to-red-600"
  },
  {
    id: 5,
    name: "Puma",
    logo: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=200&fit=crop",
    description: "Forever Faster - Speed and agility in motion",
    founded: "1948",
    headquarters: "Herzogenaurach, Germany",
    rating: 4.5,
    products: 112,
    featured: false,
    color: "from-green-600 to-black"
  },
  {
    id: 6,
    name: "ASICS",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    description: "Sound Mind, Sound Body - Japanese precision engineering",
    founded: "1949",
    headquarters: "Kobe, Japan",
    rating: 4.7,
    products: 45,
    featured: false,
    color: "from-blue-500 to-red-600"
  }
];

const allBrandLogos = [
  "Nike", "Adidas", "Jordan", "New Balance", "Puma", "ASICS", 
  "Converse", "Vans", "Reebok", "Under Armour", "Skechers", "Fila"
];

export function BrandShowcaseSection() {
  const [currentBrand, setCurrentBrand] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentBrand((prev) => (prev + 1) % brandShowcase.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextBrand = () => {
    setCurrentBrand((prev) => (prev + 1) % brandShowcase.length);
    setIsAutoPlaying(false);
  };

  const prevBrand = () => {
    setCurrentBrand((prev) => (prev - 1 + brandShowcase.length) % brandShowcase.length);
    setIsAutoPlaying(false);
  };

  const goToBrand = (index: number) => {
    setCurrentBrand(index);
    setIsAutoPlaying(false);
  };

  const brand = brandShowcase[currentBrand];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-black text-white">TRUSTED BRANDS</Badge>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
            THE WORLD'S
            <span className="text-yellow-500"> BEST BRANDS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the most iconic sportswear brands in the world. 
            Each piece is authentic, premium quality, and ready for performance.
          </p>
        </div>

        {/* Main Brand Showcase */}
        <div className="relative mb-16">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-95`}></div>
            
            {/* Brand Image */}
            <img
              src={brand.logo}
              alt={brand.name}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            
            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-white">
                    <div className="flex items-center gap-4 mb-6">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        {brand.founded}
                      </Badge>
                      {brand.featured && (
                        <Badge className="bg-yellow-500 text-black font-semibold">
                          FEATURED
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
                      {brand.name}
                    </h3>
                    
                    <p className="text-xl mb-6 text-white/90 max-w-lg">
                      {brand.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-6 mb-8">
                      <div>
                        <p className="text-sm text-white/70">Headquarters</p>
                        <p className="font-semibold">{brand.headquarters}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/70">Products Available</p>
                        <p className="font-semibold">{brand.products} Items</p>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(brand.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-white/30'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-white/90 font-semibold">{brand.rating} out of 5</span>
                    </div>
                    
                    <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                      Shop {brand.name} Collection
                    </Button>
                  </div>
                  
                  {/* Right Content - Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <div className="text-3xl font-black text-white mb-2">
                        {brand.founded}
                      </div>
                      <p className="text-white/80 text-sm">Years of Excellence</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <div className="text-3xl font-black text-white mb-2">
                        {brand.products}+
                      </div>
                      <p className="text-white/80 text-sm">Products Available</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <div className="text-3xl font-black text-white mb-2">
                        {brand.rating}
                      </div>
                      <p className="text-white/80 text-sm">Customer Rating</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                      <div className="text-3xl font-black text-white mb-2">
                        100%
                      </div>
                      <p className="text-white/80 text-sm">Authentic Guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevBrand}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextBrand}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Brand Indicators */}
        <div className="flex justify-center gap-2 mb-16">
          {brandShowcase.map((_, index) => (
            <button
              key={index}
              onClick={() => goToBrand(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentBrand 
                  ? "w-8 bg-black" 
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* All Brands Carousel */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-8">All Brands We Carry</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...allBrandLogos, ...allBrandLogos].map((brandName, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 mx-4 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300"
                >
                  <span className="font-bold text-gray-700 text-sm">{brandName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">100% Authentic</h4>
              <p className="text-gray-600 text-sm">All products are genuine and sourced directly from authorized distributors</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Premium Quality</h4>
              <p className="text-gray-600 text-sm">Every item meets our strict quality standards for performance and durability</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <ChevronRight className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-lg mb-2">Fast Shipping</h4>
              <p className="text-gray-600 text-sm">Quick delivery on all orders with tracking and insurance included</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
