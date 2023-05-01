import React from "react";
import { bannerImg } from "../../assets/index";

const Rightbanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img
        className="w-[500px] h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[450px] h-[500px] bg-gradient-to-r from-gray-900 to-gray-600 shadow-shadowOne flex justify-center items-center rounded-md rounded-t-[10px] rounded-tl-[350px]"></div>
    </div>
  );
};

export default Rightbanner;
