"use client";
import { Money } from "@shopify/hydrogen-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Card, CardContent } from "@esmate/shadcn/components/ui/card";
import { Loader2, ShoppingCart, Heart, Eye, Star } from "@esmate/shadcn/pkgs/lucide-react";
import { useState } from "react";
import { getProductList } from "./service";
import { useRequest } from "@esmate/react/ahooks";
import { titleize } from "@esmate/utils/string";

interface Props {
  data: Awaited<ReturnType<typeof getProductList>>;
}

export function ProductList(props: Props) {
  const [pages, setPages] = useState([props.data]);
  const lastPage = pages[pages.length - 1];
  const lastCursor = lastPage.edges[lastPage.edges.length - 1]?.cursor;
  const hasNextPage = lastPage.pageInfo.hasNextPage;

  const request = useRequest(
    async () => {
      setPages([...pages, await getProductList(lastCursor)]);
    },
    {
      manual: true,
    },
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="sr-only">Products</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {pages
            .flatMap(({ edges }) => edges)
            .map(({ node }) => (
              <Card key={node.handle} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <Link href={`/products/${node.handle}`}>
                    <Image
                      src={node.featuredImage?.url || "/placeholder-image.jpg"}
                      alt={node.featuredImage?.altText || "Product image"}
                      height={320}
                      width={320}
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </Link>

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black text-white text-xs font-semibold">
                      New
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

                {/* Content */}
                <CardContent className="p-6">
                  {/* Brand & Category */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500">KICKS</span>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      Sneakers
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-semibold mb-2 text-lg">
                    <Link href={`/products/${node.handle}`} className="hover:text-gray-700 transition">
                      {titleize(node.title)}
                    </Link>
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500">4.5 (128)</span>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <Money className="text-lg font-bold" data={node.priceRange.minVariantPrice} />
                    <Badge className="bg-red-100 text-red-600 text-xs">
                      20% OFF
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
        
        {hasNextPage && (
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              variant={request.error ? "destructive" : "default"}
              onClick={request.run}
              disabled={request.loading}
              className="min-w-50"
            >
              {request.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {request.loading ? "Loading..." : request.error ? "Try Again" : "Load More Products"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
