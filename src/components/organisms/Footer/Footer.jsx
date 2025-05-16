const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col md:items-center gap-12 bg-[#18ABC6] p-[100px_25px]">
      <div className="flex m-auto w-full max-w-[1440px]">
      <div className="flex flex-col gap-10 md:w-[25%]">
        <div className="bg-white shadow-[-10px_-8px_5px_2px] shadow-[#3391aa] p-[10px_11px] rounded-[7px] w-[54px]">
          <img src="./images/svg/G.svg" alt="G" />
        </div>
        <div className="space-y-5">
          <h2 className="font-bold text-[20px] text-white">
            GoTravel - Your Vacation Awaits
          </h2>
          <p className="font-light text-white">
            GoTravel creates vacations you’ll remember. Simply pick your desired
            location, and we do the rest. An all inclusive getaway that leaves
            you relaxing, not stressing.
          </p>
          <div className="flex gap-7">
            <img src="./images/svg/Linkedini.svg" alt="Linkedini" />
            <img src="./images/svg/Instagram.svg" alt="Instagram" />
            <img src="./images/svg/Whatsapp.svg" alt="Whats App" />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-around space-y-15 md:space-y-0 md:w-[75%]">
        <div className="flex flex-col gap-7">
          <h5 className="font-bold text-[20px] text-white">Menu</h5>
          <ul className="space-y-2 text-white">
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Explore</li>
            <li className="cursor-pointer">VIP Program</li>
            <li className="cursor-pointer">Testimonials</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="font-bold text-[20px] text-white">Services</h5>
          <ul className="space-y-2 text-white">
            <li className="cursor-pointer">Culinary</li>
            <li className="cursor-pointer">Location</li>
            <li className="cursor-pointer">Destination</li>
            <li className="cursor-pointer">Customizes</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="font-bold text-[20px] text-white">Extra</h5>
          <ul className="space-y-2 text-white">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">About Company</li>
            <li className="cursor-pointer">Payment Gateway</li>
            <li className="cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="font-bold text-[20px] text-white">
            Contact Information
          </h5>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-2 cursor-pointer">
              <img src="./images/svg/Vector.svg" alt="" />
              <span>1 248 416 6573</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <img src="./images/svg/Email.svg" alt="" />
              <span>gotravel@email.com</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <img src="./images/svg/Location.svg" alt="" />
              <span>25 East 29th Street, NY</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
