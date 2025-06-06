import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Hero } from "../components/Hero/Hero";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home | Amal Initiative";
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Amal Initiative</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      <Hero>
        <div className="mx-auto flex h-full max-w-screen-md flex-col items-start justify-center gap-6 px-6 md:px-0 lg:max-w-screen-lg xl:max-w-screen-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-clash text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Education is <span className="text-sky-400">Hope</span>
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

          <div className="flex flex-col gap-0 md:flex-row md:gap-4">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="feature-btn mt-5 flex items-center rounded-lg bg-sky-500 px-4 py-3 text-white transition-colors hover:bg-sky-500/90 md:px-6"
              href="/contact"
            >
              <span className="font-clash font-semibold uppercase md:text-lg">
                START YOUR JOURNEY
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

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="feature-btn mt-5 flex items-center rounded-lg bg-white px-4 py-3 text-sky-600 transition-colors hover:bg-gray-50 md:px-6"
              href="https://www.gofundme.com/f/solidarity-against-scholasticide-couch-to-5k-for-gazan-unis?attribution_id=sl:1d9d4d40-cfbe-4558-a13e-13b6e2e9f529&lang=en_GB&utm_campaign=fp_sharesheet&utm_content=amp13_t1-amp14_t1&utm_medium=customer&utm_source=linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-clash font-semibold uppercase md:text-lg">
                Fundraise Against Scholasticide
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
        </div>
      </Hero>
      HomePage
    </>
  );
};

export default HomePage;
