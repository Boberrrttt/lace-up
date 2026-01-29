"use client";

import { AddToCartButton, ProductPrice, ProductProvider } from "@shopify/hydrogen-react";
import { useVariantSelector } from "@/hooks/use-variant-selector";
import { getProductSingle } from "./../app/products/[handle]/service";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ShoppingCart, X } from "@esmate/shadcn/pkgs/lucide-react";
import { useState } from "react";

interface Props {
  data: Awaited<ReturnType<typeof getProductSingle>>;
  children: React.ReactNode;
}

export function VariantDialog({ data, children }: Props) {
  const [open, setOpen] = useState(false);
  const { variantId, options, selectOption } = useVariantSelector(data);

  const handleAddToCart = () => {
    if (variantId) {
      // Close dialog after successful add to cart
      setTimeout(() => setOpen(false), 1000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-bold">
                {data.title}
              </DialogTitle>
              <div className="flex items-center gap-3">
                <ProductPrice 
                  data={data} 
                  className="text-2xl font-bold"
                />
                {data.priceRange && (
                  <Badge className="bg-red-100 text-red-600 text-sm px-3 py-1">
                    20% OFF
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square max-w-sm mx-auto">
            <img
              src={data.images.nodes[0]?.url || "/placeholder-image.jpg"}
              alt={data.images.nodes[0]?.altText || "Product image"}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {data.description}
          </p>

          <Separator />

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
                        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
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
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {variantId ? "Add to Cart" : "Select Options"}
            </AddToCartButton>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="text-xs text-gray-500">Free Shipping</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">30-Day Returns</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">1-Year Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { Dialog };
