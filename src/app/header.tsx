"use client";

import { useCart } from "@shopify/hydrogen-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, ShoppingCart } from "@esmate/shadcn/pkgs/lucide-react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@esmate/shadcn/components/ui/sheet";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Input } from "@esmate/shadcn/components/ui/input";

const mainMenuItems: { text: string; href: string }[] = [
  { text: "Featured", href: "/featured" },  
  { text: "Collections", href: "/products" },
  { text: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { totalQuantity } = useCart();

  function isMenuItemActive(href: string) {
    return pathname === href;
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300">
      {/* Top bar */}
      <div className="bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-center font-medium">
            Free Shipping on Orders Over $100 | Easy Returns
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white">
        <nav className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex gap-10">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <span className="sr-only">KICKS</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">K</span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-black">
                      KICKS
                    </span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                {mainMenuItems.map(({ text, href }) => (
                  <div key={href} className="relative group">
                    <Link
                      href={href}
                      className={`text-base font-semibold transition-all duration-200 ${
                        isMenuItemActive(href)
                          ? "text-black"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {text}
                    </Link>
                    <div 
                      className={`absolute -bottom-[8px] left-0 h-0.5 bg-black transition-all duration-300 ${
                        isMenuItemActive(href) 
                          ? "w-full opacity-100" 
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden lg:block">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search sneakers..."
                    className="w-64 pl-10 pr-4 py-2 border-gray-300 rounded-full focus:border-black focus:ring-black"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Mobile search toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden cursor-pointer"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              
              {/* Cart */}
              <Link href="/cart" className="relative group">
                <Button variant="ghost" size="icon" className="p-2 cursor-pointer">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="sr-only">Cart</span>
                </Button>
                {!!totalQuantity && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold"
                  >
                    {totalQuantity}
                  </Badge>
                )}
              </Link>

              {/* Mobile menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-md p-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-2 px-6 py-6 border-b">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">K</span>
                      </div>
                      <span className="text-xl font-black tracking-tighter">KICKS</span>
                    </div>
                    
                    <nav className="flex-1 py-6 px-6">
                      <div className="space-y-2">
                        {mainMenuItems.map(({ text, href }) => (
                          <Link
                            key={href}
                            href={href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-4 text-lg font-medium rounded-lg transition-colors ${
                              isMenuItemActive(href)
                                ? "bg-black text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {text}
                          </Link>
                        ))}
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Mobile search */}
          {searchOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search sneakers..."
                  className="w-full pl-10 pr-4 py-2 border-gray-300 rounded-full"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
