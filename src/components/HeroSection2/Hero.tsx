import Image from "next/image";

import { assets } from "../../../public/assets/assets";

const Header = () => {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
      <div className="flex flex-col md:flex-row flex-wrap  rounded-lg  px-6 md:px-10 lg:px-20 ">
        {/* left side */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py[10vw] md:mb-[30px]  ">
          <p className="text-3xl md:text-4xl lg:text-5xl text-blackAccent font-semibold leading-tight md:leading-tight lg:leading-tight">
            Reserve Your Stay with  <br /> a Trusted Partner
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-blackAccent text-sm font-light">
            <Image className="w-28" src={assets.group_profiles} alt="" />
            <p>
              Simply browse through our extensive list of trusted hotels, I book
              your hotels hassle-free. <br className="hidden sm:block" />
            </p>
          </div>
          <a
            className="flex items-center gap-2 bg-blackAccent px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
            href="/rooms"
          >
            Book rooms
            <Image className="w-3" src={assets.arrow_icon} alt="" />
          </a>
        </div>
        {/* {right side} */}
        <div className="md:w-1/2 relative">
          <Image
            className="w-full md:absolute bottom-0 h-auto rounded-lg"
            src={assets.header_img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
