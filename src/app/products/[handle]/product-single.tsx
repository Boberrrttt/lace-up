"use client";

import { AddToCartButton, ProductPrice, ProductProvider } from "@shopify/hydrogen-react";
import { useVariantSelector } from "@/hooks/use-variant-selector";
import { getProductSingle } from "./service";
import Image from "next/image";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Card, CardContent } from "@esmate/shadcn/components/ui/card";
import { Separator } from "@esmate/shadcn/components/ui/separator";
import { Heart, Star, Truck, Shield, RotateCcw, ShoppingCart } from "@esmate/shadcn/pkgs/lucide-react";
import { useState } from "react";

interface Props {
  data: Awaited<ReturnType<typeof getProductSingle>>;
}

export function ProductSingle(props: Props) {
  const { variantId, options, selectOption } = useVariantSelector(props.data);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const currentImage = props.data.images.nodes[selectedImageIndex];

  return (
    <ProductProvider data={props.data}>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square">
                <Image
                  src={currentImage.url}
                  alt={currentImage.altText || ""}
                  width={currentImage.width as number}
                  height={currentImage.height as number}
                  className="h-full w-full object-contain object-center transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`h-12 w-12 rounded-full shadow-lg transition-colors ${
                      isWishlisted 
                        ? "bg-red-500 text-white hover:bg-red-600" 
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                  </Button>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black text-white text-sm font-semibold px-3 py-1">
                    New Arrival
                  </Badge>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {props.data.images.nodes.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {props.data.images.nodes.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative overflow-hidden rounded-lg border-2 transition-all flex-shrink-0 ${
                        selectedImageIndex === index 
                          ? "border-black scale-105" 
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Image
                        src={image.url}
                        alt={image.altText || ""}
                        width={80}
                        height={80}
                        className="h-20 w-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge className="bg-gray-100 text-gray-700 text-sm w-fit">
                      Sneakers
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                      {props.data.title}
                    </h1>
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="h-12 w-12 rounded-full"
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
                  </Button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.5 (128 reviews)</span>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {props.data.description}
                </p>
              </div>

              <Separator />

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold">
                  <ProductPrice data={props.data} />
                </span>
                <Badge className="bg-red-100 text-red-600 text-sm px-3 py-1">
                  20% OFF
                </Badge>
              </div>

              {/* Product Options */}
              {options.length > 0 && (
                <div className="space-y-6">
                  {options.map(({ name, values }) => (
                    <div key={name} className="space-y-3">
                      <h3 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
                        {name}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {values.map(({ value, selected, disabled }) => (
                          <Button
                            key={value}
                            variant={selected ? "default" : "outline"}
                            size="lg"
                            disabled={disabled}
                            onClick={() => selectOption(name, value)}
                            className={`min-w-[80px] font-semibold transition-all ${
                              selected 
                                ? "bg-black text-white hover:bg-gray-800 scale-105" 
                                : "border-gray-300 hover:border-black hover:bg-gray-50"
                            }`}
                          >
                            {value}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <Separator />

              {/* Add to Cart Section */}
              <div className="space-y-4">
                <AddToCartButton
                  variantId={variantId}
                  disabled={!variantId}
                  className="w-full h-14 bg-black text-white hover:bg-gray-800 text-lg font-semibold rounded-full transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </AddToCartButton>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Truck className="h-5 w-5 text-gray-400" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <RotateCcw className="h-5 w-5 text-gray-400" />
                    <span>30-Day Returns</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Shield className="h-5 w-5 text-gray-400" />
                    <span>1-Year Warranty</span>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Product Details</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Premium materials for maximum comfort</p>
                    <p>• Advanced cushioning technology</p>
                    <p>• Durable outsole for long-lasting wear</p>
                    <p>• Stylish design for any occasion</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ProductProvider>
  );
}
