const CompanyOffers = () => {
  return (
    <div className="bg-white py-20">
      <div className="flex flex-col gap-[64px] lg:gap-[136px] mx-auto px-4 max-w-[1200px] font-[poppins]">
        <h2 className="mb-[64px] font-bold text-[32px] lg:text-[52px] text-center">
          Latest news from us
        </h2>

        <div className="flex lg:flex-row flex-col gap-[64px] mb-[80px]">
          <img
            className="rounded-[20px] w-full lg:w-[400px] h-[361px] object-cover"
            src="/images/png/island.png"
            alt="island"
          />
          <div className="flex flex-col justify-center">
            <p className="mb-[10px] text-[var(--paragraph-color)] lg:text-[20px]">
              Nov 19, 2024
            </p>
            <h2 className="mb-4 font-semibold text-[28px] lg:text-[44px]">
              Stories from Around the Globe
            </h2>
            <p className="mb-[20px] lg:max-w-[500px] text-[var(--paragraph-color)] lg:text-[18px]">
              From the bustling streets of Tokyo to the serene landscapes of
              Patagonia, each story offers a glimpse into the diverse cultures,
              breathtaking landscapes, and unforgettable encounters.
            </p>
            <button className="bg-[var(--button-color)] hover:bg-[#466b72] px-6 py-2 rounded-lg w-fit text-white hover:cursor-pointer">
              View More
            </button>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-[64px]">
          <img
            className="rounded-lg w-full lg:w-[400px] h-[400px] object-cover"
            src="/images/png/bali.png"
            alt="bali"
          />
          <div className="flex flex-col justify-center">
            <p className="mb-[10px] text-[var(--paragraph-color)] lg:text-[20px]">
              Dec 25, 2024
            </p>
            <h2 className="mb-[20px] font-bold text-[32px] lg:text-[52px] text-center">
              Exploring Hidden Gems
            </h2>
            <p className="mb-[20px] lg:max-w-[500px] text-[var(--paragraph-color)] lg:text-[18px]">
              Dive into our latest blog post as we uncover the enchanting allure
              of off the beaten path destinations. From secluded beaches to
              quaint villages, we guide you on a journey to discover the hidden
              gems waiting to be explored.
            </p>
            <button className="bg-[#18ABC6] hover:bg-[#466b72] px-6 py-2 rounded-lg w-fit text-white hover:cursor-pointer">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOffers;
