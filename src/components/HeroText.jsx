import { FlipWords } from "./FlipWords";
import { motion as Motion } from "motion/react";

const HeroText = () => {
  const words = ["secure", "user-focused", "scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View  */}
      <div className="flex-col hidden md:flex c-space">
        <Motion.h1
          className="text-5xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hello, I'm Sushant
        </Motion.h1>
        <div className="flex flex-col items-start">
          <Motion.p
            className="text-3xl font-medium  text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A full-stack developer dedicated to craft
            <br /> seamless and impactful experiences that're
          </Motion.p>
          <Motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-7xl"
            />
          </Motion.div>
          <Motion.p
            className="text-3xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Great code should feel like your favorite coffee:
            <br />
            <span className="text-neutral-400">
              smooth, and something you actually enjoy
            </span>
          </Motion.p>
          <Motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
            className="flex gap-2 items-center text-neutral-400
          mt-5 border border-white/20 rounded-full px-4 py-3 bg-white/10 backdrop-blur-sm"
          >
            <span className="text-sm text-white">Open to opportunities</span>
            <div className="flex space-x-1" aria-hidden="true">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
            </div>
          </Motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <Motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hello, I'm Sushant
        </Motion.p>
        <div>
          <Motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Crafting
          </Motion.p>
          <Motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </Motion.div>
          <Motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Experiences
          </Motion.p>
        </div>
      </div>
    </div>
  );
};
export default HeroText;
