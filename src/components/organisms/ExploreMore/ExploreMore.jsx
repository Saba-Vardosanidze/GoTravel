import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import destinations from "./destinations";

const ExploreMore = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [page, setPage] = useState(0);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!emblaApi || isMobile) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, isMobile]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const prevDisabled = isMobile ? page === 0 : !canScrollPrev;
  const nextDisabled = isMobile ? page === 1 : !canScrollNext;

  const mobileCards =
    page === 0 ? destinations.slice(0, 6) : destinations.slice(6);

  return (
    <div className="relative flex flex-col m-auto lg:px-8 max-w-[388px] lg:max-w-[1500px]">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-3 lg:mb-12 ml-4">
        <div>
          <h2 className="font-bold text-2xl lg:text-4xl">Explore more</h2>
          <p className="font-light text-gray-600 lg:text-xl">
            Let's go on an adventure
          </p>
        </div>
        <div className="flex gap-4 mt-10 mb-16">
          <button
            disabled={prevDisabled}
            onClick={() => {
              setPage(0);
              if (!isMobile) scrollPrev();
            }}
            className={`
              flex justify-center items-center
              rounded-full w-14 h-14 disabled:opacity-50
              ${page === 0 ? "bg-gray-300" : "bg-cyan-500"}
            `}
          >
            <img
              className="w-6 h-3"
              src="./src/assets/naklebi.svg"
              alt="prev"
            />
          </button>
          <button
            disabled={nextDisabled}
            onClick={() => {
              setPage(1);
              if (!isMobile) scrollNext();
            }}
            className={`
              flex justify-center items-center
              rounded-full w-14 h-14 disabled:opacity-50
              ${page === 1 ? "bg-gray-300" : "bg-cyan-500"}
            `}
          >
            <img className="w-6 h-3" src="./src/assets/meti.svg" alt="next" />
          </button>
        </div>
      </div>

      {isMobile && (
        <div className="flex flex-col gap-10 px-4">
          {mobileCards.map((dest) => (
            <Card key={dest.id} dest={dest} />
          ))}
        </div>
      )}

      {!isMobile && (
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[destinations.slice(0, 6), destinations.slice(6)].map(
              (chunk, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 gap-16 grid grid-cols-3 grid-rows-2 w-full"
                >
                  {chunk.map((dest) => (
                    <Card key={dest.id} dest={dest} />
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Card = ({ dest }) => (
  <div className="flex flex-col gap-6">
    <div className="relative">
      <img
        src={dest.image}
        alt={dest.title}
        className="mx-auto rounded-xl w-full max-w-[361px] h-[300px] lg:h-[400px]"
      />
      <div className="top-[15px] lg:top-[15px] right-[15px] lg:right-[55px] absolute flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-xl">
        <img src="./src/assets/star.svg" alt="star" />
        <span className="text-gray-600 text-sm">{dest.rating}</span>
      </div>
    </div>
    <div className="flex justify-between items-center px-4 lg:px-0">
      <h2 className="lg:ml-[35px] font-semibold text-lg lg:text-xl">
        {dest.title}
      </h2>
      <p className="lg:mr-[45px] text-[22px] lg:text-[24px]">
        {dest.price}/<span className="text-[16px] lg:text-[20px]">Pax</span>
      </p>
    </div>
    <p className="flex items-center gap-2 lg:ml-[35px] px-4 lg:px-0 text-gray-700 text-sm lg:text-base">
      <img src="./src/assets/locatione.svg" alt="location" />
      {dest.location}
    </p>
  </div>
);

export default ExploreMore;
