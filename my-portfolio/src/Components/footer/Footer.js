import React from "react";
import { logo } from "../../assets";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const footer = () => {
  return (
    <div className="w-full h-auto py-20 border-b-[1px] border-b-gray-600 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              About{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Portfolio
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Services{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Blog{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Contact{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              About{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Portfolio
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Services{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Blog{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Contact{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              About{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Portfolio
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Services{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Blog{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg hover:text-gray-400 cursor-pointer relative group">
              Contact{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-gray-400 -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
