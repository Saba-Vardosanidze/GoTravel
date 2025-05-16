const Vacationers = () => {
  return (
    <div className="flex flex-col items-center mt-[144px] mb-[96px] lg:mb-[144px] [font-family:var(--font-family-Poppins)]">
      <h2 className="font-semibold text-[62px]">What Our Vacationers Says</h2>
      <div className="flex flex-wrap justify-center gap-[79px] mt-[88px]">
        <div className="flex items-center bg-white shadow-lg pt-[56px] pr-[48px] pb-[56px] pl-[152px] rounded-[24px] max-w-[738px]">
          <div className="relative mr-[72px]">
            <img
              src="./src/assets/woman.svg"
              alt="woman"
              className="-ml-[95px] max-w-[190px] max-h-[187px]"
            />
          </div>
          <div className="flex flex-col gap-[56px]">
            <p className="text-gray-700">
              Our experience with GoTravel has been nothing short of
              exceptional. We were able to find & book our annual vacation to
              Thailand in under an hour!
            </p>
            <p className="font-bold text-[17px]">
              Linh Chuong /
              <span className="font-normal text-gray-500">
                Trip to Thailand
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white shadow-lg pt-[56px] pr-[48px] pb-[56px] pl-[152px] rounded-[24px] max-w-[738px]">
          <div className="relative mr-[72px]">
            <img
              src="./src/assets/man.svg"
              alt="man"
              className="-ml-[95px] max-w-[190px] max-h-[187px]"
            />
          </div>
          <div className="flex flex-col gap-[56px]">
            <p className="text-gray-700">
              I booked a 2 week vacation to the Maldives for me and my fiance
              with GoTravel. Very fair price and stunning resort. Felt amazing
              to unwind and get away!
            </p>
            <p className="font-bold text-[17px]">
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
