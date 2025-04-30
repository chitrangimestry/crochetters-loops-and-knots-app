import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/crochetHooks.jpeg";
import img2 from "../assets/images/crochet-pattern-1.jpg";
import img3 from "../assets/images/crochet1.jpg";
import image4 from "../assets/images/crochets.jpg";

const images = [img1, img2, img3, image4];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // ⏱ Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-lg h-96">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover object-center flex-shrink-0"
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
