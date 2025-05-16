import {motion} from "framer-motion";
const HeroSection = () => {
  return (
    <div className="flex justify-center m-auto mt-[48px] lg:mb-[144px] px-[16px] lg:px-[96px] w-full max-w-[1920px]">
      <div className="lg:relative flex flex-col w-full max-w-[1728px]">
        <div className="flex flex-col items-center bg-[url('/images/png/Hero%20Image.png')] bg-cover bg-center rounded-[28px] lg:rounded-[36px] w-full lg:max-w-[1727px] min-h-[452px] lg:min-h-[972px] overflow-hidden">
          <motion.p
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            className="mt-[64px] lg:mt-[216px] mb-[12px] max-w-[313px] lg:max-w-[1159px] font-semibold text-[28px] text-[var(--color-white)] lg:text-[104px] text-center"
          >
            Start Your Memorable Journey Here
          </motion.p>
          <motion.p
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 2}}
            className="w-full max-w-[313px] lg:max-w-[849px] text-[var(--color-white)] lg:text-[28px] text-center"
          >
            Where unforgettable adventures await you.
          </motion.p>
        </div>
        <div className="lg:bottom-[-91px] lg:left-1/2 lg:absolute flex lg:flex-row flex-col lg:justify-center lg:items-center gap-[64px] lg:gap-[82px] lg:bg-[var(--color-white)] lg:shadow lg:m-auto mt-[96px] lg:px-[16px] lg:rounded-[24px] lg:w-full lg:max-w-[1556px] lg:min-h-[256px] lg:-translate-x-1/2">
          <div className="flex lg:flex-row flex-col items-center">
            <div className="flex justify-center items-center bg-[var(--buttonOpacityColor)] rounded-full w-[80px] h-[80px]">
              <img src="/images/svg/Booking.svg" alt="booking" />
            </div>
            <div className="flex flex-col items-center lg:items-start gap-[8px] lg:gap-[10px] mt-[24px] lg:mt-[0px] lg:ml-[56px]">
              <h2 className="lg:font-medium text-[20px] text-[var(--paragraph-color)] lg:text-[28px]">
                Easy Booking
              </h2>
              <p className="lg:max-w-[276px] text-[var(--paragraph-color)]">
                Your hassle-free solution for convenient.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center">
            <div className="flex justify-center items-center bg-[var(--buttonOpacityColor)] rounded-full w-[80px] h-[80px]">
              <img src="/images/svg/Booking.svg" alt="booking" />
            </div>
            <div className="flex flex-col items-center lg:items-start gap-[8px] lg:gap-[10px] mt-[24px] lg:mt-[0px] lg:ml-[56px]">
              <h2 className="lg:font-medium text-[20px] text-[var(--paragraph-color)] lg:text-[28px]">
                Airport Pickup
              </h2>
              <p className="lg:max-w-[276px] text-[var(--paragraph-color)]">
                Offers a reliable and convenient transportation service.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center">
            <div className="flex justify-center items-center bg-[var(--buttonOpacityColor)] rounded-full w-[80px] h-[80px]">
              <img src="/images/svg/Guide.svg" alt="booking" />
            </div>
            <div className="flex flex-col items-center lg:items-start gap-[8px] lg:gap-[10px] mt-[24px] lg:mt-[0px] lg:ml-[56px]">
              <h2 className="lg:font-medium text-[20px] text-[var(--paragraph-color)] lg:text-[28px]">
                Best Guide
              </h2>
              <p className="lg:max-w-[276px] text-[var(--paragraph-color)]">
                trusted companion for exploring new destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
