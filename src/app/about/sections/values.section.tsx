"use client";

import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Shield, Heart, Zap, Award, Users, Target } from "@esmate/shadcn/pkgs/lucide-react";

export function ValuesSection() {
  const values = [
    {
      title: "Authenticity First",
      description: "Every product we sell is 100% genuine. We work directly with authorized distributors to ensure you get authentic sportswear, every time.",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      features: ["100% Genuine Products", "Authorized Distributors", "Quality Guaranteed"]
    },
    {
      title: "Customer Obsessed",
      description: "Our customers are at the heart of everything we do. From personalized service to expert advice, we're here to help you find your perfect fit.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      features: ["24/7 Support", "Expert Advice", "Personalized Service"]
    },
    {
      title: "Performance Driven",
      description: "We understand that sportswear is more than fashion—it's about performance. We curate products that help athletes push their limits and achieve their goals.",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      features: ["Performance Tested", "Athlete Approved", "Cutting-Edge Technology"]
    },
    {
      title: "Quality Excellence",
      description: "Quality isn't just a feature—it's our foundation. Every product in our collection meets our strict standards for durability, comfort, and style.",
      icon: Award,
      color: "from-green-500 to-teal-500",
      features: ["Premium Materials", "Strict Quality Control", "Long-Lasting Durability"]
    },
    {
      title: "Community Focused",
      description: "We're building more than a store—we're creating a community of athletes who share a passion for excellence and performance.",
      icon: Users,
      color: "from-purple-500 to-indigo-500",
      features: ["Athlete Community", "Events & Workshops", "Shared Passion"]
    },
    {
      title: "Innovation Forward",
      description: "The sportswear industry is always evolving, and so are we. We stay ahead of trends and bring you the latest innovations in athletic footwear.",
      icon: Target,
      color: "from-gray-600 to-gray-800",
      features: ["Latest Releases", "Trend Setting", "Future Ready"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-black text-white px-4 py-2 text-sm font-semibold rounded-full">
            OUR VALUES
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
            WHAT WE
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
              {" "}STAND FOR
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our values guide every decision we make and every product we curate. 
            They're the foundation of our commitment to excellence and the reason our customers trust us.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{value.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To provide premium, authentic footwear for everyone. From elite athletes to casual sneaker enthusiasts. 
              We believe great shoes should enhance performance, inspire confidence, and express personal style. 
              Every product we curate, every customer we serve, and every decision we make is driven by our unwavering commitment to quality and style.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Style</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
