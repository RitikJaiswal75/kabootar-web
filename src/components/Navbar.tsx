import { motion, useScroll } from "motion/react";
import logo from "../assets/logo.webp";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = logo;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);
  return (
    <nav className="flex items-center justify-between w-full px-2 py-2 bg-slate-950 shadow-emerald-900 shadow-lg mb-12 sticky top-0 z-50">
      <div className="flex items-center justify-center gap-2">
        {imageLoaded ? (
          <img
            src={logo}
            onLoad={() => setImageLoaded(true)}
            alt="Kabootar_logo"
            className="w-10 h-10 rounded-xl"
          />
        ) : (
          <Blurhash
            hash="LCBN1iIU00%M?bM{M{xu00xu~qIU"
            width={40}
            height={40}
            resolutionX={10}
            resolutionY={10}
            className="shadow-xl shadow-emerald-700 hover:shadow-amber-500"
          />
        )}
        <div className="flex items-center gap-0 justify-center">
          <h2 className="font-bold text-3xl animate-bounce">K</h2>
          <h2 className="font-bold text-xl">ab</h2>
          👀
          <h2 className="font-bold text-xl">tar</h2>
        </div>
      </div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-emerald-700 absolute top-0 left-0 z-50 h-1 w-full origin-left"
      />
    </nav>
  );
};

export default Navbar;
