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
            className="max-w-lg text-base font-medium text-gray-100 sm:text-lg md:max-w-xl lg:max-w-2xl lg:text-lg"
          >
            A call for inclusive scholarships for Gaza students is crucial for
            several reasons. Gaza faces significant challenges due to ongoing
            conflict, economic hardship, and limited access to resources. Many
            students in Gaza have the potential to excel academically but are
            hindered by financial constraints and the lack of opportunities for
            higher education.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-lg text-base font-medium text-gray-100 sm:text-lg md:max-w-xl lg:max-w-2xl lg:text-lg"
          >
            Inclusive scholarships can provide these students with the chance to
            pursue their educational goals, develop their skills, and contribute
            to rebuilding and improving their communities in the future.
            Furthermore, it can help break the cycle of poverty and conflict by
            empowering young individuals with the knowledge and qualifications
            they need to succeed.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="feature-btn mt-5 flex items-center rounded-lg bg-sky-500 px-4 py-3 text-white transition-colors hover:bg-sky-500/90 md:px-6"
            href="https://docs.google.com/forms/d/10MYux1cHGIGf-tvVINSuOxmP2AwibRq4j2Qs354hvh0/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-clash font-semibold uppercase md:text-lg">
              Sign Petition
            </span>

            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>
      </Hero>
      Scholarship
    </>
  );
};

export default Scholarship;
