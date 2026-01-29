"use client";

import { useState } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { ShoppingCart, Check } from "@esmate/shadcn/pkgs/lucide-react";
import { useCartActions } from "@/lib/shopify/cart";

interface AddToCartButtonProps {
  merchandiseId: string;
  quantity?: number;
  className?: string;
  children?: React.ReactNode;
}

export function AddToCartButton({ 
  merchandiseId, 
  quantity = 1, 
  className = "",
  children 
}: AddToCartButtonProps) {
  const { addToCart } = useCartActions();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddToCart = async () => {
    if (isLoading || isSuccess) return;
    console.log("adding to cart", merchandiseId, quantity)
    setIsLoading(true);
    
    try {
      const result = await addToCart(merchandiseId, quantity);
      
      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000); // Reset after 2 seconds
      } else {
        console.error("Failed to add to cart:", result.error);
        // You could show a toast notification here
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isLoading || isSuccess}
      className={`w-full bg-black text-white hover:bg-gray-800 rounded-full font-semibold transition-all duration-300 ${className}`}
    >
      {isLoading ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          Adding...
        </>
      ) : isSuccess ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          {children || "Add to Cart"}
        </>
      )}
    </Button>
  );
}
