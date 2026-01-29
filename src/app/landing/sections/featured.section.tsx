"use client";

import { useState, useEffect } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Card, CardContent } from "@esmate/shadcn/components/ui/card";
import { ShoppingCart, Heart, Star, Eye, Loader2 } from "@esmate/shadcn/pkgs/lucide-react";
import { Money } from "@shopify/hydrogen-react";
import Link from "next/link";
import { getProductList } from "@/app/products/service";
import { useRequest } from "@esmate/react/ahooks";
import { titleize } from "@esmate/utils/string";

interface Props {
  limit?: number;
}

export function FeaturedSection({ limit = 8 }: Props) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const request = useRequest(
    async () => {
      const data = await getProductList();
      // Return only the first 'limit' products
      return {
        ...data,
        edges: data.edges.slice(0, limit)
      };
    },
    {
      manual: false, // Auto-run on mount
    },
  );

  const featuredProducts = request.data?.edges || [];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-black text-white">FEATURED KICKS</Badge>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
            STEP UP YOUR
            <span className="text-yellow-500"> GAME</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium sneakers. From performance athletes to street style icons, 
            find the perfect pair that matches your vibe.
          </p>
        </div>

        {/* Loading State */}
        {request.loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin mr-3" />
            <span className="text-lg">Loading featured products...</span>
          </div>
        )}

        {/* Error State */}
        {request.error && (
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">Failed to load products</p>
            <Button onClick={request.run} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        {/* Product Grid */}
        {!request.loading && !request.error && featuredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(({ node }) => (
              <Card 
                key={node.handle} 
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredProduct(node.handle)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative">
                  {/* Product Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <Link href={`/products/${node.handle}`}>
                      <img
                        src={node.featuredImage?.url || "/placeholder-image.jpg"}
                        alt={node.featuredImage?.altText || node.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </Link>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-black text-white text-xs font-semibold px-3 py-1">
                        New
                      </Badge>
                    </div>

                    {/* Quick Actions */}
                    <div className={`absolute top-4 right-4 space-y-2 transition-all duration-300 ${
                      hoveredProduct === node.handle ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}>
                      <Button size="icon" className="bg-white text-black hover:bg-gray-100 h-10 w-10 rounded-full shadow-lg">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="icon" className="bg-white text-black hover:bg-gray-100 h-10 w-10 rounded-full shadow-lg">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Add to Cart Button */}
                    <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                      hoveredProduct === node.handle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <Button 
                        className="w-full bg-black text-white hover:bg-gray-800 rounded-full font-semibold"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // TODO: Implement add to cart when variant IDs are available
                          console.log("Add to cart clicked for:", node.title);
                        }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Quick Add
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Brand & Category */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-500">KICKS</span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                        Sneakers
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                      <Link href={`/products/${node.handle}`} className="hover:text-gray-700 transition">
                        {titleize(node.title)}
                      </Link>
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        4.5 (128)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <Money className="text-2xl font-bold text-black" data={node.priceRange.minVariantPrice} />
                      <Badge className="bg-red-100 text-red-600 text-xs">
                        20% OFF
                      </Badge>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/products">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12 py-6 rounded-full font-semibold text-lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
