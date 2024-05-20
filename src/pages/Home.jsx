import { Link } from "react-router-dom";

// Icons
import { SiFramer } from "react-icons/si";
import { TbBrandWebflow } from "react-icons/tb";
import { PiRobotFill, PiLightningBold } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { FiToggleLeft } from "react-icons/fi";
import { LuMouse } from "react-icons/lu";
import { GoArrowDown } from "react-icons/go";
import { AiOutlineArrowRight } from "react-icons/ai";

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

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary">
        <div className="container poppins-regular">
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              {/* Content */}
              <div className="lg:w-1/3 text-center md:text-start">
                <h1 className="text-[70px] text-black font-[600] md:text-[85px] md:leading-[70px] leading-[70px]">
                  Paradox
                </h1>
                <p className="text-secondry md:text-[25px] text-[22px] font-[450] md:leading-[25px] md:w-3/4 md:mt-4">
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
          <div className="flex md:flex-row flex-col border-b pb-12">
            {/* text area */}
            <div className="flex md:flex-col flex-col md:w-[30%] md:gap-[75px] text-center md:text-start">
              <div>
                <h1 className="text-[50px] text-black font-[600] md:text-[55px] md:leading-[70px] leading-[50px]">
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
            <div className="md:w-2/3 flex items-end justify-end">
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
              <div>
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
                <div className="md:mt-4 mt-2">
                  <h1 className="font-bold">3D team assets</h1>
                  <p className="text-secondry text-[14px]">
                    Make your design more attractive.
                  </p>
                </div>
              </div>
              <div>
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
              <div>
                <div className="relative">
                  <img
                    className="w-full h-72 object-cover rounded-xl"
                    src={greenCard}
                    alt="Card Image"
                  />

                  <div className="absolute top-[40%] left-[30%] bg-white rounded-full p-4 shadow-lg flex items-center space-x-2">
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
        <div className="container poppins-regular">
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col md:gap-12 md:mx-24">
              {/* text */}
              <div className="text-center md:text-start md:w-[50%]">
                <h1 className="text-[50px] text-black font-[500] md:text-[170px] md:leading-[70px] leading-[50px]">
                  8x
                </h1>
                <p className="text-secondry md:text-[20px] text-[22px] font-[450] md:leading-[25px] md:mt-16 mt-2 md:w-full">
                  Faster live render than other 3D design app for web .
                </p>
              </div>

              {/* launch button */}
              <button className="p-3 bg-blue-500 rounded-full text-white md:w-[35%] ">
                Launch a demo
              </button>
            </div>

            {/* circle area */}
            {/* <div className="flex items-center justify-center h-screen ">
              <div className="relative w-56 h-56 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
                  <div className="w-4 h-4 bg-blue-500 rounded-full transform translate-x-24"></div>
                </div>
                <div className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-white text-center">
                  <h1 className="text-xl font-bold">Render</h1>
                  <p className="text-gray-500">Response</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="bg-[#F9FAFB]">
        <div className="container poppins-regular">
          <div className="flex md:flex-row flex-col">
            {/* Image */}
            <div className="md:w-2/3">
              <img src={sec5Image} alt="intregate 3d image" />
            </div>
            {/* content */}
            <div className="md:w-[40%] flex flex-col md:gap-16 gap-[17px] md:mt-40">
              {/* text */}
              <div className="text-center md:text-start">
                <h1 className="text-[50px] text-black font-[600] md:text-[55px] md:leading-[70px] leading-[50px]">
                  Integrate your 3D designs
                </h1>
                <p className="text-secondry md:text-[25px] text-[22px] font-[450] md:leading-[25px] md:w-[90%] md:mt-4 mt-2">
                  Without any effort, save a ton of time .
                </p>
              </div>

              {/* Icon */}
              <div className="flex flex-col">
                <div className="p-4 border-t border-b flex flex-row gap-10">
                  <div className="p-3 rounded-md bg-[#C3B4ED] md:w-[10%] border-b flex justify-center">
                    <SiFramer />
                  </div>
                  <span className="font-bold text-[15px] items-center justify-center flex">
                    Framer
                  </span>
                </div>

                <div className="p-4 border-b flex flex-row gap-10">
                  <div className="p-3 rounded-md bg-[#B5DFEC] md:w-[10%] border-b flex justify-center">
                    <TbBrandWebflow />
                  </div>
                  <span className="font-bold text-[15px] items-center justify-center flex">
                    Webflow
                  </span>
                </div>

                <div className="p-4 flex flex-row gap-10">
                  <div className="p-3 rounded-md bg-[#C2DAB2] md:w-[10%] border-b flex justify-center">
                    <PiRobotFill className="" />
                  </div>
                  <span className="font-bold text-[15px] items-center justify-center flex">
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
              <div className="md:w-[50%] md:mx-24 md:py-24 flex flex-col md:gap-16">
                {/* text */}
                <div>
                  <h1 className="text-[50px] text-black font-[600] md:text-[40px] md:leading-[50px] leading-[50px] md:w-[300px]">
                    Set up your perfect scene.
                  </h1>
                  <p className="text-secondry md:text-[18px] text-[22px] font-[450] md:leading-[25px] md:w-[90%] md:mt-4">
                    Amet minim mollit non deserunt ullamco est.
                  </p>
                </div>

                {/* watch button */}
                <div className="flex flex-row md:gap-8">
                  <div className="p-5 bg-blue-500 rounded-full text-white w-14 flex justify-center">
                    <FaPlay />
                  </div>
                  <span className="flex items-center font-[600]">
                    Watch tutorial
                  </span>
                </div>
              </div>

              <div className="hidden md:block border-l-[1px] border-gray-200 mx-6"></div>

              {/* right content */}
              <div className="md:w-[50%] md:mx-24 md:py-24 flex flex-col">
                <div className="flex flex-row md:justify-between md:py-6 border-b">
                  <div>
                    <h1 className="font-bold text-[14px]">Shared materials</h1>
                    <span className="text-secondry md:text-[10px] text-[8px] font-[450]">
                      Create, enable and use across your team
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#C3B4ED]">
                    <FiToggleLeft />
                  </div>
                </div>

                <div className="flex flex-row md:justify-between md:py-6 border-b">
                  <div>
                    <h1 className="font-bold text-[14px]">Live interaction</h1>
                    <span className="text-secondry md:text-[10px] text-[8px] font-[450]">
                      Create, enable and use across your team
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#B5DFEC]">
                    <LuMouse />
                  </div>
                </div>

                <div className="flex flex-row md:justify-between md:py-6">
                  <div>
                    <h1 className="font-bold text-[14px]">
                      Realtime colloboration
                    </h1>
                    <span className="text-secondry md:text-[10px] text-[8px] font-[450]">
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
            <div className="md:w-[50%] md:mx-24 md:py-24 flex flex-col md:gap-16">
              {/* text */}
              <div>
                <h1 className="text-[50px] text-black font-[600] md:text-[40px] md:leading-[50px] leading-[50px] md:w-[350px]">
                  Build simple or complex models.
                </h1>
                <p className="text-secondry md:text-[18px] text-[22px] font-[450] md:leading-[25px] md:w-[90%] md:mt-4">
                  Amet minim mollit non deserunt ullamco est.
                </p>
              </div>

              {/* watch button */}
              <div className="flex flex-row md:gap-8">
                <div className="p-5 bg-blue-500 rounded-full text-white w-14 flex justify-center">
                  <FaPlay />
                </div>
                <span className="flex items-center font-[600]">
                  Watch tutorial
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center h-screen bg-gray-100">
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
            <div className="md:w-[50%] md:mx-24 md:py-24 flex flex-col">
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
          <h1 className="text-[50px] text-black font-[600] md:text-[55px] md:leading-[70px] leading-[50px] flex justify-center text-center">
            People are talking...
          </h1>
          <p className="text-secondry md:text-[18px] text-[22px] font-[450] md:leading-[25px] md:mt-4 text-center">
            Amet minim mollit non deserunt ullamco est.
          </p>

          <div className="flex flex-col md:mt-4">
            {/* cards */}
            <div className="flex md:flex-row flex-col md:justify-between">
              <div className="relative flex flex-col mt-6 text-blak bg-white bg-clip-border rounded-xl md:w-[425px] w-full transform transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="">
                    <img src={user1} alt="user image" />
                  </div>
                  <p className="block font-sans text-base font-[500] leading-relaxed text-secondry md:py-8 py-8 md:w-[90%]">
                    "It has been an absolute pleasure dealing with Scan during
                    the lockdown. Our church began to livestream our services,
                    and Scan ...
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
                    " I was also lucky enough to read @Coding Career early and I
                    was thoroughly blown away! It's the book wish I had when I
                    started my dev ...
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
                    " Wow! The immense wealth of knowledge and experience shared
                    in " The Coding Career Handbook " cannot be overstated. I
                    love how ...
                  </p>
                </div>
                <div className="p-6 pt-[10px] font-[600]">
                  <span>Veli Dincer</span>
                  <p className="text-secondry text-[13px]">Dog Trainer</p>
                </div>
              </div>
            </div>

            {/* cards 2nd row */}
            <div className="flex md:flex-row flex-col md:justify-between">
              <div className="relative flex flex-col mt-6 text-blak bg-white bg-clip-border rounded-xl md:w-[425px] w-full transform transition-transform duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="">
                    <img src={user4} alt="user image" />
                  </div>
                  <p className="block font-sans text-base font-[500] leading-relaxed text-secondry md:py-8 py-8 md:w-[90%]">
                    " The links to high- value blog posts already make the book
                    worth it, never mind the amazing insight and context
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
                    " For anyone looking for career advice as a coder but is
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
                    " I wish I had this book when I was switching jobs. It helps
                    you understand what skills you should leverage and really
                    encourages you ...
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
        <div className="container poppins-regular absolute md:mb-32">
          <div className="flex items-center justify-center h-screen ">
            <div className="relative w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg">
              {/* middle image */}
              <div className="flex justify-center">
                <img
                  src={middleImg}
                  alt="Middle Image"
                  className="w-[100%] h-auto"
                />
              </div>
              {/* ball images */}
              <div className="absolute top-20 -translate-x-1/2">
                <img src={Ball1} alt="blackball" className="rounded-full" />
              </div>

              <div className="absolute top-[350px] right-0 translate-x-1/2">
                <img src={Ball2} alt="blackball" className="rounded-full" />
              </div>

              <div className="absolute top-[275px] left-8">
                <img
                  src={Ball3}
                  alt="blackball"
                  className="rounded-full w-12"
                />
              </div>

              <div className="absolute top-[145px] -right-16">
                <img
                  src={Ball4}
                  alt="blackball"
                  className="rounded-full w-12"
                />
              </div>
            </div>
          </div>
        </div>
        {/* double color bg */}
        <div className="w-full h-[50%] flex flex-row md:mt-[450px]">
          <div className="bg-gradient-to-r from-blue-300 to-blue-200 w-2/3 p-[200px]"></div>
          <div className="bg-[#195DC9] w-1/3 p-2"></div>
        </div>
      </section>

      {/* Lase Secion */}
    </>
  );
}

export default Home;
