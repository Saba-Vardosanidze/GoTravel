import listings from "./ExploreMoreData";
import ExploreCard from "../../organisms/ExploreMore/ExploreCard";

const ExploreMore = () => {
  return (
    <div className="flex flex-col m-auto pr-[16px] pl-[16px] w-[362px] h-[3000px]">
      <div className="embla">
        <h2 className="mb-3 font-[600] text-[32px]">Explore more</h2>
        <p className="mb-10 font-[300] text-[var(--paragraph-color)]">
          Let’s go on adventure
        </p>

        <div className="flex gap-3 Button">
          <button className="leftEmblaBg flex justify-center items-center bg-[var(--paragraph-color)] rounded-[50%] w-[60px] h-[60px] cursor-pointer">
            <img
              className="w-[22px] h-[22px]"
              src="./images/svg/leftEmblaButton.svg"
              alt="leftArrow"
            />
          </button>
          <button className="rightEmblaBg flex justify-center items-center bg-[var(--button-color)] rounded-[50%] w-[60px] h-[60px] cursor-pointer">
            <img
              className="w-[22px] h-[22px]"
              src="./images/svg/rightEmblaButton.svg"
              alt="rightArrow"
            />
          </button>
        </div>
      </div>
      {listings.map((item, index) => {
        <ExploreCard
          key={index}
          img={item.img}
          score={item.score}
          title={item.title}
          location={item.location}
          price={item.price}
        ></ExploreCard>;
      })}
    </div>
  );
};

export default ExploreMore;
