"use client";

import { useState } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Input } from "@esmate/shadcn/components/ui/input";
import { ArrowRight, Mail, Gift, Truck, Shield, Sparkles, Zap } from "@esmate/shadcn/pkgs/lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-gray-50">

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 51px)`,
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 51px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            STEP UP YOUR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"> GAME TODAY</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join thousands of elite athletes who trust KICKS for their performance footwear. 
            Get exclusive offers, early access to new releases, and <span className="text-yellow-600 font-bold">15% off your first order.</span>
          </p>
        </div>

        {/* Premium Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-yellow-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gift className="h-10 w-10 text-black" />
              </div>
              <h3 className="font-bold text-xl mb-3">15% Off First Order</h3>
              <p className="text-gray-600">Sign up and get instant discount on your first purchase</p>
            </div>
          </div>
          
          <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-yellow-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-10 w-10 text-black" />
              </div>
              <h3 className="font-bold text-xl mb-3">Free Express Shipping</h3>
              <p className="text-gray-600">On all orders over $100 with tracking included</p>
            </div>
          </div>
          
          <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:border-yellow-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-black" />
              </div>
              <h3 className="font-bold text-xl mb-3">Authentic Guarantee</h3>
              <p className="text-gray-600">100% genuine products or your money back</p>
            </div>
          </div>
        </div>

        {/* Premium Email Signup */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-14 bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 h-16 rounded-2xl focus:bg-white focus:border-yellow-500 text-lg"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400 px-10 py-4 rounded-2xl font-bold text-lg h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </form>
            <p className="text-center text-gray-600 text-sm mt-6">
              Join <span className="text-yellow-600 font-bold">50,000+</span> athletes. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
