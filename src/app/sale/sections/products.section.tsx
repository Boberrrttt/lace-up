"use client"

import { Button } from "@esmate/shadcn/components/ui/button"
import { Badge } from "@esmate/shadcn/components/ui/badge"
import { Card, CardContent } from "@esmate/shadcn/components/ui/card"
import { ShoppingCart, Heart, Eye, Star } from "@esmate/shadcn/pkgs/lucide-react"

type SaleProduct = {
  id: number
  name: string
  image: string
  originalPrice: number
  discountPercent: number
  brand: string
  category: string
  rating: number
  reviews: number
}

const saleProducts: SaleProduct[] = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=600&fit=crop",
    originalPrice: 6995,
    discountPercent: 40,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Adidas Ultraboost Light",
    brand: "Adidas",
    category: "Running",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=600&fit=crop",
    originalPrice: 9995,
    discountPercent: 35,
    rating: 4.8,
    reviews: 256
  },
  {
    id: 3,
    name: "Puma RS-X Reinvention",
    brand: "Puma",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop",
    originalPrice: 7995,
    discountPercent: 50,
    rating: 4.3,
    reviews: 198
  },
  {
    id: 4,
    name: "New Balance 550",
    brand: "New Balance",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    originalPrice: 8495,
    discountPercent: 30,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 5,
    name: "Reebok Nano X3",
    brand: "Reebok",
    category: "Training",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&h=600&fit=crop",
    originalPrice: 8995,
    discountPercent: 45,
    rating: 4.4,
    reviews: 143
  },
  {
    id: 6,
    name: "Vans Old Skool Classic",
    brand: "Vans",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=600&fit=crop",
    originalPrice: 4995,
    discountPercent: 25,
    rating: 4.2,
    reviews: 289
  },
  {
    id: 7,
    name: "Under Armour HOVR Phantom",
    brand: "Under Armour",
    category: "Running",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=600&fit=crop",
    originalPrice: 7495,
    discountPercent: 40,
    rating: 4.5,
    reviews: 178
  },
  {
    id: 8,
    name: "Nike Metcon 9",
    brand: "Nike",
    category: "Training",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c6ee3f3?w=800&h=600&fit=crop",
    originalPrice: 8995,
    discountPercent: 35,
    rating: 4.7,
    reviews: 156
  },
]

// ✅ REAL discount math
const getSalePrice = (price: number, discount: number) =>
  Math.round(price - price * (discount / 100))

export function SaleProductGridSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {saleProducts.map((product) => {
        const salePrice = getSalePrice(
          product.originalPrice,
          product.discountPercent
        )
        const savings = product.originalPrice - salePrice

        return (
          <Card
            key={product.id}
            className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-80 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Discount Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-600 text-white text-xs font-semibold px-3 py-1 animate-pulse">
                  -{product.discountPercent}%
                </Badge>
              </div>

              {/* Quick Actions */}
              <div className="absolute top-4 right-4 space-y-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
                <Button size="icon" className="bg-white text-black hover:bg-gray-100 h-10 w-10 rounded-full shadow-lg">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="icon" className="bg-white text-black hover:bg-gray-100 h-10 w-10 rounded-full shadow-lg">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>

              {/* Add to Cart Button */}
              <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full font-semibold">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Quick Add
                </Button>
              </div>
            </div>

            <CardContent className="p-6">
              {/* Brand & Category */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">{product.brand}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-600">₱{salePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">
                      ₱{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-green-600">
                      Save ₱{savings.toLocaleString()}
                    </span>
                  </div>
                </div>
                <Badge className="bg-red-100 text-red-600 text-xs">
                  {product.discountPercent}% OFF
                </Badge>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
