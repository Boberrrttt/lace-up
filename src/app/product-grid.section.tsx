"use client";

import { useState, useMemo } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Card, CardContent } from "@esmate/shadcn/components/ui/card";
import {
  ShoppingCart,
  Heart,
  Eye,
  Star,
  Filter,
  Grid,
  List,
  ChevronLeft,
  ChevronRight
} from "@esmate/shadcn/pkgs/lucide-react";
import { AddToCartButton } from "@/components/AddToCartButton";

const ITEMS_PER_PAGE = 12;

const allProducts = [
  {
    id: 1,
    name: "Air Max 270 React",
    brand: "Nike",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
    badge: "New Arrival",
    rating: 4.5,
    reviews: 128,
    category: "Lifestyle",
    isNew: true,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567890" // Replace with actual Shopify variant ID
  },
  {
    id: 2,
    name: "Ultra Boost 22",
    brand: "Adidas",
    price: 190,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 256,
    category: "Running",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567891"
  },
  {
    id: 3,
    name: "Jordan 1 Retro High",
    brand: "Jordan",
    price: 170,
    originalPrice: 200,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=600&fit=crop",
    badge: "Limited",
    rating: 4.9,
    reviews: 89,
    category: "Basketball",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567892"
  },
  {
    id: 4,
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 60,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop",
    badge: "Classic",
    rating: 4.3,
    reviews: 342,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567893"
  },
  {
    id: 5,
    name: "Zoom Pegasus 39",
    brand: "Nike",
    price: 130,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1551698628-1ffd4cdf6aeb?w=800&h=600&fit=crop",
    badge: "Sale",
    rating: 4.6,
    reviews: 178,
    category: "Running",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567894"
  },
  {
    id: 6,
    name: "Stan Smith",
    brand: "Adidas",
    price: 85,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
    badge: "Trending",
    rating: 4.4,
    reviews: 267,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567895"
  },
  {
    id: 7,
    name: "LeBron 20",
    brand: "Nike",
    price: 200,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    badge: "New",
    rating: 4.7,
    reviews: 94,
    category: "Basketball",
    isNew: true,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567896"
  },
  {
    id: 8,
    name: "Gel-Kayano 29",
    brand: "ASICS",
    price: 160,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop",
    badge: "Performance",
    rating: 4.6,
    reviews: 156,
    category: "Running",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567897"
  },
  {
    id: 9,
    name: "Metcon 9",
    brand: "Nike",
    price: 140,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1528701800489-20be3c6ee3f3?w=800&h=600&fit=crop",
    badge: "Training",
    rating: 4.5,
    reviews: 112,
    category: "Training",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567898"
  },
  {
    id: 10,
    name: "Forum Low",
    brand: "Adidas",
    price: 110,
    originalPrice: 130,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=600&fit=crop",
    badge: "Sale",
    rating: 4.4,
    reviews: 198,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567899"
  },
  {
    id: 11,
    name: "KD 15",
    brand: "Nike",
    price: 160,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    badge: "Performance",
    rating: 4.7,
    reviews: 143,
    category: "Basketball",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567900"
  },
  {
    id: 12,
    name: "Puma RS-X",
    brand: "Puma",
    price: 120,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=600&fit=crop",
    badge: "Trending",
    rating: 4.3,
    reviews: 221,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567901"
  },
  {
    id: 13,
    name: "Air Force 1 '07",
    brand: "Nike",
    price: 90,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
    badge: "Classic",
    rating: 4.6,
    reviews: 445,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567902"
  },
  {
    id: 14,
    name: "Ultra Boost 21",
    brand: "Adidas",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=600&fit=crop",
    badge: "Sale",
    rating: 4.7,
    reviews: 189,
    category: "Running",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567903"
  },
  {
    id: 15,
    name: "Jordan 1 Mid",
    brand: "Jordan",
    price: 125,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
    badge: "Popular",
    rating: 4.5,
    reviews: 234,
    category: "Basketball",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567904"
  },
  {
    id: 16,
    name: "Old Skool",
    brand: "Vans",
    price: 65,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586962837275-6c91623635a8?w=800&h=600&fit=crop",
    badge: "Classic",
    rating: 4.2,
    reviews: 367,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567905"
  },
  {
    id: 17,
    name: "Nano X3",
    brand: "Reebok",
    price: 130,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&h=600&fit=crop",
    badge: "Training",
    rating: 4.4,
    reviews: 156,
    category: "Training",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567906"
  },
  {
    id: 18,
    name: "Court Vision Low",
    brand: "Adidas",
    price: 75,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1515955656952-102f267ad9d8?w=800&h=600&fit=crop",
    badge: "Casual",
    rating: 4.1,
    reviews: 289,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567907"
  },
  {
    id: 19,
    name: "Kyrie 8",
    brand: "Nike",
    price: 130,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    badge: "Basketball",
    rating: 4.6,
    reviews: 178,
    category: "Basketball",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567908"
  },
  {
    id: 20,
    name: "Fresh Foam 1080v12",
    brand: "New Balance",
    price: 150,
    originalPrice: 170,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    badge: "Running",
    rating: 4.8,
    reviews: 234,
    category: "Running",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567909"
  },
  {
    id: 21,
    name: "Chuck 70",
    brand: "Converse",
    price: 75,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop",
    badge: "Premium",
    rating: 4.4,
    reviews: 298,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567910"
  },
  {
    id: 22,
    name: "ZoomX Invincible Run",
    brand: "Nike",
    price: 180,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1551698628-1ffd4cdf6aeb?w=800&h=600&fit=crop",
    badge: "Running",
    rating: 4.7,
    reviews: 145,
    category: "Running",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567911"
  },
  {
    id: 23,
    name: "Sk8-Hi",
    brand: "Vans",
    price: 70,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586962836570-cd9279b5f5a1?w=800&h=600&fit=crop",
    badge: "Skate",
    rating: 4.3,
    reviews: 267,
    category: "Lifestyle",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567912"
  },
  {
    id: 24,
    name: "Duramo 10",
    brand: "Adidas",
    price: 65,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
    badge: "Running",
    rating: 4.2,
    reviews: 189,
    category: "Running",
    isNew: false,
    merchandiseId: "gid://shopify/ProductVariant/12345678901234567913"
  }
];

export function ProductGridSection() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  /* 🔹 Sort products */
  const sortedProducts = useMemo(() => {
    const products = [...allProducts];

    switch (sortBy) {
      case "price-low":
        return products.sort((a, b) => a.price - b.price);
      case "price-high":
        return products.sort((a, b) => b.price - a.price);
      case "rating":
        return products.sort((a, b) => b.rating - a.rating);
      case "newest":
        return products.sort((a, b) => Number(b.isNew) - Number(a.isNew));
      default:
        return products;
    }
  }, [sortBy]);

  /* 🔹 Pagination calculations */
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, sortedProducts]);

  /* 🔹 Calculate showing range */
  const showingStart = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const showingEnd = Math.min(currentPage * ITEMS_PER_PAGE, sortedProducts.length);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>

            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1); // reset page on sort
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-1 rounded ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-sm">
              Showing <strong>{showingStart}-{showingEnd}</strong> of{" "}
              <strong>{sortedProducts.length}</strong> products
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`grid gap-8 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {paginatedProducts.map((product) => (
            <Card
              key={product.id}
              className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${
                  viewMode === "list" ? "w-48 h-48" : "h-80"
                } overflow-hidden bg-gray-100`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4">
                  <Badge className="bg-black text-white text-xs font-semibold px-3 py-1">
                    {product.badge}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition">
                  <Button size="icon" className="bg-white text-black hover:bg-gray-100 h-10 w-10 rounded-full shadow-lg">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="bg-white text-black hover:bg-gray-100 h-10 w-10 rounded-full shadow-lg">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <AddToCartButton 
                    merchandiseId={product.merchandiseId}
                    className="bg-black text-white hover:bg-gray-800 rounded-full font-semibold"
                  >
                    Quick Add
                  </AddToCartButton>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 flex-1">
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
                    <span className="text-2xl font-bold text-black">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <Badge className="bg-red-100 text-red-600 text-xs">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
