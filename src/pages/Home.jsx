import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { SiFramer } from "react-icons/si";
import { TbBrandWebflow } from "react-icons/tb";
import { PiRobotFill, PiLightningBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { FiToggleLeft } from "react-icons/fi";
import { LuMouse } from "react-icons/lu";
import { GoArrowDown, GoPlus } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";

// images
import DImage from "../assets/image01.png";
import pinkCard from "../assets/pinkCard.png";
import blueCard from "../assets/blueCard.png";
import greenCard from "../assets/greenCard.png";
import sec5Image from "../assets/image3D.png";
import HeroImage from "../assets/heroimage.png";
import RoudedImage from "../assets/Imagerounded.png";
import user1 from "../assets/user01.png";
import user2 from "../assets/user02.png";
import user3 from "../assets/user03.png";
import user4 from "../assets/user04.png";
import user5 from "../assets/user05.png";
import user6 from "../assets/user06.png";
import middleImg from "../assets/middleImage.png";
import Ball1 from "../assets/ball01.png";
import Ball2 from "../assets/ball02.png";
import Ball3 from "../assets/ball03.png";
import Ball4 from "../assets/ball04.png";
import Emojies from "../assets/emojis.png";
import Icon01 from "../assets/icon01.png";
import Icon02 from "../assets/Icon02.png";
import Icon03 from "../assets/Icon03.png";
import Icon04 from "../assets/Icon04.png";

// components
import Tabs from "../Tab/Tabs";

function Home() {
  const handleScrollDown = () => {
    // Scroll down the page
    window.scrollBy({ top: 700, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary">
        <div className="container poppins-regular mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              {/* Content */}
              <div
                className="md:w-1/2 lg:w-2/3 text-center md:text-start md:pr-4 lg:pr-8"
                data-aos="fade-up"
              >
                <h1 className="text-[60px] md:text-[70px] lg:text-[85px] text-black font-[600] leading-[50px] md:leading-[50px]">
                  Paradox
                </h1>
                <p className="text-secondry text-[20px] md:text-[22px] lg:text-[25px] font-medium md:w-3/4 mt-8 md:mt-4">
                  The Real-time & powerful 3D designs for web
                </p>

                {/* Buttons */}
                <div className="flex flex-row gap-2 md:gap-4 mt-8 md:mt-6 md:justify-start justify-center md:w-3/4">
                  <button className="bg-[#2377FC] py-[12px] md:py-[15px] px-[25px] lg:w-full rounded-[50px] text-white font-[600] hover:bg-[#1A5CB7] transition duration-300 hover:text-white">
                    <Link to="/">Launch app</Link>
                  </button>
                  <button className="bg-[#EEEEEE] py-[12px] md:py-[15px] px-[25px] lg:w-full rounded-[50px] text-black font-[600] hover:text-[#2377FC] transition duration-300">
                    <Link to="/">Learn more</Link>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div
                className="md:w-1/2 lg:w-2/3 w-full mt-20 md:mt-0 flex md:justify-end justify-center"
                data-aos="zoom-in"
              >
                <img
                  src={HeroImage}
                  alt="Hero Image"
                  className="w-[80%] h-auto md:justify-end md:items-end"
                />
              </div>
            </div>

            {/* Down Arrow */}
            <div
              className="flex flex-row gap-4 items-center mt-8 md:mt-0 cursor-pointer"
              onClick={handleScrollDown}
              data-aos="fade-down"
              aria-label="Scroll Down"
              role="button"
            >
              <div className="p-2 rounded-full bg-[#EEEEEE] w-[30px] hover:bg-[#CCCCCC] transition duration-300">
                <GoArrowDown />
              </div>
              <span className="text-secondry">Scroll Down</span>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="container poppins-regular mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row border-b pb-12 lg:gap-2">
            {/* text area */}
            <div className="flex flex-col text-center md:text-start md:w-1/3 md:gap-10">
              <div>
                <h1 className="text-[40px] text-black font-semibold md:text-[50px] lg:text-[55px] leading-[50px] md:leading-[60px] lg:leading-[70px]">
                  Go from 3D to website in no time.
                </h1>
                <p className="text-secondry text-[20px] md:text-[22px] lg:text-[25px] font-medium leading-[25px] mt-4 md:mt-6 lg:mt-8 md:w-[90%]">
                  Without any effort, save a ton of time.
                </p>
              </div>
              {/* input email */}
              <div className="mt-6 md:mt-0 lg:mt-12">
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
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
                  <div className="absolute inset-y-1 right-1 flex items-center p-3 rounded-md bg-[#2377FC] hover:bg-[#2376fc81] text-white hover:text-black transition duration-300">
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div>

            {/* Image area */}
            <div className="md:w-2/3 flex items-center justify-center md:justify-end mt-8 md:mt-0">
              <img
                src={DImage}
                alt="Hero Image"
                className="w-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section>
        <div className="container poppins-regular">
          <div className="border-b pb-12">
            {/* text */}
            <h1 className="text-[50px] text-black font-[600] md:text-[55px] md:leading-[70px] leading-[50px] text-center md:text-start">
              The 3D generation is here.
            </h1>
            <div className="flex md:flex-row flex-col md:mt-12 mt-10 justify-between gap-4">
              <div className="transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    className="w-full h-72 object-cover rounded-xl"
                    src={pinkCard}
                    alt="Card Image"
                  />

                  <div className="absolute top-[40%] left-[30%] bg-white rounded-full p-4 shadow-lg flex items-center justify-center -space-x-2 w-40">
                    <div className="bg-purple-300 rounded-full w-10 h-10 flex items-center justify-center">
                      <div className="rounded full">
                        <FaRegUser />
                      </div>
                    </div>
                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center border-[2px] border-white">
                      <div className="rounded full">
                        <FaRegUser />
                      </div>
                    </div>
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer border-[2px] border-white">
                      <span className="text-white text-lg font-bold">
                        <GoPlus />
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md">
                    NEW
                  </span>
                </div>

                {/* text */}
                <div className="md:mt-4 mt-2">
                  <h1 className="font-bold">3D team assets</h1>
                  <p className="text-secondry text-[14px]">
                    Make your design more attractive.
                  </p>
                </div>
              </div>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    className="w-full h-72 object-cover rounded-xl"
                    src={blueCard}
                    alt="Card Image"
                  />

                  <div className="absolute top-[40%] left-[30%] bg-white rounded-full p-4 shadow-lg flex items-center space-x-2 w-40 h-18">
                    <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center"></div>
                    </div>
                  </div>
                </div>

                {/* text */}
                <div className="md:mt-4 mt-2">
                  <h1 className="font-bold">Shared materials</h1>
                  <p className="text-secondry text-[14px]">
                    Create, enable and use across your team
                  </p>
                </div>
              </div>
              <div className="transform transition-transform duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    className="w-full h-72 object-cover rounded-xl"
                    src={greenCard}
                    alt="Card Image"
                  />

                  <div className="absolute top-[40%] left-[30%] bg-white rounded-full p-4 shadow-lg flex items-center space-x-2 w-40">
                    <div className="rounded-full w-32 h-10 flex items-center justify-center font-[650] text-[20px] text-green-500">
                      Share
                    </div>
                  </div>
                </div>

                {/* text */}
                <div className="md:mt-4 mt-2">
                  <h1 className="font-bold">Live share</h1>
                  <p className="text-secondry text-[14px]">
                    Make your design more attractive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forth Section */}
      <section>
        <Tabs />
      </section>

      {/* Fifth Section */}
      <section className="bg-[#F9FAFB]">
        <div className="container poppins-regular mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-2/3 flex justify-center md:justify-start">
              <img
                src={sec5Image}
                alt="integrate 3d image"
                className="w-full h-auto md:max-w-full"
              />
            </div>
            {/* content */}
            <div className="md:w-[40%] flex flex-col md:gap-16 gap-4 md:mt-40 mt-8 md:ml-8">
              {/* text */}
              <div className="text-center md:text-start">
                <h1 className="text-[40px] md:text-[50px] lg:text-[55px] text-black font-semibold leading-[50px] md:leading-[60px] lg:leading-[70px]">
                  Integrate your 3D designs
                </h1>
                <p className="text-secondry text-[20px] md:text-[22px] lg:text-[25px] font-medium leading-[25px] mt-2 md:mt-4 md:w-[90%]">
                  Without any effort, save a ton of time.
                </p>
              </div>

              {/* Icon */}
              <div className="flex flex-col gap-4">
                <div className="p-4 border-t border-b flex items-center gap-4 transform transition-transform duration-300 hover:scale-105">
                  <div className="p-3 rounded-md bg-[#C3B4ED] flex justify-center">
                    <SiFramer className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <span className="font-bold text-[15px] flex items-center justify-center">
                    Framer
                  </span>
                </div>

                <div className="p-4 border-b flex items-center gap-4 transform transition-transform duration-300 hover:scale-105">
                  <div className="p-3 rounded-md bg-[#B5DFEC] flex justify-center">
                    <TbBrandWebflow className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <span className="font-bold text-[15px] flex items-center justify-center">
                    Webflow
                  </span>
                </div>

                <div className="p-4 flex items-center gap-4 transform transition-transform duration-300 hover:scale-105">
                  <div className="p-3 rounded-md bg-[#C2DAB2] flex justify-center">
                    <PiRobotFill className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <span className="font-bold text-[15px] flex items-center justify-center">
                    Robot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sixth section */}
      <section>
        <div className="container poppins-regular">
          <div className="">
            {/* main text */}
            <h1 className="text-[50px] text-black font-[600] md:text-[55px] md:leading-[70px] leading-[50px] flex justify-center text-center">
              Discover how it work
            </h1>

            <div className="bg-primary flex md:flex-row flex-col rounded-lg md:mt-24 mt-12">
              {/* left content */}
              <div className="md:w-[50%] md:mx-24 md:py-24 flex flex-col md:gap-16 md:p-0 p-4">
                {/* text */}
                <div className="text-center md:text-start">
                  <h1 className="text-[30px] text-black font-[600] md:text-[40px] md:leading-[50px] leading-[40px] md:w-[300px]">
                    Set up your perfect scene.
                  </h1>
                  <p className="text-secondry md:text-[18px] text-[22px] font-[450] md:leading-[25px] md:w-[90%] md:mt-4">
                    Amet minim mollit non deserunt ullamco est.
                  </p>
                </div>

                {/* watch button */}
                <div className="flex flex-row md:gap-8 gap-4 justify-center md:justify-start md:mt-0 mt-8">
                  <div className="p-5 bg-blue-500 rounded-full text-white w-14 flex justify-center transition duration-300 hover:bg-[#EEEEEE] hover:text-black">
                    <FaPlay />
                  </div>
                  <span className="flex items-center font-[600]">
                    Watch tutorial
                  </span>
                </div>
              </div>

              <div className="hidden md:block border-l-[1px] border-gray-200 mx-6"></div>

              {/* right content */}
              <div className="md:w-[50%] w-full md:mx-24 md:py-24 flex flex-col md:mt-0 mt-8 md:p-0 p-4">
                <div className="flex flex-row justify-between md:py-6 py-3 border-b transform transition-transform duration-300 hover:scale-105">
                  <div>
                    <h1 className="font-bold text-[14px]">Shared materials</h1>
                    <span className="text-secondry md:text-[10px] text-[10px] font-[450]">
                      Create, enable and use across your team
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#C3B4ED]">
                    <FiToggleLeft />
                  </div>
                </div>

                <div className="flex flex-row justify-between md:py-6 py-3 border-b transform transition-transform duration-300 hover:scale-105">
                  <div>
                    <h1 className="font-bold text-[14px]">Live interaction</h1>
                    <span className="text-secondry md:text-[10px] text-[10px] font-[450]">
                      Create, enable and use across your team
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#B5DFEC]">
                    <LuMouse />
                  </div>
                </div>

                <div className="flex flex-row justify-between md:py-6 py-3 transform transition-transform duration-300 hover:scale-105">
                  <div>
                    <h1 className="font-bold text-[14px]">
                      Realtime colloboration
                    </h1>
                    <span className="text-secondry md:text-[10px] text-[10px] font-[450]">
                      Create, enable and use across your team
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#C2DAB2]">
                    <PiLightningBold />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh section */}
      <section>
        <div className="container poppins-regular">
          <div className="bg-primary flex md:flex-row flex-col rounded-lg">
            {/* left content */}
            <div className="md:w-[50%] md:mx-24 md:py-24 flex flex-col md:gap-16 md:p-0 p-4">
              {/* text */}
              <div className="text-center md:text-start">
                <h1 className="text-[30px] text-black font-[600] md:text-[40px] md:leading-[50px] leading-[40px] md:w-[350px]">
                  Build simple or complex models.
                </h1>
                <p className="text-secondry md:text-[18px] text-[22px] font-[450] md:leading-[25px] md:w-[90%] md:mt-4 mt-2">
                  Amet minim mollit non deserunt ullamco est.
                </p>
              </div>

              {/* watch button */}
              <div className="flex flex-row md:gap-8 gap-4 md:justify-start justify-center md:mt-0 mt-4">
                <div className="p-5 bg-blue-500 rounded-full text-white w-14 flex justify-center transition duration-300 hover:bg-[#EEEEEE] hover:text-black">
                  <FaPlay />
                </div>
                <span className="flex items-center font-[600]">
                  Watch tutorial
                </span>
              </div>
            </div>

            <div className="hidden md:block flex justify-center items-center bg-gray-100">
              <div className="relative w-[1px] bg-gray-200 h-full">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2 top-[240px] flex justify-center items-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="absolute w-4 h-4 bg-purple-400 rounded-full left-1/2 transform -translate-x-1/2 top-[280px]"></div>
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full left-1/2 transform -translate-x-1/2 top-[320px]"></div>
                <div className="absolute w-4 h-4 bg-green-400 rounded-full left-1/2 transform -translate-x-1/2 top-[360px]"></div>
              </div>
            </div>

            {/* right content */}
            <div className="md:w-[50%] md:mx-24 md:py-24 flex flex-col md:p-0 p-4">
              <img
                src={RoudedImage}
                alt="image rounded"
                className="mix-blend-normal animate-pulse duration-75 bg-white rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eight section */}
      <section className="bg-primary">
        <div className="container poppins-regular">
          {/* main text */}
          <h1 className="text-[50px] text-black font-[600] md:text-[55px] md:leading-[70px] leading-[55px] flex justify-center text-center">
            People are talking...
          </h1>
          <p className="text-secondry md:text-[18px] text-[22px] font-[450] md:leading-[25px] md:mt-4 mt-4 text-center">
            Amet minim mollit non deserunt ullamco est.
          </p>

          <div className="flex flex-col md:mt-4">
            {/* cards */}
            <div className="flex md:flex-row flex-col md:justify-between md:gap-2">
              <div className="relative flex flex-col mt-6 text-blak bg-white bg-clip-border rounded-xl md:w-[425px] w-full transform transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="">
                    <img src={user1} alt="user image" />
                  </div>
                  <p className="block font-sans text-base font-[500] leading-relaxed text-secondry md:py-8 py-8 md:w-[90%]">
                    &quot;It has been an absolute pleasure dealing with Scan
                    during the lockdown. Our church began to livestream our
                    services, and Scan ...
                  </p>
                </div>
                <div className="p-6 pt-[10px] font-[600]">
                  <span>Emine Isik</span>
                  <p className="text-secondry text-[13px]">Nursing Assistant</p>
                </div>
              </div>

              <div className="relative flex flex-col mt-6 text-blak bg-white bg-clip-border rounded-xl md:w-[425px] w-full transform transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="">
                    <img src={user2} alt="user image" />
                  </div>
                  <p className="block font-sans text-base font-[500] leading-relaxed text-secondry md:py-8 py-8">
                    &quot;I was also lucky enough to read @Coding Career early
                    and I was thoroughly blown away! It&apos;s the book wish I
                    had when I started my dev ...
                  </p>
                </div>
                <div className="p-6 pt-[10px] font-[600]">
                  <span>Fattum Bozok</span>
                  <p className="text-secondry text-[13px]">Web Designer</p>
                </div>
              </div>

              <div className="relative flex flex-col mt-6 text-blak bg-white bg-clip-border rounded-xl md:w-[425px] w-full transform transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="">
                    <img src={user3} alt="user image" />
                  </div>
                  <p className="block font-sans text-base font-[500] leading-relaxed text-secondry md:py-8 py-8">
                    &quot; Wow! The immense wealth of knowledge and experience
                    shared in &quot;The Coding Career Handbook &quot;cannot be
                    overstated. I love how ...
                  </p>
                </div>
                <div className="p-6 pt-[10px] font-[600]">
                  <span>Veli Dincer</span>
                  <p className="text-secondry text-[13px]">Dog Trainer</p>
                </div>
              </div>
            </div>

            {/* cards 2nd row */}
            <div className="flex md:flex-row flex-col md:justify-between md:gap-2">
              <div className="relative flex flex-col mt-6 text-blak bg-white bg-clip-border rounded-xl md:w-[425px] w-full transform transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="">
                    <img src={user4} alt="user image" />
                  </div>
                  <p className="block font-sans text-base font-[500] leading-relaxed text-secondry md:py-8 py-8 md:w-[90%]">
                    &quot;The links to high- value blog posts already make the
                    book worth it, never mind the amazing insight and context
                    provided by Shawn. Must bu ...
                  </p>
                </div>

                <div className="p-6 pt-[10px] font-[600]">
                  <span>Mansur Sarica</span>
                  <p className="text-secondry text-[13px]">Medical Assistant</p>
                </div>
              </div>

              <div className="relative flex flex-col mt-6 text-blak bg-white bg-clip-border rounded-xl md:w-[425px] w-full transform transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="">
                    <img src={user5} alt="user image" />
                  </div>
                  <p className="block font-sans text-base font-[500] leading-relaxed text-secondry md:py-8 py-8">
                    &quot;For anyone looking for career advice as a coder but is
                    tired of being told they have to do X or never do Y. Shawn
                    is sharing his personal ...
                  </p>
                </div>
                <div className="p-6 pt-[10px] font-[600]">
                  <span>M. Kemal Yilmaz</span>
                  <p className="text-secondry text-[13px]">
                    President of Sales
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col mt-6 text-blak bg-white bg-clip-border rounded-xl md:w-[425px] w-full transform transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="">
                    <img src={user6} alt="user image" />
                  </div>
                  <p className="block font-sans text-base font-[500] leading-relaxed text-secondry md:py-8 py-8">
                    &quot;I wish I had this book when I was switching jobs. It
                    helps you understand what skills you should leverage and
                    really encourages you ...
                  </p>
                </div>
                <div className="p-6 pt-[10px] font-[600]">
                  <span>Emine Simsek</span>
                  <p className="text-secondry text-[13px]">
                    Marketing Coordinator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nineth section */}
      <section>
        {/* main text */}
        <div className="md:w-[60%] flex items-center justify-center text-center mx-auto h-full container poppins-regular md:mb-20">
          <h1 className="text-[50px] text-black font-[600] md:text-[55px] md:leading-[70px] leading-[50px]">
            Delightfully simple & powerful 3D design tool
          </h1>
        </div>

        <div className="flex items-center justify-center md:mt-8 mt-12 container poppins-regular md:mb-32">
          <div className="absolute md:w-full w-[90%] max-w-4xl bg-[#26282B] rounded-xl shadow-lg md:mt-[600px] mt-[300px]">
            <div className="relative">
              <div className="w-full md:h-12 h-8 bg-[#191B1E] rounded-tr-xl rounded-tl-xl">
                <div className="absolute top-2 right-2">
                  <div className="rounded-full bg-blue-500 md:w-8 w-5 md:h-8 h-5 flex justify-center items-center">
                    <div className="rounded-full bg-white md:w-4 md:h-4 w-2.5 h-2.5"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="md:w-44 w-24 md:h-[91.5%] h-[85%] bg-[#313336] absolute rounded-bl-xl"></div>
            </div>

            {/* middle image */}
            <div className="flex justify-center itm">
              <img
                src={middleImg}
                alt="Middle Image"
                className="w-[100%] h-auto"
              />
            </div>
            {/* ball images */}
            <div className="absolute md:top-20 md:-translate-x-1/2 -translate-x-5 top-10">
              <img
                src={Ball1}
                alt="black-ball"
                className="rounded-full md:w-full w-[50%] mix-blend-color-dodge animate-spin duration-95"
              />
            </div>

            <div className="absolute md:top-[350px] md:right-0 right-0  md:translate-x-1/2 translate-x-4 top-[180px]">
              <img
                src={Ball2}
                alt="green-ball"
                className="rounded-full md:w-full w-[50%] mix-blend-color-dodge animate-spin duration-95"
              />
            </div>

            <div className="absolute md:top-[275px] top-[120px] left-8">
              <img
                src={Ball3}
                alt="yellow-ball"
                className="rounded-full w-10 md:w-12 mix-blend-normal animate-pulse duration-100"
              />
            </div>

            <div className="absolute md:top-[145px] top-[50px] md:-right-16 -right-4">
              <img
                src={Ball4}
                alt="blue-ball"
                className="rounded-full w-10 mix-blend-normal animate-pulse duration-100"
              />
            </div>
          </div>
        </div>

        {/* double color bg */}
        <div className="w-full md:h-[50%] h-[200px] flex md:flex-row flex-row md:mt-[450px] mt-[150px]">
          <div className="bg-gradient-to-r from-blue-300 to-blue-200 md:w-2/3 w-full md:p-[200px] p-[100px]"></div>
          <div className="bg-[#195DC9] md:w-1/3 w-full p-2"></div>
        </div>
      </section>

      {/* Last Section */}
      <section>
        <div className="container mx-auto px-4 poppins-regular md:mb-16">
          <div className="flex justify-center relative">
            <div className="absolute md:w-[730px] md:h-[730px] w-[300px] h-[300px] rounded-full border border-gray-200 flex justify-center items-center">
              <div className="md:w-[525px] md:h-[525px] w-[210px] h-[210px] rounded-full border border-gray-200 flex justify-center items-center">
                <div className="md:w-[300px] md:h-[300px] w-[120px] h-[120px] rounded-full border border-gray-200"></div>
              </div>
            </div>
            <img
              src={Emojies}
              alt="Emojies"
              className="absolute md:w-[800px] w-[200px]"
            />
          </div>
          <div className="flex justify-between">
            {/* Floating upper icons */}
            <img
              src={Icon02}
              alt="Icon 1"
              className="md:top-10 md:left-10 top-5 left-5 md:w-32 md:h-32 w-16 h-16"
            />
            <img
              src={Icon01}
              alt="Icon 2"
              className="md:top-10 md:right-10 top-5 right-5 md:w-32 md:h-32 w-16 h-16"
            />
          </div>
          <div className="relative md:h-[100%] flex flex-col items-center justify-center overflow-hidden">
            {/* middle text */}
            <div className="text-center md:space-y-6 space-y-2 md:mt-0 mt-[40px] md:mt-[100px]">
              <h1 className="md:text-[50px] text-[30px] md:leading-[40px] leading-[30px] font-bold text-gray-900">
                Ready to use Paradox?
              </h1>
              <p className="text-gray-600 md:text-[20px] text-[16px]">
                Join thousand users and teams in the community
              </p>
              {/* user Images */}
              <div className="flex justify-center -space-x-3">
                <img
                  src={user1}
                  alt="User 1"
                  className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                />
                <img
                  src={user2}
                  alt="User 2"
                  className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                />
                <img
                  src={user3}
                  alt="User 3"
                  className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                />
                <img
                  src={user4}
                  alt="User 4"
                  className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                />
                <img
                  src={user5}
                  alt="User 5"
                  className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                />
              </div>
              <button className="bg-blue-500 text-white md:px-4 md:py-2 px-2 py-1 rounded-full hover:bg-blue-600 transition duration-300">
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* Floating below icons */}
        <div className="flex justify-between md:mb-16">
          <img
            src={Icon04}
            alt="Icon 1"
            className="md:bottom-2 bottom-8 md:left-0 left-1 md:w-32 md:h-32 w-16 h-16"
          />
          <img
            src={Icon03}
            alt="Icon 2"
            className="md:bottom-2 md:right-0 bottom-8 right-1 md:w-32 md:h-32 w-16 h-16"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
