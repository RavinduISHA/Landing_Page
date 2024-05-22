import Logo from "../../assets/LogoF.png";
import { TfiLineDouble } from "react-icons/tfi";

function Header() {
  return (
    <header className="header flex items-center poppins-regular">
      <div className="container">
        <div className="flex items-center justify-between border-b py-6">
          {/* Logo */}
          <div className="">
            <img src={Logo} alt="Logo Image" />
          </div>

          {/* Menu if needed */}

          {/* Right Nav */}
          <div className="flex items-center gap-8">
            <button className="bg-[#EEEEEE] py-2 px-6 font-[600] h-[44px] flex items-center justify-center rounded-[30px] transition duration-300 hover:bg-[#2377FC] hover:text-white">
              Sign in
            </button>

            <span>
              <TfiLineDouble className="w-8 h-8" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
