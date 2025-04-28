const SweetMemories = () => {
  return (
    <div className="flex flex-col gap-8 mx-auto px-4 lg:px-8 w-full max-w-[1440px]">
      <div className="flex flex-col lg:items-start m-auto lg:text-left text-center">
        <h2 className="max-w-[490px] font-semibold text-[28px]">
          Travel to make sweet memories
        </h2>
        <p className="m-auto mt-4 font-light text-gray-900">
          Find the perfect vacation getaway
        </p>
      </div>

      <div className="flex lg:flex-row flex-col-reverse items-center gap-12">
        <div className="flex flex-col flex-1 items-start">
          <div className="flex flex-col gap-8 mt-4">
            <div className="flex items-start gap-4">
              <div className="flex justify-center items-center bg-[#18ABC6] rounded-xl w-[54px] h-[36px] font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Reignite those travel tastebuds
                </h3>
                <p className="mt-2 max-w-[340px] font-light text-[14px] text-gray-900">
                  Embark on a gastronomic adventure that transports you to
                  distant lands, where every dish tells a story.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex justify-center items-center bg-[#18ABC6] rounded-xl w-[54px] h-[36px] font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Get back to nature by travel
                </h3>
                <p className="mt-2 max-w-[340px] font-light text-[14px] text-gray-900">
                  Escape the hustle and bustle of daily life and reconnect with
                  the serene beauty of the natural.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex justify-center items-center bg-[#18ABC6] rounded-xl w-[54px] h-[36px] font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">
                  Find trips that fit your freedom
                </h3>
                <p className="mt-2 max-w-[340px] font-light text-[14px] text-gray-900">
                  Embark on a gastronomic adventure that transports you to
                  distant lands, where every dish tells a story.
                </p>
              </div>
            </div>
          </div>

          <button className="bg-[#18ABC6] hover:bg-amber-600 mt-12 px-6 py-2 rounded-[8px] max-w-[200px] text-white hover:cursor-pointer">
            Start your explore
          </button>
        </div>
        <div className="relative flex flex-1 justify-center">
          <img
            src="./src/assets/png/swimming.png"
            className="rounded-[20px] w-full lg:max-w-[500px] lg:h-[613px] object-cover"
            alt="swimming"
          />

          <div className="hidden top-[20%] left-[-5%] absolute lg:flex">
            <div className="flex bg-[#ffffff85] p-4 rounded-lg">
              <img src="./src/assets/png/tiffany.png" alt="tif" />
              <p className="font-medium align-middle">Tiffany Miller</p>
              <div className="items-center m-auto">
                <p className="text-yellow-500">⭐</p>
                <p className="ml-1 font-bold text-gray-600 text-sm">4.6</p>
              </div>
            </div>
          </div>

          <div className="hidden right-[0%] bottom-[15%] absolute lg:flex">
            <div className="flex bg-[#ffffff85] p-4 rounded-lg">
              <img src="./src/assets/png/amari.png" alt="amari" />
              <p className="font-medium align-middle">Amari Reece</p>
              <div className="items-center m-auto">
                <p className="text-yellow-500">⭐</p>
                <p className="ml-1 font-bold text-gray-600 text-sm">4.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetMemories;
