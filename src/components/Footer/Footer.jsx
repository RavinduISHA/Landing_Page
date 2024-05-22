import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const productlinks = [
  {
    path: "/",
    display: "Features",
  },
  {
    path: "/",
    display: "Pricing",
  },
  {
    path: "/",
    display: "Download",
  },
];

const companylinks = [
  {
    path: "/",
    display: "About",
  },
  {
    path: "/",
    display: "Blog",
  },
  {
    path: "/",
    display: "Contact",
  },
  {
    path: "/",
    display: "Sign up",
  },
];

const communitylinks = [
  {
    path: "/",
    display: "Help",
  },
  {
    path: "/",
    display: "Discord",
  },
  {
    path: "/",
    display: "Twitter",
  },
  {
    path: "/",
    display: "Linked In",
  },
];

function Footer() {
  return (
    <footer className="border poppins-regular">
      <div className="container">
        {/* footer part 1 */}
        <div className="grid justify-center md:grid-cols-4 md:flex-row flex-wrap md:gap-[30px] text-center">
          <div className="md:border-r pb-10 pt-10 sm:justify-center md:text-left">
            <h2 className="font-bold text-black text-md md:mb-6 mb-4">
              Product
            </h2>
            <ul>
              {productlinks.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-[#80878B]"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:border-r md:pt-10 md:text-left">
            <h2 className="font-bold text-black text-md md:mb-6 mb-4">
              Company
            </h2>
            <ul>
              {companylinks.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-[#80878B]"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:border-r md:pt-10 pt-4 md:text-left">
            <h2 className="font-bold text-black text-md md:mb-6 mb-4">
              Community
            </h2>
            <ul>
              {communitylinks.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-[#80878B]"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-10">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <img src={Logo} alt="Logo" className="w-16 h-16" />
              <h2 className="text-black text-2xl mt-2 md:ml-4 md:mt-2">
                Paradox
              </h2>
            </div>
            <p className="text-[#80878B] mt-4 md:mt-2 text-center md:text-left">
              The Real-Time and powerful 3D design for web
            </p>
          </div>
        </div>
      </div>
      {/* footer part 2 */}
      <div className="flex justify-between border-t md:py-4 py-4 text-[#80878B] container">
        <div className="">&#169;2022 - U1B,Ltd.</div>
        <div className="">Terms & Condition,Privacy</div>
      </div>
    </footer>
  );
}

export default Footer;
