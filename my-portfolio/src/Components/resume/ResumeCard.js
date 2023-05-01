import React from "react";

const ResumeCard = ({ title, subTitle, result, desc }) => {
  return (
    <div className="w-full h-1/3 group flex ">
      <div className="w-10 h-[6px] bg-gray-400 mt-16 relative"></div>
      <div className="w-full bg-white hover:bg-gray-200 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne border-l-[2px] border-gray-400 hover:border-black">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold group-hover:text-black duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-black group-hover:text-black duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="w-20 h-10 text-black bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <div>
          <p className="text-base font-medium text-black group-hover:text-gray-700 duration-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
