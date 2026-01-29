"use client";
import { Money } from "@shopify/hydrogen-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Card, CardContent } from "@esmate/shadcn/components/ui/card";
import { ShoppingCart, Heart, Eye, Star, Filter, Grid, List, ChevronLeft, ChevronRight } from "@esmate/shadcn/pkgs/lucide-react";
import { useState, useMemo } from "react";
import { getProductList } from "../../products/service";
import { useRequest } from "@esmate/react/ahooks";
import { titleize } from "@esmate/utils/string";

const ITEMS_PER_PAGE = 12;

interface Props {
  data: Awaited<ReturnType<typeof getProductList>>;
}

export function FeaturedList(props: Props) {
  const [pages, setPages] = useState([props.data]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  
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

  // Combine all products from all pages
  const allProducts = useMemo(() => {
    return pages.flatMap(({ edges }) => edges);
  }, [pages]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const products = [...allProducts];
    
    switch (sortBy) {
      case "price-low":
        return products.sort((a, b) => 
          parseFloat(a.node.priceRange.minVariantPrice.amount) - 
          parseFloat(b.node.priceRange.minVariantPrice.amount)
        );
      case "price-high":
        return products.sort((a, b) => 
          parseFloat(b.node.priceRange.minVariantPrice.amount) - 
          parseFloat(a.node.priceRange.minVariantPrice.amount)
        );
      case "title-asc":
        return products.sort((a, b) => a.node.title.localeCompare(b.node.title));
      case "title-desc":
        return products.sort((a, b) => b.node.title.localeCompare(a.node.title));
      default:
        return products;
    }
  }, [allProducts, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, sortedProducts]);

  // Calculate showing range
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
                setCurrentPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="title-asc">Title: A to Z</option>
              <option value="title-desc">Title: Z to A</option>
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
          {paginatedProducts.map(({ node }, index) => (
            <Link key={node.handle} href={`/products/${node.handle}`} className="group flex">
            <Card key={node.handle} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 py-0 w-80 gap-0">
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100">
                  <Image
                    src={node.featuredImage?.url || "/placeholder-image.jpg"}
                    alt={node.featuredImage?.altText || "Product image"}
                    height={node.featuredImage?.height as number || 1865}
                    width={node.featuredImage?.width as number || 320}
                    loading="eager"
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                  />

                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white text-xs font-semibold">
                    Featured
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
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
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
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Load More */}
        {hasNextPage && (
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              onClick={request.run}
              disabled={request.loading}
              className="min-w-50"
            >
              {request.loading && <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />}
              {request.loading ? "Loading..." : "Load More Products"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
