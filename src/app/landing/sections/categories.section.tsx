"use client";

import { useState } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Card, CardContent } from "@esmate/shadcn/components/ui/card";
import { ArrowRight, Trophy, Zap, Footprints, Star } from "@esmate/shadcn/pkgs/lucide-react";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Basketball",
    description: "Court-ready performance for the game",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    productCount: 48,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 2,
    name: "Running",
    description: "Engineered for speed and endurance",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1551698628-1ffd4cdf6aeb?w=800&h=600&fit=crop",
    productCount: 72,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 3,
    name: "Lifestyle",
    description: "Street style meets comfort",
    icon: Footprints,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop",
    productCount: 156,
    color: "from-green-500 to-teal-600"
  },
  {
    id: 4,
    name: "Training",
    description: "Gym and workout performance",
    icon: Star,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    productCount: 34,
    color: "from-purple-500 to-pink-600"
  }
];

const brands = [
  {
    id: 1,
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
    productCount: 234,
    featured: true
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&h=200&fit=crop",
    productCount: 189,
    featured: true
  },
  {
    id: 3,
    name: "Jordan",
    logo: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=200&h=200&fit=crop",
    productCount: 67,
    featured: true
  },
  {
    id: 4,
    name: "New Balance",
    logo: "https://images.unsplash.com/photo-1551698628-1ffd4cdf6aeb?w=200&h=200&fit=crop",
    productCount: 89,
    featured: false
  },
  {
    id: 5,
    name: "Puma",
    logo: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop",
    productCount: 112,
    featured: false
  },
  {
    id: 6,
    name: "ASICS",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
    productCount: 45,
    featured: false
  },
];

export function CategoriesSection() {
  const [activeTab, setActiveTab] = useState<"categories" | "brands">("categories");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-black text-white">SHOP BY</Badge>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
            FIND YOUR
            <span className="text-yellow-500"> PERFECT FIT</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our curated collections by category or discover your favorite brands. 
            The perfect pair is waiting for you.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => setActiveTab("categories")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === "categories"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => setActiveTab("brands")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === "brands"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Brands
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        {activeTab === "categories" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} href={`/products?category=${category.name.toLowerCase()}`}>
                  <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`}></div>
                      
                      {/* Image */}
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover mix-blend-overlay"
                      />
                      
                      {/* Icon */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Product Count */}
                      <div className="absolute top-6 right-6">
                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                          {category.productCount} items
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <h3 className="text-2xl font-black text-white mb-2">{category.name}</h3>
                        <p className="text-white/80 text-sm">{category.description}</p>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-white text-black hover:bg-gray-100 rounded-full font-semibold">
                          Shop Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}

        {/* Brands Grid */}
        {activeTab === "brands" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <Link key={brand.id} href={`/products?brand=${brand.name.toLowerCase()}`}>
                <Card className="group cursor-pointer overflow-hidden border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-100">
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {brand.featured && (
                          <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-semibold">
                            HOT
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">{brand.name}</h3>
                      <p className="text-sm text-gray-500">{brand.productCount} items</p>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-2 px-3 text-xs">
                        View Collection
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
