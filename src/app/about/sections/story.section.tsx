"use client";

import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Calendar, Target, Award, Users } from "@esmate/shadcn/pkgs/lucide-react";

export function StorySection() {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "KICKS was founded with a simple mission: to provide authentic, premium sportswear to athletes who demand the best.",
      icon: Calendar,
      color: "from-yellow-400 to-orange-500"
    },
    {
      year: "2021",
      title: "First Store Launch",
      description: "Opened our flagship store and launched our online platform, reaching thousands of customers nationwide.",
      icon: Target,
      color: "from-blue-400 to-purple-500"
    },
    {
      year: "2022",
      title: "Brand Partnerships",
      description: "Secured exclusive partnerships with major sportswear brands, expanding our collection to over 500+ products.",
      icon: Award,
      color: "from-green-400 to-teal-500"
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Built a community of 50,000+ athletes and became the trusted destination for premium sportswear.",
      icon: Users,
      color: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-black text-white px-4 py-2 text-sm font-semibold rounded-full">
            OUR JOURNEY
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
            FROM STARTUP TO
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
              {" "}LEADER
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What started as a passion project has grown into a trusted destination for premium sportswear. 
            Our journey has been defined by quality, authenticity, and an unwavering commitment to our customers.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-400"></div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 mb-4 ${
                        isEven ? "md:justify-end" : ""
                      }`}>
                        <div className={`w-3 h-3 bg-gradient-to-r ${milestone.color} rounded-full`}></div>
                        <span className="font-bold text-lg text-gray-900 mr-2">{milestone.year }</span>
                      </div>

                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${milestone.color} rounded-xl mb-4 ${
                        isEven ? "md:ml-auto" : ""
                      }`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-yellow-500 rounded-full shadow-lg"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">2020</div>
              <div className="text-gray-300">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">50K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Premium Products</div>
            </div>
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">4.8</div>
              <div className="text-gray-300">Star Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
