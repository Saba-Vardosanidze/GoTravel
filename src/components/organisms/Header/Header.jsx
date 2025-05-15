import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsPagesOpen(false);
  };

  const togglePages = () => {
    setIsPagesOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  return (
    <header className="flex justify-between items-center m-auto mt-[16px] lg:mt-[32px] pr-[16px] lg:pr-[86px] pl-[16px] lg:pl-[86px] lg:max-w-[1728px] min-h-[35px]">
      <Link to="/">
        <img
          className="max-w-[126px] lg:max-w-[237px] min-h-[35px] lg:min-h-[54px] cursor-pointer"
          src="./images/svg/Logo.svg"
          alt="siteLogo"
        />
      </Link>

      <div className="hidden lg:flex">
        <ul className="lg:flex lg:items-center lg:gap-[40px] font-medium">
          <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
            <Link to="#">About</Link>
          </li>
          <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
            <div
              onClick={toggleServices}
              className="lg:flex lg:gap-[7px] lg:max-w-[99px]"
            >
              <Link to="#">Services</Link>
              <motion.img
                src="images/svg/CaretDown.svg"
                alt="CaretDown"
                animate={isServicesOpen ? "open" : "closed"}
                variants={{
                  open: {
                    rotate: 180,
                    filter: "brightness(1.2)",
                  },
                  closed: {
                    rotate: 0,
                    filter: "brightness(1)",
                  },
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              {isServicesOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="z-40 absolute flex flex-col justify-center bg-[var(--color-white)] shadow-[2px_4px_30px_rgba(0,0,0,0.1)] mt-[13px] pl-[32px] rounded-[16px] w-[100%] max-w-[276px] min-h-[212px] font-medium"
                >
                  <ul className="flex flex-col lg:gap-[32px]">
                    <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
                      <Link to="#">Culinary Tours</Link>
                    </li>
                    <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
                      <Link to="#">Destination Expertise</Link>
                    </li>
                    <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
                      <Link to="#">Customized Packages</Link>
                    </li>
                  </ul>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          </li>
          <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
            <div
              onClick={togglePages}
              className="lg:flex lg:gap-[7px] lg:max-w-[99px]"
            >
              <Link to="#">Pages</Link>

              <motion.img
                src="images/svg/CaretDown.svg"
                alt="CaretDown"
                animate={isPagesOpen ? "open" : "closed"}
                variants={{
                  open: {
                    rotate: 180,
                    filter: "brightness(1.2)",
                  },
                  closed: {
                    rotate: 0,
                    filter: "brightness(1)",
                  },
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {isPagesOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="z-40 absolute flex flex-col justify-center bg-[var(--color-white)] shadow-[2px_4px_30px_rgba(0,0,0,0.1)] mt-[13px] pl-[32px] rounded-[16px] w-[100%] max-w-[255px] min-h-[268px] font-medium"
              >
                <ul className="flex flex-col lg:gap-[32px]">
                  <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
                    <Link to="#">About Company</Link>
                  </li>
                  <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
                    <Link to="#">Payment Gateway</Link>
                  </li>
                  <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
                    <Link to="#"> Terms & Conditions</Link>
                  </li>
                </ul>
              </motion.div>
            ) : (
              ""
            )}
          </li>
          <li className="text-[var(--paragraph-color)] hover:text-[var(--color-black)] transition duration-300 ease-in-out cursor-pointer">
            <Link to="#">Testimonials</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end lg:justify-center lg:items-center lg:gap-[20px] w-full max-w-[237px]">
        <button className="lg:hidden object-contain cursor-pointer">
          <img src="./images/svg/MenuIcon.svg" alt="burgerMenuIcon" />
        </button>
        <button className="hidden lg:flex cursor-pointer">
          <img src="./images/svg/SearchIcon.svg" alt="SearchButton" />
        </button>
        <button className="hidden lg:flex cursor-pointer">
          <img src="./images/svg/notification.svg" alt="notificationButton" />
        </button>
        <button className="hidden lg:flex justify-center items-center bg-[var(--button-color)] hover:bg-[var(--button-hover)] rounded-[10px] w-[137px] h-[52px] font-medium text-[var(--color-white)] transition duration-300 ease-in-out cursor-pointer">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Header;
