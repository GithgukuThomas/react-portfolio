import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { MdBusinessCenter } from "react-icons/md";
import Title from "../layout/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" desc="What i do" />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta."
          icon={<MdBusinessCenter />}
        />
        <Card
          title="App Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design (FIGMA) "
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
