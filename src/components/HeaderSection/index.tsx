import logo from "../../assets/logo.png";
import { motion } from "motion/react";

const HeaderSection = () => {
  return (
    <header className="flex flex-col sm:flex-row gap-12 items-center justify-center">
      <img
        src={logo}
        alt="logo"
        className="w-40 h-40 rounded-xl shadow-xl shadow-emerald-700 hover:shadow-amber-500"
      />
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-2xl sm:text-4xl">
          Kab👀tar |{" "}
          <span className="italic">
            Effortless File Sharing Without Installation on Both Devices{" "}
          </span>
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-emerald-600 italic">
          Send files from your mobile to PC or between PCs without requiring
          installation on the sender's device. Fast, secure, and ad-free.
        </h2>
        <div className="flex gap-12">
          <motion.a
            className="hover:bg-emerald-600 font-bold text-sm sm:text-lg p-4 rounded-xl w-[max-content] text-center border-2 border-emerald-600 hover:shadow-lg  shadow-amber-500 transition-all duration-100"
            href="https://github.com/RitikJaiswal75/kabootar/releases/latest"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download
          </motion.a>
          <motion.a
            href="https://github.com/RitikJaiswal75/kabootar"
            className="hover:bg-emerald-600 font-bold text-sm sm:text-lg py-4 px-6 rounded-xl w-[max-content] text-center flex gap-2 items-center border-2 border-emerald-600 hover:shadow-lg shadow-amber-500 transition-all duration-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="ri-github-fill"></i>
            Github
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
