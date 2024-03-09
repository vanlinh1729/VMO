import React from "react";
import classNames from "classnames";
import { FaChevronUp } from "react-icons/fa";
import useScroll from "../../hooks/useScroll";
import { motion } from "framer-motion";

export default function SendTop() {
  const { scrollPosition } = useScroll();

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrollPosition >= 60 && (
        <motion.div
          initial={{ y: "50%", opacity: 0, scale: 0.1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: "50%", opacity: 0, transition: { duration: 0.5 } }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className={classNames(
            "bg-secondary w-[60px] h-[60px] text-[26px]  z-50 fixed bottom-28 right-28 text-white flex items-center justify-center"
          )}
          onClick={handleToTop}
        >
          <FaChevronUp></FaChevronUp>
        </motion.div>
      )}
    </>
  );
}
