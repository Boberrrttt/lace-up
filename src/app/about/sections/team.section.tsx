"use client";

import { Badge } from "@esmate/shadcn/components/ui/badge";
import { Mail, Linkedin, Twitter } from "@esmate/shadcn/pkgs/lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former professional athlete with 10+ years in sportswear retail. Passionate about bringing authentic products to athletes who demand the best.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@kicks.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "Head of Curation",
      bio: "Fashion industry veteran with an eye for quality. Ensures every product meets our strict standards for authenticity and performance.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@kicks.com"
      }
    },
    {
      name: "Marcus Williams",
      role: "Community Manager",
      bio: "Building bridges between athletes and brands. Creates events and programs that strengthen our community of sportswear enthusiasts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@kicks.com"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Lead",
      bio: "Dedicated to ensuring every customer has an exceptional experience. From personalized recommendations to after-sales support.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@kicks.com"
      }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-black text-white px-4 py-2 text-sm font-semibold rounded-full">
            MEET THE TEAM
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
            THE PEOPLE
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
              {" "}BEHIND KICKS
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team is made up of passionate athletes, fashion experts, and customer service professionals 
            who share a common goal: to provide you with the best sportswear experience possible.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-gray-900" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-gray-900" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Mail className="h-4 w-4 text-gray-900" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Want to Join Our Team?</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're always looking for passionate individuals who share our love for sportswear and commitment to excellence. 
              Check out our open positions and become part of the KICKS family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#careers"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="#internships"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-full font-semibold hover:border-gray-400 transition-colors"
              >
                Internship Program
              </a>
            </div>
          </div>
        </div>

        {/* Culture Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-500 mb-2">15+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-500 mb-2">50+</div>
            <div className="text-gray-600">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-500 mb-2">100%</div>
            <div className="text-gray-600">Passion for Sportswear</div>
          </div>
        </div>
      </div>
    </section>
  );
}
