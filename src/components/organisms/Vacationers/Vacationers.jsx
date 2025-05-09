const Vacationers = () => {
  return (
    <div className="flex flex-col items-center m-auto mt-[96px] lg:mt-[144px] w-full max-w-[393px] lg:max-w-[1920px] [font-family:var(--font-family-Poppins)]">
      <h2 className="mb-[64px] font-semibold text-[38px] lg:text-[62px] text-center">
        What Our Vacationers Says
      </h2>
      <div className="flex flex-wrap justify-center gap-[64px] lg:gap-[100px] mt-[64px] lg:mt-[88px] w-full max-w-[361px] lg:max-w-full">
        <div className="flex items-center bg-white shadow-lg mb-[64px] pt-[104px] lg:pt-[56px] pr-[24px] lg:pr-[48px] pb-[64px] lg:pb-[56px] pl-[24px] lg:pl-[152px] rounded-[24px] lg:max-w-[643px]">
          <div className="flex flex-col justify-center items-center gap-[32px] lg:gap-[56px] lg:w-[427px]">
            <div className="relative mr-[72px]">
              <img
                src="./src/assets/woman.svg"
                alt="woman"
                className="lg:top-[50px] right-[-32px] lg:right-[250px] bottom-[10px] absolute max-w-[152px] max-h-[150px]"
              />
            </div>
            <p className="text-gray-700 leading-[42px] lg:leading-[36px]">
              Our experience with GoTravel has been nothing short of
              exceptional. We were able to find & book our annual vacation to
              Thailand in under an hour!
            </p>
            <p className="w-[313px] lg:w-[427px] font-bold text-[17px]">
              Linh Chuong /
              <span className="font-normal text-gray-500">
                Trip to Thailand
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white shadow-lg mb-[64px] pt-[104px] lg:pt-[56px] pr-[24px] lg:pr-[48px] pb-[64px] lg:pb-[56px] pl-[24px] lg:pl-[152px] rounded-[24px] lg:max-w-[643px]">
          <div className="flex flex-col justify-center items-center gap-[32px] lg:gap-[56px] lg:w-[427px]">
            <div className="relative mr-[72px]">
              <img
                src="./src/assets/man.svg"
                alt="man"
                className="lg:top-[50px] right-[-32px] lg:right-[250px] bottom-[10px] absolute max-w-[152px] max-h-[150px]"
              />
            </div>
            <p className="text-gray-700 leading-[42px] lg:leading-[36px]">
              I booked a 2 week vacation to the Maldives for me and my fiance
              with GoTravel. Very fair price and stunning resort. Felt amazing
              to unwind and get away!
            </p>
            <p className="w-[313px] lg:w-[427px] font-bold text-[17px]">
              Alex Johnson /
              <span className="font-normal text-gray-500">
                Maldives Getaway
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacationers;
