"use client";

import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [current, setCurrent] = useState(0);

  const slides = [
    { src: "/portfolio/1.jpg", alt: "Работа 1"}, 
    { src: "/portfolio/1.jpg", alt: "Работа 1"}, 
    { src: "/portfolio/1.jpg", alt: "Работа 1"}, 
    { src: "/portfolio/1.jpg", alt: "Работа 1"}, 
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  return (
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-[#8B0000]">Примеры</span> работ
        </h2>

        <div className="relative">
          {/* Слайдер */}
          <div className="overflow-hidden rounded-lg border border-gray-800">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="min-w-full aspect-[4/3] bg-[#1a1a1a] relative">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all text-xl"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all text-xl"
          >
            ›
          </button>

          {/* Индикаторы */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === idx ? "bg-[#8B0000] w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}