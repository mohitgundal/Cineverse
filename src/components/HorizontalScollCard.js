import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300;
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrevious();
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">
        {heading}
      </h2>

      <div className="relative">
        <div
          ref={containerRef}
          className="
            grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6
            overflow-x-auto
            scrollbar-hide
            transition-all
            relative z-10 scroll-smooth
            focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
          "
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label={`${heading} horizontal scroll`}
        >
          {data.map((item, index) => (
            <Card
              key={item.id + "heading" + index}
              data={item}
              index={index + 1}
              trending={trending}
              media_type={media_type}
            />
          ))}
        </div>

        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrevious}
            className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-full shadow transition"
            aria-label="Scroll left"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-full shadow transition"
            aria-label="Scroll right"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
