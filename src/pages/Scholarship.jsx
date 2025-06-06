import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Hero } from "../components/Hero/Hero";

const Scholarship = () => {
  useEffect(() => {
    document.title = "Scholarship | Amal Initiative";
  }, []);
  return (
    <>
      <Helmet>
        <title>Scholarship | Amal Initiative</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      <Hero type="general">
        <div className="mx-auto flex h-full max-w-screen-md flex-col items-start justify-center gap-6 px-6 md:px-0 lg:max-w-screen-lg xl:max-w-screen-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-clash text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-sky-400">Sign</span> Petition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-lg text-base font-medium text-gray-100 sm:text-lg md:max-w-xl lg:max-w-2xl lg:text-xl"
          >
            Supporting displaced students in the UK to access higher education
            and build brighter futures through scholarships and mentorship
          </motion.p>
        </div>
        {/* <h1 className="font-clash text-[6rem] leading-none font-semibold tracking-tight text-white">
            AMAL{" "}
          </h1>
          <h2 className="font-clash text-[3.5rem] leading-none font-semibold tracking-widest text-white">
            Initiative
          </h2> */}
      </Hero>{" "}
      Scholarship
    </>
  );
};

export default Scholarship;
