import { motion as Motion, AnimatePresence } from "motion/react";

const Alert = ({ type, text }) => {
  const alertVarients = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      <Motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVarients}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`p-2 ${
            type === "error" ? "bg-red-800" : "bg-royal"
          } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5 shadow-lg`}
        >
          <p
            className={`flex rounded-full ${
              type === "error" ? "bg-red-500" : "bg-lavender"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {type === "error" ? "Failed" : "success"}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      </Motion.div>
    </AnimatePresence>
  );
};
export default Alert;
