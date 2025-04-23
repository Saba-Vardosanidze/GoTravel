const OfferService = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-[#EFF9FB] mx-auto pb-[25px] lg:max-w-full lg:min-h-[840px]">
      <div className="flex lg:flex-row flex-col py-[96px] lg:border-[#B3B3B366] lg:border-t-1 lg:border-b-1 lg:max-w-[1556px]">
        <div className="flex flex-col items-center gap-[30px] lg:p-10 lg:p-t-1 py-10 w-full lg:w-1/3 text-center">
          <img src="./src/assets/box.svg" alt="package" />

          <h2 className="font-bold text-[28px]">Customized Packages</h2>

          <p className="max-w-[300px] lg:max-w-[300px] font-[rubik] text-[#6D6D6DD9]">
            Explore our range of customizable travel packages tailored to your
            budget and preferences.
          </p>
        </div>
        <div className="lg:bg-[#B3B3B366] lg:w-[1px] splitter" />
        <div className="flex flex-col items-center gap-[30px] lg:p-10 w-full lg:w-1/3 text-center">
          <img src="./src/assets/cutlery.svg" alt="culinary" />
          <h2 className="font-bold text-[28px]">Culinary Tours</h2>

          <p className="max-w-[330px] lg:max-w-[280px] font-[rubik] text-[#6D6D6DD9]">
            Indulge in culinary delights from around the world with our curated
            food and wine tours.
          </p>
        </div>
        <div className="lg:bg-[#B3B3B366] lg:w-[1px] splitter" />
        <div className="flex flex-col items-center gap-[30px] lg:p-10 w-full lg:w-1/3 text-center">
          <img src="./src/assets/destination.svg" alt="destination" />
          <h2 className="font-bold text-[28px]">Destination Expertise</h2>
          <p className="max-w-[330px] font-[rubik] text-[#6D6D6DD9]">
            Benefit from our extensive knowledge of destinations worldwide for
            informed travel decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferService;
