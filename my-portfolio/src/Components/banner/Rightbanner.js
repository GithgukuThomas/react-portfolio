import React from "react";
import { bannerImg } from "../../assets/index";

const Rightbanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[450px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[450px] lgl:h-[500px] bg-gradient-to-r from-gray-900 to-gray-600 shadow-shadowOne flex justify-center items-center rounded-md rounded-t-[10px] rounded-tl-[350px]"></div>
    </div>
  );
};

export default Rightbanner;
