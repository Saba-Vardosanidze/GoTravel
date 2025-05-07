import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#18ABC6] p-[100px_25px] flex flex-col gap-12 md:flex-row md:items-center ">
      <div className="flex flex-col gap-10 md:w-[25%]">
        <div className="bg-white p-[10px_11px] w-[54px] rounded-[7px] shadow-[-10px_-8px_5px_2px] shadow-[#3391aa]">
          <img src="./images/svg/G.svg" alt="G" />
        </div>
        <div className="space-y-5">
          <h2 className="font-bold text-[20px] text-white">
            GoTravel - Your Vacation Awaits
          </h2>
          <p className="text-white font-light">
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
      <div className="space-y-15 md:w-[75%] flex flex-col md:flex-row md:justify-around md:space-y-0">
        <div className="flex flex-col gap-7">
          <h5 className="text-[20px] text-white font-bold">Menu</h5>
          <ul className="text-white space-y-2">
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Explore</li>
            <li className="cursor-pointer">VIP Program</li>
            <li className="cursor-pointer">Testimonials</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="text-[20px] text-white font-bold">Services</h5>
          <ul className="text-white space-y-2">
            <li className="cursor-pointer">Culinary</li>
            <li className="cursor-pointer">Location</li>
            <li className="cursor-pointer">Destination</li>
            <li className="cursor-pointer">Customizes</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="text-[20px] text-white font-bold">Extra</h5>
          <ul className="text-white space-y-2">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">About Company</li>
            <li className="cursor-pointer">Payment Gateway</li>
            <li className="cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-7">
          <h5 className="text-[20px] text-white font-bold">
            Contact Information
          </h5>
          <ul className="text-white space-y-2">
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
    </footer>
  );
};

export default Footer;
