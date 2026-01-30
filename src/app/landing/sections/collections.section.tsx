"use client";

import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { ArrowRight, Loader2, TrendingUp, Sparkles } from "@esmate/shadcn/pkgs/lucide-react";
import Link from "next/link";
import { getCollections } from "../service";
import { useRequest } from "@esmate/react/ahooks";


export function CollectionsSection() {
  const request = useRequest(getCollections, {
    manual: false,
  });

  const collections = request.data?.edges || [];

  return (
    <section className="py-24 bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 70px)`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-yellow-400" />  
            <Badge className="bg-black text-white px-4 py-2 text-sm font-semibold rounded-full">
              CURATED COLLECTIONS
            </Badge>
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            FIND YOUR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500"> PERFECT FIT</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked collections designed for every style and performance need. 
            From court dominance to street style elegance, find the perfect pair that matches your vibe.
          </p>
        </div>

        {/* Loading State */}
        {request.loading && (
          <div className="flex justify-center items-center py-32">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-black" />
              <span className="text-xl font-medium text-gray-700">Loading amazing collections...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {request.error && (
          <div className="text-center py-32">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-red-600 mb-4 text-lg font-medium">Failed to load collections</p>
              <Button onClick={request.run} variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                Try Again
              </Button>
            </div>
          </div>
        )}

        {/* Collections Grid */}
        {!request.loading && !request.error && collections.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-0 justify-items-center">
            {collections.map(({ node }) => {
              return (
                <Link 
                  key={node.id} 
                  href={`/products?collection=${node.handle}`}
                  className="group block w-full h-96 lg:h-screen max-h-screen relative overflow-hidden transition-all duration-500"
                >
                  {/* Background Image */}
                  {node.image && (
                    <div className="absolute inset-0">
                      <img
                        src={node.image.url}
                        alt={node.image.altText || node.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/40"></div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent opacity-60"></div>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">

                    {/* Bottom Section */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
                          {node.title}
                        </h3>
                        {node.description && (
                          <p className="text-white/90 text-lg line-clamp-2 leading-relaxed max-w-md">
                            {node.description}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/80">
                          <TrendingUp className="h-4 w-4" />
                          <span className="text-sm font-medium">Trending Now</span>
                        </div>
                        <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3 font-semibold shadow-lg transition-all duration-300">
                          Explore Collection
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
