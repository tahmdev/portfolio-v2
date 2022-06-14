import React, { useRef, useState } from "react";
interface Data {
  img: string;
  alt: string;
}
interface Props {
  data: Data[];
}
export const Carousel: React.FC<Props> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const currentPos = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      setCurrentIndex(Math.round(currentPos / width));
    }
  };

  const handleDot = (idx: number) => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: width * idx, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const currentPos = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: currentPos + width,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const currentPos = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: currentPos - width,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="carousel-wrapper">
      <div className="carousel" onScroll={handleScroll} ref={carouselRef}>
        {data.map((i, idx) => (
          <img key={idx} src={i.img} alt={i.alt} />
        ))}
      </div>
      <div className="carousel-navigation">
        <div className="dot-navigation">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={`trans-btn ${
                idx === currentIndex ? "dot-active" : ""
              }`}
              onClick={() => handleDot(idx)}
            >
              ●
            </button>
          ))}
        </div>
        <div className="arrow-navigation">
          <button
            className={`trans-btn ${
              currentIndex === 0 ? "arrow-disabled" : ""
            }`}
            onClick={handlePrev}
          >
            ◀
          </button>
          <button
            className={`trans-btn ${
              currentIndex === data.length - 1 ? "arrow-disabled" : ""
            }`}
            onClick={handleNext}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};
