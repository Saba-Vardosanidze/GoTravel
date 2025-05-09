const Vacationers = () => {
  return (
    <div className="flex flex-col items-center mt-[96px] w-full max-w-[393px] [font-family:var(--font-family-Poppins)]">
      <h2 className="mb-[64px] font-semibold text-[38px] text-center">
        What Our Vacationers Says
      </h2>
      <div className="flex flex-wrap justify-center gap-[64px] mt-[64px] w-full max-w-[361px]">
        <div className="flex items-center bg-white shadow-lg mb-[64px] pt-[104px] pr-[24px] pb-[64px] pl-[24px] rounded-[24px] max-w-[361px]">
          <div className="flex flex-col justify-center items-center gap-[32px]">
            <div className="relative mr-[72px]">
              <img
                src="./src/assets/woman.svg"
                alt="woman"
                className="bottom-[10px] left-[-130px] absolute max-w-[190px] max-h-[187px]"
              />
            </div>
            <p className="text-gray-700">
              Our experience with GoTravel has been nothing short of
              exceptional. We were able to find & book our annual vacation to
              Thailand in under an hour!
            </p>
            <p className="w-[313px] font-bold text-[17px]">
              Linh Chuong /
              <span className="font-normal text-gray-500">
                Trip to Thailand
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white shadow-lg pt-[104px] pr-[24px] pb-[64px] pl-[24px] rounded-[24px] max-w-[361px]">
          <div className="flex flex-col justify-center items-center gap-[32px]">
            <div className="relative mr-[72px]">
              <img
                src="./src/assets/man.svg"
                alt="man"
                className="bottom-[10px] left-[-130px] absolute max-w-[190px] max-h-[187px]"
              />
            </div>
            <p className="text-gray-700">
              I booked a 2 week vacation to the Maldives for me and my fiance
              with GoTravel. Very fair price and stunning resort. Felt amazing
              to unwind and get away!
            </p>
            <p className="w-[313px] font-bold text-[17px]">
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
