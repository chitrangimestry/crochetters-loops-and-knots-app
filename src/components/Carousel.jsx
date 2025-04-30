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

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Slowed down to 4s for better UX
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden shadow-lg h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full min-w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 sm:p-2 shadow"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 sm:p-2 shadow"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>{" "}
      </div>
    </>
  );
}
