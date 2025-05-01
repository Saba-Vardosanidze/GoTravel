const ExploreMore = () => {
  return (
    <div className="relative flex flex-col justify-start m-auto lg:px-8 max-w-[388px] lg:max-w-[1500px]">
     
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-[12px] lg:mb-12 ml-[15px]">
        <div>
          <h2 className="font-bold text-[32px] lg:text-[48px]">Explore more</h2>
          <p className="font-[300] text-[#7D7D7D] lg:text-[24px]">Let's go on an adventure</p>
        </div>
        <div className="flex gap-4 mt-[40px] mb-[60px]">
          <button className="flex justify-center items-center bg-[#D9D9D9] rounded-[100%] w-[60px] lg:max-w-[72px] h-[60px] lg:max-h-[72px] font-semibold cursor-pointer lg:cursor-pointer">
            <img className="max-w-[22px] h-[12px]" src="./src/assets/naklebi.svg" alt="previous" />
          </button>
          <button className="flex justify-center items-center bg-[#18ABC6] rounded-[100%] w-[60px] lg:max-w-[72px] h-[60px] lg:max-h-[72px] font-semibold cursor-pointer lg:cursor-pointer">
            <img className="max-w-[22px] h-[12px]" src="./src/assets/meti.svg" alt="next" />
          </button>
        </div>
      </div>

      <div className="gap-8 lg:gap-[116px] grid grid-cols-1 lg:grid-cols-3">

 
        <div className="relative flex flex-col gap-[26px]">
          <img src="./src/assets/png/maldives.png" className="m-auto rounded-xl w-full max-w-[361px] h-[300px] lg:h-[400px]" alt="Kudahuvadhoo" />
          <div className="bottom-[300px] lg:bottom-[400px] left-[300px] lg:left-[300px] relative flex justify-center items-center gap-[5px] bg-gray-200 py-1 rounded-xl w-[72px]">
<img  src="./src/assets/star.svg" alt="star" />
  <span className="text-gray-600 text-sm">4.6</span>
</div>
          <div className="flex gap-[100px]">
            <h2 className="ml-[15px] font-semibold text-[24px] lg:text-[28px]">Kudahuvadhoo</h2>
            <p className="text-[24px] lg:text-[28px]">$127/<span className="text-[16px] lg:text-[20px]">Pax</span></p>
          </div>
          <p className="flex gap-[7px] ml-[15px] text-gray-700 lg:text-[18px]">
            <img src="./src/assets/locatione.svg" alt="location" />
            Central Province, Maldives
          </p>
        </div>


        <div className="flex flex-col gap-[26px]">
          <img src="./src/assets/png/reef.png" className="m-auto rounded-xl w-full max-w-[361px] h-[300px] lg:h-[400px]" alt="Great Barrier Reef" />
          <div className="bottom-[300px] lg:bottom-[400px] left-[300px] lg:left-[300px] relative flex justify-center items-center gap-[5px] bg-gray-200 py-1 rounded-xl w-[72px]">
<img  src="./src/assets/star.svg" alt="star" />
  <span className="text-gray-600 text-sm">4.2</span>
</div>
          <div className="flex gap-[80px]">
            
            <h2 className="ml-[15px] lg:max-w-[450px] font-semibold text-[24px] lg:text-[28px]">Great Barrier Reef</h2>
            <p className="text-[24px] lg:text-[28px]">$140/<span className="text-[16px] lg:text-[20px]">Pax</span></p>
          </div>
          <p className="flex gap-[7px] ml-[15px] text-gray-700 lg:text-[18px]">
            <img src="./src/assets/locatione.svg" alt="location" />
            Great Barrier Reef
          </p>
        </div>

 
        <div className="flex flex-col gap-[26px]">
          <img src="./src/assets/png/soneva.png" className="m-auto rounded-xl w-full max-w-[361px] h-[300px] lg:h-[400px]" alt="Soneva Secret" />
          <div className="bottom-[300px] lg:bottom-[400px] left-[300px] lg:left-[300px] relative flex justify-center items-center gap-[5px] bg-gray-200 py-1 rounded-xl w-[72px]">
<img  src="./src/assets/star.svg" alt="star" />
  <span className="text-gray-600 text-sm">4.5</span>
</div>
          <div className="flex gap-[130px]">
            <h2 className="ml-[15px] font-semibold text-[24px] lg:text-[28px]">Soneva Secret</h2>
            <p className="text-[24px] lg:text-[28px]">$152/<span className="text-[16px] lg:text-[20px]">Pax</span></p>
          </div>
          <p className="flex gap-[7px] ml-[15px] text-gray-700 lg:text-[18px]">
            <img src="./src/assets/locatione.svg" alt="location" />
         Maldives
          </p>
        </div>

        <div className="flex flex-col gap-[26px]">
          <img src="./src/assets/png/greece.png" className="m-auto rounded-xl w-full max-w-[361px] h-[300px] lg:h-[400px]" alt="Navagio Bay" />
          <div className="bottom-[300px] lg:bottom-[400px] left-[300px] lg:left-[300px] relative flex justify-center items-center gap-[5px] bg-gray-200 py-1 rounded-xl w-[72px]">
<img  src="./src/assets/star.svg" alt="star" />
  <span className="text-gray-600 text-sm">4.1</span>
</div>
          <div className="flex gap-[130px]">
            <h2 className="ml-[15px] font-semibold text-[24px] lg:text-[28px]">Navagio Bay</h2>
            <p className="text-[24px] lg:text-[28px]">$137/<span className="text-[16px] lg:text-[20px]">Pax</span></p>
          </div>
          <p className="flex gap-[7px] ml-[15px] text-gray-700 lg:text-[18px]">
            <img src="./src/assets/locatione.svg" alt="location" />
             Greece
          </p>
        </div>

  
        <div className="flex flex-col gap-[26px]">
          <img src="./src/assets/png/carribean.png" className="m-auto rounded-xl w-full max-w-[361px] h-[300px] lg:h-[400px]" alt="Grand Anse" />
          <div className="bottom-[300px] lg:bottom-[400px] left-[300px] lg:left-[300px] relative flex justify-center items-center gap-[5px] bg-gray-200 py-1 rounded-xl w-[72px]">
<img  src="./src/assets/star.svg" alt="star" />
  <span className="text-gray-600 text-sm">4.9</span>
</div>
<div className="flex gap-[140px]">
<h2 className="ml-[15px] font-semibold text-[24px] lg:text-[28px]">Grand Anse</h2>
<p className="text-[24px] lg:text-[28px]">$102/<span className="text-[16px] lg:text-[20px]">Pax</span></p>
</div>
<p className="flex gap-[7px] ml-[15px] text-gray-700 lg:text-[18px]">
<img src="./src/assets/locatione.svg" alt="location" />
  Grenada, Caribbean
</p>
</div>


        <div className="flex flex-col gap-[26px]">
          
    <img src="./src/assets/png/zakynthos.png" className="m-auto rounded-xl w-full max-w-[361px] h-[300px] lg:h-[400px]" alt="Zakynthos" />
          <div className="bottom-[300px] lg:bottom-[400px] left-[300px] lg:left-[300px] relative flex justify-center items-center gap-[5px] bg-gray-200 py-1 rounded-xl w-[72px]">
<img  src="./src/assets/star.svg" alt="star" />
  <span className="text-gray-600 text-sm">4.4</span>
</div>
          <div className="flex gap-[160px]">
            <h2 className="ml-[15px] font-semibold text-[24px] lg:text-[28px]">Zakynthos</h2>
            <p className="text-[24px] lg:text-[28px]">$191/<span className="text-[16px] lg:text-[20px]">Pax</span></p>
          </div>
          <p className="flex gap-[7px] ml-[15px] text-gray-700 lg:text-[18px]">
            <img src="./src/assets/locatione.svg" alt="location" />
            Keri, Greece
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;