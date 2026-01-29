"use client";

import Link from "next/link";
import Image from "next/image";
import type { MoneyV2 } from "@shopify/hydrogen-react/storefront-api-types";

import {
  CartCheckoutButton,
  CartCost,
  CartLineProvider,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  Money,
  useCart,
} from "@shopify/hydrogen-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@esmate/shadcn/components/ui/card";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Separator } from "@esmate/shadcn/components/ui/separator";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "@esmate/shadcn/pkgs/lucide-react";

export function Cart() {
  const cart = useCart();
  const isCartEmpty = (cart?.totalQuantity ?? 0) === 0;

  if (isCartEmpty) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-12 w-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any kicks to your cart yet. Start shopping to fill it up!
            </p>
            <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full">
              <Link href="/portal/shop">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tighter mb-2">
            SHOPPING
            <span className="text-yellow-500"> CART</span>
          </h1>
          <p className="text-gray-600">
            {cart.totalQuantity} {cart.totalQuantity === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.lines?.map((line) => (
              <CartLineProvider key={line?.id} line={line!}>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
                        <Image
                          src={line?.merchandise?.image?.url as string}
                          alt={line?.merchandise?.image?.altText || ""}
                          fill
                          className="object-cover"
                        />
                        {line?.merchandise?.badge && (
                          <Badge className="absolute top-2 left-2 bg-yellow-500 text-black text-xs">
                            {line.merchandise.badge}
                          </Badge>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg mb-1 truncate">
                              {line?.merchandise?.product?.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              {line?.merchandise?.product?.vendor}
                            </p>
                            
                            {/* Product Options */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {line?.merchandise?.selectedOptions?.map((option) => (
                                <Badge key={option?.name} variant="secondary" className="text-xs">
                                  {option?.value}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <Money 
                              data={line?.cost?.totalAmount as MoneyV2} 
                              className="text-xl font-bold text-black"
                            />
                          </div>
                        </div>

                        {/* Quantity and Remove */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-700">Quantity:</span>
                            <div className="flex items-center border rounded-lg">
                              <CartLineQuantityAdjustButton
                                adjust="decrease"
                                className="h-10 w-10 rounded-l-lg border-r flex items-center justify-center hover:bg-gray-100"
                              >
                                <Minus className="h-4 w-4" />
                              </CartLineQuantityAdjustButton>
                              <div className="px-4 py-2 min-w-[60px] text-center">
                                <CartLineQuantity />
                              </div>
                              <CartLineQuantityAdjustButton
                                adjust="increase"
                                className="h-10 w-10 rounded-r-lg border-l flex items-center justify-center hover:bg-gray-100"
                              >
                                <Plus className="h-4 w-4" />
                              </CartLineQuantityAdjustButton>
                            </div>
                          </div>
                          
                          <CartLineQuantityAdjustButton
                            adjust="remove"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </CartLineQuantityAdjustButton>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CartLineProvider>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <CartCost amountType="subtotal" className="font-medium" />
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <CartCost amountType="total" className="text-black" />
                </div>

                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    />
                    <Button variant="outline" className="px-4">
                      Apply
                    </Button>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex-col gap-4">
                <CartCheckoutButton
                  disabled={isCartEmpty}
                  className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-full font-semibold text-lg"
                >
                  Proceed to Checkout
                </CartCheckoutButton>

                <Button variant="link" asChild className="text-sm text-gray-600 hover:text-black p-0">
                  <Link href="/portal/shop">
                    ← Continue Shopping
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Trust Badges */}
            <div className="mt-6 bg-white rounded-lg p-4 border">
              <h4 className="font-semibold mb-3 text-sm">Why shop with KICKS?</h4>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100% Authentic Products</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Free Shipping on orders $100+</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>30-Day Easy Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
