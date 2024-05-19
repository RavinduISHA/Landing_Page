import { Link } from "react-router-dom";
import HeroImage from "../assets/heroimage.png";
import { GoArrowDown } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";
import DImage from "../assets/image01.png";
import pinkCard from "../assets/pinkCard.png";
import blueCard from "../assets/blueCard.png";
import greenCard from "../assets/greenCard.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F5F6F7]">
        <div className="container poppins-regular">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              {/* Content */}
              <div className="lg:w-1/3 md:ml-12 text-center md:text-start">
                <h1 className="text-[70px] text-primary font-[600] md:text-[70px] md:leading-[70px] leading-[70px]">
                  Paradox
                </h1>
                <p className="text-secondry md:text-[20px] text-[18px] font-[450] md:leading-[25px] md:w-3/4 md:mt-4">
                  The Real-time & powerful 3D designs for web
                </p>
                {/* buttons */}
                <div className="flex flex-row md:gap-4 gap-2">
                  <button className="bg-[#2377FC] py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]">
                    <Link to="/">Launch app</Link>
                  </button>
                  <button className="bg-[#EEEEEE] py-[15px] px-[35px] rounded-[50px] text-black font-[600] mt-[38px]">
                    <Link to="/">Learn more</Link>
                  </button>
                </div>
              </div>

              {/* Img */}
              <div className="md:w-2/3">
                <img src={HeroImage} alt="Hero Image" className="w-[100%]" />
              </div>
            </div>

            {/* DownArrow */}
            <div className="flex flex-row gap-4 items-center">
              <div className="p-2 rounded-full bg-[#EEEEEE] w-[30px]">
                <GoArrowDown />
              </div>
              <span className="text-secondry">Scroll Down</span>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="container poppins-regular">
          <div className="flex md:flex-row flex-col">
            {/* text area */}
            <div className="flex md:flex-col flex-col md:w-[30%] md:gap-[75px] text-center md:text-start">
              <div>
                <h1 className="text-[50px] text-primary font-[600] md:text-[60px] md:leading-[70px] leading-[50px]">
                  Go from 3D to website in no time.
                </h1>
                <p className="text-secondry md:text-[25px] text-[22px] font-[450] md:leading-[25px] md:w-[90%] md:mt-4">
                  Without any effort, save a ton of time .
                </p>
              </div>
              {/* input email */}
              <div>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="bg-[#EEEEEE] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4"
                    placeholder="Your email"
                  />
                  <div className="absolute inset-y-1 right-1 flex items-center p-3 rounded-md bg-[#2377FC] text-white">
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div>

            {/* Image area */}
            <div className="md:w-2/3 flex items-center justify-center">
              <img
                src={DImage}
                alt="Hero Image"
                className="w-auto max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section>
        <div className="container poppins-regular">
          {/* text */}
          <h1 className="text-[70px] text-primary font-[600] md:text-[60px] md:leading-[70px] leading-[70px]">
            The 3D generation is here.
          </h1>

          <div className="flex md:flex-row flex-col md:mt-12 mt-10 justify-between gap-4">
            <div className="">
              <div className="relative">
                <img
                  className="w-full h-72 object-cover rounded-xl"
                  src={pinkCard}
                  alt="Card Image"
                />

                <div className="absolute top-[40%] left-[30%] bg-white rounded-full p-4 shadow-lg flex items-center space-x-2">
                  <div className="bg-purple-300 rounded-full w-10 h-10 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/20"
                      alt="User 1"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/20"
                      alt="User 2"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
                <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md">
                  NEW
                </span>
              </div>

              {/* text */}
              <div className="md:mt-4">
                <h1 className="font-bold">3D team assets</h1>
                <p className="text-secondry text-[14px]">
                  Make your design more attractive.
                </p>
              </div>
            </div>
            <div className="">
              <div className="relative">
                <img
                  className="w-full h-72 object-cover rounded-xl"
                  src={blueCard}
                  alt="Card Image"
                />

                <div className="absolute top-[40%] left-[30%] bg-white rounded-full p-4 shadow-lg flex items-center space-x-2">
                  <div className="bg-purple-300 rounded-full w-10 h-10 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/20"
                      alt="User 1"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/20"
                      alt="User 2"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
              </div>

              {/* text */}
              <div className="md:mt-4">
                <h1 className="font-bold">Shared materials</h1>
                <p className="text-secondry text-[14px]">
                  Make your design more attractive.
                </p>
              </div>
            </div>
            <div className="">
              <div className="relative">
                <img
                  className="w-full h-72 object-cover rounded-xl"
                  src={greenCard}
                  alt="Card Image"
                />

                <div className="absolute top-[40%] left-[30%] bg-white rounded-full p-4 shadow-lg flex items-center space-x-2">
                  <div className="bg-purple-300 rounded-full w-10 h-10 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/20"
                      alt="User 1"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <img
                      src="https://via.placeholder.com/20"
                      alt="User 2"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                  </div>
                </div>
              </div>

              {/* text */}
              <div className="md:mt-4">
                <h1 className="font-bold">3D team assets</h1>
                <p className="text-secondry text-[14px]">
                  Make your design more attractive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
