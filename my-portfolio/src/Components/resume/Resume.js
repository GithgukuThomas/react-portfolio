import React, { useState } from "react";
import Title from "../layout/Title";
import Achivements from "./Achivements";
import { Education } from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [skillsData, setSkillsData] = useState(false);
  const [achivementsData, setAchivementsData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col justify-center text-center items-center">
        <Title title="7+ YEARS OF EXPERIENCE" desc="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillsData(false) &
              setExperienceData(false) &
              setAchivementsData(false)
            }
            className={`${
              educationData ? "border-black rounded-lg" : " border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillsData(true) &
              setExperienceData(false) &
              setAchivementsData(false)
            }
            className={`${
              skillsData ? "border-black rounded-lg" : " border-transparent"
            } resumeLi`}
          >
            Professional
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillsData(false) &
              setExperienceData(true) &
              setAchivementsData(false)
            }
            className={`${
              experienceData ? "border-black rounded-lg" : " border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillsData(false) &
              setExperienceData(false) &
              setAchivementsData(true)
            }
            className={`${
              achivementsData
                ? "border-black rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Achivements
          </li>
        </ul>
      </div>
      <div>
        {educationData && <Education />}
        {skillsData && <Skills />}
        {experienceData && <Experience />}
        {achivementsData && <Achivements />}
        {/* <Education /> */}
        {/* <Experience /> */}
        {/* <Skills /> */}
        {/* <Achivements /> */}
      </div>
    </section>
  );
};

export default Resume;
