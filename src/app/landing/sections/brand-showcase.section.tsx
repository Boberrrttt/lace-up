"use client";

import { useState, useEffect } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Check, Award } from "@esmate/shadcn/pkgs/lucide-react";

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
    logo: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=200&fit=crop",
    description: "Crafted with purpose - Quality American manufacturing",
    founded: "1906",
    headquarters: "Boston, Massachusetts",
    rating: 4.6,
    products: 89,
    featured: false,
    color: "from-gray-700 to-red-600"
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

  const goToBrand = (index: number) => {
    setCurrentBrand(index);
    setIsAutoPlaying(false);
  };

  const brand = brandShowcase[currentBrand];

  return (
    <section className="py-20 bg-gray-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-yellow-500" />
            <Badge className="bg-black text-white px-4 py-2 text-sm font-semibold rounded-full">
              TRUSTED BRANDS
            </Badge>
            <Award className="h-6 w-6 text-yellow-500" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            THE WORLD'S
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500"> BEST BRANDS</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with the most iconic sportswear brands in the world. 
            Each piece is authentic, premium quality, and ready for performance.
          </p>
        </div>

        {/* Featured Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {brandShowcase.map((brand) => (
            <div key={brand.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-80`}></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-3 py-1">
                      Since {brand.founded}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">{brand.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-2">{brand.name}</h3>
                  <p className="text-white/90 text-sm line-clamp-2 mb-3">{brand.description}</p>
                </div>
              </div>
            </div>
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
