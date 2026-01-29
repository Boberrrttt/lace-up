"use client";

import { useState, useEffect } from "react";
import { Button } from "@esmate/shadcn/components/ui/button";
import { ArrowRight, Play } from "@esmate/shadcn/pkgs/lucide-react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "STEP INTO",
      subtitle: "EXcellence",
      description: "Discover the latest collection of premium sneakers designed for athletes who demand the best.",
      cta: "Shop Now",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    },
    {
      id: 2,
      title: "UNLEASH YOUR",
      subtitle: "POTENTIAL",
      description: "Engineered for performance, crafted for style. Elevate your game with our cutting-edge footwear.",
      cta: "Explore Collection",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      id: 3,
      title: "BEYOND THE",
      subtitle: "LIMITS",
      description: "Push boundaries and break records with sneakers that combine innovation with iconic design.",
      cta: "New Arrivals",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src={slide.videoUrl}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full -mt-16">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Animated Title */}
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter mb-2">
                {slides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i}>
                    <span
                      className="inline-block animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {word}
                    </span>
                    {i < slides[currentSlide].title.split(' ').length - 1 && ' '}
                  </span>
                ))}
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-yellow-400 animate-fade-in-up">
                {slides[currentSlide].subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold group"
              >
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white w-16" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}