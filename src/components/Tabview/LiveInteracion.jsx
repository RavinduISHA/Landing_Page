const LiveInteracion = () => {
  return (
    <section className="container poppins-regular">
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col md:gap-12 md:ml-36 md:w-[50%] md:mt-12">
          {/* text */}
          <div className="text-center md:text-start">
            <h1 className="text-[70px] text-black font-[500] md:text-[100px] md:leading-[70px] leading-[50px]">
              Live
            </h1>
            <p className="text-secondry md:text-[20px] text-[22px] md:font-medium font-[450] md:leading-[25px] md:mt-16 py-8 w-full md:w-[60%] md:py-0 lg:w-[90%]">
              Interactive experiences for real-time collaboration and feedback.
            </p>
          </div>

          {/* interact button */}
          <div className="md:w-[35%] lg:w-[50%] flex justify-center md:justify-start">
            <button className="p-3 bg-[#2377FC] rounded-full text-white hover:bg-blue-600 transition duration-300">
              Start Interaction
            </button>
          </div>
        </div>

        {/* interaction showcase */}
        <div className="flex md:w-[50%] mt-12 md:mt-0 md:items-start md:justify-start items-center justify-center">
          <div className="relative md:w-[350px] md:h-[350px] w-[250px] h-[250px] rounded-full bg-[#CCE7BE] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              <div className="w-8 h-8 bg-white rounded-full transform md:translate-x-36 translate-x-[100px] flex items-center justify-center mix-blend-normal animate-pulse duration-75">
                <div className="w-3 h-3 bg-blue-500 rounded-full transform"></div>
              </div>
            </div>
            {/* middle content */}
            <div className="flex flex-col items-center justify-center w-40 h-40 md:w-60 md:h-60 rounded-full bg-white text-center">
              <h1 className="md:text-[45px] font-[600] text-[35px]">Live</h1>
              <p className="text-gray-500">Interaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveInteracion;
