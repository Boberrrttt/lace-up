"use client";

import { useState } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { Input } from "@esmate/shadcn/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  ShoppingBag,
  Heart,
  Star,
  ArrowUp,
  Check
} from "@esmate/shadcn/pkgs/lucide-react";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/products" },
    { name: "New Arrivals", href: "/new" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Sale", href: "/sale" },
    { name: "Gift Cards", href: "/gift-cards" }
  ],
  help: [
    { name: "Customer Service", href: "/help" },
    { name: "Track Order", href: "/track" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Size Guide", href: "/size-guide" }
  ],
  about: [
    { name: "About KICKS", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Sustainability", href: "/sustainability" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

const paymentMethods = [
  "Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"
];

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Footer newsletter signup:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-400 transition-colors z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">K</span>
                </div>
                <span className="text-2xl font-black tracking-tighter">KICKS</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                Your destination for premium athletic footwear. We carry the world's best brands 
                with authentic products and exceptional service.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">1-800-KICKS-24</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@kicks.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Sport Street, Athletic City, AC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Stay in the Loop</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get exclusive offers and be the first to know about new releases.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
              <Button
                type="submit"
                className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4 text-yellow-500" />
                <span>Free Shipping $100+</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-yellow-500" />
                <span>Authentic Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-yellow-500" />
                <span>30-Day Returns</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-400">4.8/5 from 10,000+ reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 KICKS. All rights reserved. Made with ❤️ for athletes everywhere.
              </p>
            </div>
            
            {/* Payment Methods */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-700"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
