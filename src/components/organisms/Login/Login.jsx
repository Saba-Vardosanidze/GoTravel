import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../../Shema/loginSchema";
const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const submit = () => {
    submit(data);
  };

  return (
    <div className="flex bg-[var(--offerService-bg)] m-auto w-full h-[840px]">
      <div className="flex m-auto w-[1440px] loginContaienr">
        <div className="flex flex-col w-[600px] loginleftCon">
          <h2 className="m-auto mb-[38px] w-[412px] font-[700x] text-[28px] text-center leading-[58px]">
            Learn About Our Frequent Traveler Program
          </h2>
          <p className="w-[590px] text-[var(--paragraph-color)] text-center leading-[54px]">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>
        <div className="bg-[#B3B3B369] m-auto w-[1px] h-[324px]"></div>
        <div className="flex items-center gap-8">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col w-[600px] h-[312px]"
          >
            <h2 className="mb-4 font-bold text-2xl">Register</h2>
            {/* name */}
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700 text-sm"
                htmlFor="firstName"
              >
                <p className="font-600">Full Name</p>
              </label>

              <input
                className="bg-[var(--color-white)] shadow px-3 py-2 border border-none rounded rounded[8px] outline-none w-full text-gray-700"
                type="text"
                placeholder="Your name"
                id="firstName"
                {...register("username")}
              />
              <p className="text-[var(--empty-input)]">
                {errors.username?.message}
              </p>
            </div>

            {/* email */}
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700 text-sm"
                htmlFor="email"
              >
                <p className="font-600">Email</p>
              </label>
              <input
                className="bg-[var(--color-white)] shadow px-3 py-2 border border-none rounded[8px] outline-none outline-style: w-full text-gray-700 none"
                type="email "
                placeholder="Your Email"
                id="email"
                {...register("email")}
              />
              <p className="text-[var(--empty-input)]">
                {errors.password?.message}
              </p>
            </div>
            <div className="flex justify-between mt-9 submitAndAgree">
              <div className="flex justify-center items-center gap-1">
                <input type="checkbox" />
                <p className="text-[#797979]">
                  Agree to receive promotional email updates
                </p>
              </div>

              <button
                onClick={() => submit}
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
