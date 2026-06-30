'use client';

import { useState } from 'react';
import { FadeIn } from '../shared/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ShowcaseSectionProps {
  images: string[];
}

export function ShowcaseSection({ images }: ShowcaseSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative z-10 flex flex-col items-center mb-24 pt-12">
      <FadeIn delay={0.1}>
        <div className="text-center mb-10">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 mb-4 inline-block">
            Showcase
          </span>
          <h2 className="text-3xl font-bold text-white">Cuplikan Layar</h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="w-full">
        <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center perspective-[1000px] overflow-hidden">
          {images.map((img, index) => {
            // Calculate relative offset from current active index
            let offset = index - currentIndex;
            // Handle wrap around smoothly if we want (optional, but since images.length might be 4, let's keep it simple)
            // If offset is too far, wrap it.
            if (offset < -Math.floor(images.length / 2)) offset += images.length;
            if (offset > Math.floor(images.length / 2)) offset -= images.length;

            const isCenter = offset === 0;
            const zIndex = 30 - Math.abs(offset);
            const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3;
            const scale = Math.abs(offset) > 2 ? 0.8 : 1 - Math.abs(offset) * 0.15;
            const translateX = offset * 25; // 25% shift for each step
            const rotateY = offset * -15; // Subtle 3D rotation (left cards face right, right cards face left)

            return (
              <div
                key={index}
                className="absolute top-0 w-[280px] md:w-[400px] h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  zIndex,
                  opacity,
                  transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                  pointerEvents: isCenter ? 'auto' : 'none',
                }}
              >
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-[#0B0F19] shadow-2xl bg-[#0B0F19]/50 group">
                  <img
                    src={`/imanlogics2/assets/uploads/${img}`}
                    alt={`Showcase ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay for inactive cards */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-[#0B0F19]/40 backdrop-blur-[2px]"></div>
                  )}
                  {/* Shine effect for active card */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-12 z-50 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/50 transition-all pointer-events-auto shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/50 transition-all pointer-events-auto shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
