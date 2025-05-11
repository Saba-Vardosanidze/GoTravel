import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex bg-[var(--offerService-bg)] m-auto w-full h-[840px] item-center">
      <div className="flex gap-[178px] m-auto w-[1440px] loginContaienr">
        <div className="flex flex-col w-[600px] loginleftCon">
          <h2 className="m-auto mb-[38px] w-[412px] font-[700x] text-[28px] text-center leading-[58px]">
            Learn About Our Frequent Traveler Program
          </h2>
          <p className="text-[var(--paragraph-color)] text-center leading-[54px]">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>
        <div className="bg-[#B3B3B369] m-auto w-[1px] h-[324px]"></div>
        <div className="flex justify-center items-center gap-8">
          <form className="flex flex-col w-[600px] h-[312px]">
            <h2 className="mb-4 font-bold text-2xl">Register</h2>
            {/* name */}
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700 text-sm"
                htmlFor="firstName"
              >
                Full Name
              </label>
              <input
                className="bg-[var(--color-white)] shadow px-3 py-2 border rounded outline-none w-full text-gray-700"
                type="text"
                placeholder="Your name"
                id="firstName"
                {...register("username")}
              />
            </div>
            {/* surname */}

            {/* email */}
            <div className="mb-4">
              <label
                className="block bg-[] mb-2 font-bold text-gray-700 text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-[var(--color-white)] shadow px-3 py-2 border rounded outline-none outline-style: w-full text-gray-700 none"
                type="email "
                placeholder="Your Email"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="flex justify-between submitAndAgree">
              <div className="flex justify-center items-center gap-1">
                <input type="checkbox" />
                <p>Agree to receive promotional email updates</p>
              </div>

              <button
                className="bg-[#18C692] px-4 py-2 rounded-[10px] w-[153px] text-white cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
