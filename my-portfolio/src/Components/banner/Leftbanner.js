import React from "react";
import { FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { CiFacebook } from "react-icons/ci";

const Leftbanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Design"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm <span className="text-designColor capitalize">Thomas </span>
        </h1>
        <h2 className="text-4xl font-bold text-black">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#000000"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding through each and every interaction. I'm not adding motion
          just to spurce things up, but doing it in ways that.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://www.facebook.com/thomas.hulk.33/"
                target="_blank"
              >
                <CiFacebook />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://twitter.com/Thomashulk4" target="_blank">
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/thomasgithuku/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best skill on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbanner;
