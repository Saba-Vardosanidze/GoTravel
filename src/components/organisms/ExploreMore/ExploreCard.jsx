const ExploreCard = ({ img, score, title, location, price }) => {
  return (
    <div className="flex flex-col m-auto pr-[16px] pl-[16px] w-[362px] h-[3000px]">
      <div className="relative fotoContainer">
        <img className="mt-16" src={`${img}.png`} alt={title} />
        <div className="top-[88px] right-[20px] absolute flex justify-center items-center gap-2 bg-white rounded-[6px] w-[76px] h-[33px] scoreContainer">
          <img
            className="w-4 h-4"
            src="./images/svg/yelloStar.svg"
            alt="star"
          />
          <p>{score}</p>
        </div>
      </div>
      <div className="flex justify-between mt-[26px] w-[328px] h-[84px] descriptionContainer">
        <div className="nameAndlocation">
          <h3 className="font-[600] text-[24px]">{title}</h3>
          <div className="flex gap-1 mt-[14px] text-[var(--paragraph-color)] location">
            <img src="./images/svg/location.svg" alt="" />
            <p>
              {location.city},{location.country}
            </p>
          </div>
        </div>
        <div className="price">
          <p className="text-[24px]">
            {price}/ <span className="text-[20px]"> pax</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ExploreCard;
