'use client'
import React from "react";
import CyberManniquin from "../3D/CyberManniquin";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";
import TechStack from "../sections/TechStack";
import { ContainerTextFlip } from "../ui/ContainerTextFlip";

const HeroSection = () => {
  return (
    <div className="h-screen flex mt-18">
      <div className="w-[60%] flex flex-col">
        <div className="h-[60%] flex flex-col items-center justify-evenly mt-15">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-semibold text-transparent bg-gradient-to-b from-[#9ca3af] via-[#d1d5db] to-white bg-clip-text relative z-20 text-left max-w-[80%] mt-10 leading-tight -ml-16">
            We build things
            <br />
            that are{" "}
            <span className="min-w-[9rem] text-left">
              <ContainerTextFlip
                words={["Smart", "Sharp", "Clean", "Agile"]}
                interval={2500}
                textClassName="text-indigo-600 dark:text-emerald-400"
                animationDuration={800}
              />
            </span>
          </h1>

          <p className="text-white max-w-[80%] text-left">
            Fueled by creativity and collaboration, we blend innovation with
            precision to bring every project to life — from concept to code.
          </p>
        </div>
        <div className="h-[40%] flex">
          <div className="h-full w-[40%] flex flex-col pl-16 gap-3 justify-center">
            <p className="text-gray-500 text-[0.7rem]">
              Meet the minds behind the magic.
            </p>
            <div className="flex">
              <AnimatedTooltip
                items={[
                  {
                    id: 1,
                    name: "Debasis Khamari",
                    designation: "Full Stack Dev",
                    image:
                      "https://media.licdn.com/dms/image/v2/D5603AQE0BAfOCo78Kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709400741407?e=1751500800&v=beta&t=Cbb_YoCdO_0pmMpTCpHcM3cvltMFq-gihMEhEnayXWY",
                  },
                  {
                    id: 2,
                    name: "Subinay Panda",
                    designation: "Full Stack Dev",
                    image:
                      "https://media.licdn.com/dms/image/v2/D5603AQGijYj4ri8KOw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724157276651?e=1751500800&v=beta&t=6FaIZu2Iw76bQN4SIY2NSZz3smIVwBMz9y-COVmdG10",
                  },
                  {
                    id: 3,
                    name: "Aman Prasad",
                    designation: "Full Stack Dev",
                    image:
                      "https://media.licdn.com/dms/image/v2/D4D03AQFKP2llEsP8mQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694884348553?e=1751500800&v=beta&t=YsQoQ1llBp44FLW30Kv6phlaIu_SKYUlH2X7vg24ZAk",
                  },
                  {
                    id: 4,
                    name: "Bilwamoy Chakraborty",
                    designation: "Full Stack Dev",
                    image:
                      "https://media.licdn.com/dms/image/v2/D4E35AQFOoY0vMDxG4Q/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1739342480177?e=1746637200&v=beta&t=ojszBGiEr3s47OPz4B5OB3ernpihIt-RbwQQhW3Oo-w",
                  },
                ]}
              />
            </div>
          </div>
          <div className="h-full w-[60%] flex items-center justify-center">
            <TechStack />
          </div>
        </div>
      </div>

      <div className="w-[40%]">
        <CyberManniquin />
      </div>
    </div>
  );
};

export default HeroSection;
