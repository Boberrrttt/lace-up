"use client";

import { useState } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Input } from "@esmate/shadcn/components/ui/input";
import { ArrowRight, Mail, Gift, Truck, Shield } from "@esmate/shadcn/pkgs/lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500 text-black font-semibold">LIMITED TIME</Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
            STEP UP YOUR
            <span className="text-yellow-500"> GAME TODAY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of athletes who trust KICKS for their performance footwear. 
            Get exclusive offers, early access to new releases, and 15% off your first order.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">15% Off First Order</h3>
            <p className="text-gray-400 text-sm">Sign up and get instant discount on your first purchase</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
            <p className="text-gray-400 text-sm">On all orders over $100 with tracking included</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">Authentic Guarantee</h3>
            <p className="text-gray-400 text-sm">100% genuine products or your money back</p>
          </div>
        </div>

        {/* Email Signup */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 bg-white/10 border-white/20 text-white placeholder-gray-400 h-14 rounded-full focus:bg-white/20 focus:border-yellow-500"
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-3 rounded-full font-semibold text-lg h-14"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-4">
            Join 50,000+ athletes. No spam, unsubscribe anytime.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">50,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">4.8/5 Star Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
