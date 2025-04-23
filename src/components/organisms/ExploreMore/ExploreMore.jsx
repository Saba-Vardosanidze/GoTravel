import listings from "./data";

const ExploreMore = () => {
  {
    listings.map((item, index) => {});
  }
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
      <div className="relative fotoContainer">
        <img className="mt-16" src="./images/png/exploreCard1.png" alt="" />
        <div className="top-[88px] right-[20px] absolute flex justify-center items-center gap-2 bg-white rounded-[6px] w-[76px] h-[33px] scoreContainer">
          <img className="w-4 h-4" src="./images/svg/yelloStar.svg" alt="" />
          <p>4</p>
        </div>
      </div>
      <div className="flex justify-between mt-[26px] w-[328px] h-[84px] descriptionContainer">
        <div className="nameAndlocation">
          <h3 className="font-[600] text-[24px]">Kudahuvadhoo</h3>
          <div className="flex gap-1 mt-[14px] text-[var(--paragraph-color)] location">
            <img src="./images/svg/location.svg" alt="" />
            <p>Central Province, Maldives</p>
          </div>
        </div>
        <div className="price">
          <p className="text-[24px]">
            $127/ <span className="text-[20px]"> pax</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
