import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { TechStack } from "../components/TechStack";
import { SocialDock } from "../components/SocialDock";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me!</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* GRID - 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hii, I'm sushant aka Sushiee</p>
            <p className="subtext">
              Caffeine-powered full-stack developer who speaks fluent JavaScript
              and broken English. I turn bugs into learning opportunities
              because optimism is key. When not coding, I'm either stuck in
              Valorant or convincing myself that tutorials count as "studying".
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* GRID - 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex flex-col md:flex-row items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500">
              Follow My, Chaos!
            </p>
            <figure className="flex items-center justify-center w-full md:w-auto">
              <SocialDock />
            </figure>
          </div>
        </div>
        {/* GRID - 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in India (IST), available for global collaborations. I'm
              flexible with time zones and love working with international
              teams.
            </p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
        </div>
        {/* GRID - 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Ready to turn your idea into reality? Let's build something
              amazing together!
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* GRID - 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech I Love</p>
            <p className="subtext">
              Crafting applications with cutting-edge tools and frameworks. Each
              project gets the perfect tech combination for optimal performance.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
