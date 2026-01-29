"use client"

import { Button } from "@esmate/shadcn/components/ui/button"
import { Badge } from "@esmate/shadcn/components/ui/badge"
import { Card, CardContent } from "@esmate/shadcn/components/ui/card"
import { ShoppingCart, Heart, Eye, Star, Sparkles } from "@esmate/shadcn/pkgs/lucide-react"

type NewArrivalProduct = {
  id: number
  name: string
  brand: string
  category: string
  price: number
  originalPrice?: number
  image: string
  badge: string
  rating: number
  reviews: number
  isNew: boolean
  releaseDate: string
}

const newArrivalProducts: NewArrivalProduct[] = [
  {
    id: 1,
    name: "Air Jordan 4 'Black Cat'",
    brand: "Jordan",
    category: "Basketball",
    price: 8995,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=600&fit=crop",
    badge: "Just Dropped",
    rating: 4.9,
    reviews: 89,
    isNew: true,
    releaseDate: "This Week"
  },
  {
    id: 2,
    name: "Yeezy Boost 350 V2 'Onyx'",
    brand: "Adidas",
    category: "Lifestyle",
    price: 12995,
    originalPrice: 14995,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    badge: "Limited Edition",
    rating: 4.8,
    reviews: 156,
    isNew: true,
    releaseDate: "Today"
  },
  {
    id: 3,
    name: "Nike Dunk Low 'Safari'",
    brand: "Nike",
    category: "Lifestyle",
    price: 7495,
    image: "https://images.unsplash.com/photo-1551698628-1ffd4cdf6aeb?w=800&h=600&fit=crop",
    badge: "New Colorway",
    rating: 4.7,
    reviews: 234,
    isNew: true,
    releaseDate: "Yesterday"
  },
  {
    id: 4,
    name: "New Balance 2002R 'Protection Pack'",
    brand: "New Balance",
    category: "Lifestyle",
    price: 8995,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    badge: "Exclusive",
    rating: 4.6,
    reviews: 178,
    isNew: true,
    releaseDate: "2 Days Ago"
  },
  {
    id: 5,
    name: "ASICS Gel-Kayano 14 'Silver'",
    brand: "ASICS",
    category: "Running",
    price: 9995,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop",
    badge: "Retro Pack",
    rating: 4.5,
    reviews: 145,
    isNew: true,
    releaseDate: "3 Days Ago"
  },
  {
    id: 6,
    name: "Puma Mostro 'Triple Black'",
    brand: "Puma",
    category: "Lifestyle",
    price: 6495,
    originalPrice: 7495,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop",
    badge: "Restock",
    rating: 4.4,
    reviews: 198,
    isNew: true,
    releaseDate: "4 Days Ago"
  },
  {
    id: 7,
    name: "Nike Air Max 1 '86 'Gatorade'",
    brand: "Nike",
    category: "Lifestyle",
    price: 10995,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
    badge: "Collaboration",
    rating: 4.9,
    reviews: 267,
    isNew: true,
    releaseDate: "5 Days Ago"
  },
  {
    id: 8,
    name: "Adidas Samba OG 'White'",
    brand: "Adidas",
    category: "Lifestyle",
    price: 4495,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop",
    badge: "Classic Reissue",
    rating: 4.3,
    reviews: 312,
    isNew: true,
    releaseDate: "1 Week Ago"
  }
]

export function NewArrivalsProductGridSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {newArrivalProducts.map((product) => (
        <Card
          key={product.id}
          className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
        >
          {/* New Arrival Ribbon */}
          <div className="absolute top-0 left-0 z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-br-lg flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              NEW
            </div>
          </div>

          <div className="relative h-80 overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-black text-white text-xs font-semibold px-3 py-1">
                {product.badge}
              </Badge>
            </div>

            {/* Release Date */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-500 text-black text-xs font-semibold px-3 py-1">
                {product.releaseDate}
              </Badge>
            </div>

            {/* Quick Actions */}
            <div className="absolute top-16 right-4 space-y-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
              <Button size="icon" className="bg-white text-black hover:bg-gray-100 h-10 w-10 rounded-full shadow-lg">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-white text-black hover:bg-gray-100 h-10 w-10 rounded-full shadow-lg">
                <Eye className="h-4 w-4" />
              </Button>
            </div>

            {/* Add to Cart Button */}
            <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
              <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 rounded-full font-semibold">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cop Now
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
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-black">₱{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₱{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <Badge className="bg-green-100 text-green-600 text-xs">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
