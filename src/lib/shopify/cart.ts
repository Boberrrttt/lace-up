"use client";

import { useCart } from "@shopify/hydrogen-react";

export interface CartItem {
  merchandiseId: string;
  quantity: number;
}

export function useCartActions() {
  const cart = useCart();

  const addToCart = async (merchandiseId: string, quantity: number = 1) => {
    try {
      if (!cart.linesAdd) {
        console.error("Cart linesAdd function not available");
        return { success: false, error: "Cart function not available" };
      }

      await cart.linesAdd([
        {
          merchandiseId,
          quantity,
        },
      ]);

      return { success: true };
    } catch (error) {
      console.error("Error adding to cart:", error);
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
  };

  const removeFromCart = async (lineId: string) => {
    try {
      if (!cart.linesRemove) {
        console.error("Cart linesRemove function not available");
        return { success: false, error: "Cart function not available" };
      }

      await cart.linesRemove([lineId]);

      return { success: true };
    } catch (error) {
      console.error("Error removing from cart:", error);
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
  };

  const updateQuantity = async (lineId: string, quantity: number) => {
    try {
      if (!cart.linesUpdate) {
        console.error("Cart linesUpdate function not available");
        return { success: false, error: "Cart function not available" };
      }

      await cart.linesUpdate([
        {
          id: lineId,
          quantity,
        },
      ]);

      return { success: true };
    } catch (error) {
      console.error("Error updating cart:", error);
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
    }
  };

  const getCartCount = () => {
    return cart?.totalQuantity || 0;
  };

  const getCartSubtotal = () => {
    return cart?.cost?.subtotalAmount?.amount || "0";
  };

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
    getCartSubtotal,
    cart,
    isLoading: false, // Hydrogen React doesn't expose isLoading directly
  };
}
