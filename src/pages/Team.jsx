import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

// images
import BilalImage from "../assets/images/founders/bilal.webp";
import HamzaImage from "../assets/images/founders/hamza.webp";
// components
import { Hero } from "../components/Hero/Hero";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Team | Amal Initiative</title>
        <meta content="Team | Amal Initiative" name="title" />
        <meta
          name="keywords"
          content="home, amal, initiative, team, amal initiative, refugees, seo, education, scholarship"
        />
        <meta
          content="Meet the passionate team behind the AMAL Initiative—educators, mentors, and advocates working together to help displaced students overcome barriers and access higher education opportunities in the UK."
          name="description"
        />

        <meta property="og:title" content="Team | AMAL Initiative" />
        <meta
          property="og:description"
          content="Get to know the passionate mentors and advocates behind the AMAL Initiative, helping displaced students access UK universities."
        />
        <meta property="og:url" content="https://amal-initiative.com/team" />
        <meta
          property="og:image"
          content="https://amal-initiative.com/assets/logo2-COZAhHh1.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team | AMAL Initiative" />
        <meta
          name="twitter:description"
          content="The people empowering displaced students to access UK higher education through scholarships and mentorship."
        />
        <meta
          name="twitter:image"
          content="https://amal-initiative.com/assets/logo2-COZAhHh1.webp"
        />
      </Helmet>
      <Hero type="general">
        <div className="mx-auto flex h-full max-w-screen-md flex-col items-start justify-center gap-6 px-6 md:px-0 lg:max-w-screen-lg xl:max-w-screen-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-clash text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-6xl"
          >
            The <span className="text-sky-400">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-lg text-base font-medium text-gray-100 sm:text-lg md:max-w-xl lg:max-w-2xl lg:text-lg"
          >
            A diverse team creating pathways to education: Providing mentorship,
            resources, and hope for displaced students in the UK
          </motion.p>
        </div>
      </Hero>

      {/* Our Team */}
      <section className="my-28 py-16">
        <div className="container mx-auto px-6 py-10">
          <div className="xL:-mx-4 xl:flex xl:items-center">
            <div className="xl:mx-4 xl:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-3 text-2xl font-semibold text-sky-500 capitalize lg:text-3xl"
              >
                Our Team
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8 h-[3px] w-28 rounded-sm bg-sky-200"
              ></motion.div>

              <motion.p
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-4 max-w-2xl text-gray-500"
              >
                We are group of young people from different fields who campaign
                for right to educate for displaced students in the UK and
                abroad. We campaign for education and learning new skills
              </motion.p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mx-4 xl:mt-0 xl:w-1/2">
              <div>
                <img
                  className="aspect-square rounded-xl object-cover"
                  src={BilalImage}
                  alt="Bilal Hamza"
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
                  Bilal Hamza
                </h1>

                <p className="mt-2 text-gray-500 capitalize">AMAL Founder</p>
              </div>

              <div>
                <img
                  className="aspect-square rounded-xl object-cover"
                  src={HamzaImage}
                  alt="UK Ambassador & Researcher"
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
                  Hamza Yousef
                </h1>

                <p className="mt-2 text-gray-500 capitalize">
                  UK Ambassador & Researcher
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-4"
      >
        <div className="relative mx-auto my-28 max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 to-sky-700 p-8 text-white md:p-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 h-64 w-64 translate-x-32 -translate-y-32 rounded-full bg-white/5"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 h-48 w-48 -translate-x-24 translate-y-24 rounded-full bg-white/5"
          ></motion.div>
          <div className="relative">
            <div className="mb-3 flex items-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mr-3 font-clash text-6xl text-blue-200"
              >
                "
              </motion.div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-4 text-3xl font-semibold md:text-4xl"
                >
                  Our Mission
                </motion.h3>
              </div>
            </div>
            <motion.blockquote
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl text-xl leading-relaxed font-light text-blue-50 italic md:text-2xl"
            >
              Our Mission is to help many refugees and asylum to continue their
              higher education for free and learn new skills to succeed in the
              UK.
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-5 place-self-end md:text-lg"
            >
              —Bilal Hamza, <cite>AMAL Founder</cite>
            </motion.p>
          </div>
        </div>
      </motion.div>

      <br />
      <br />
      <br />
    </>
  );
};

export default Team;
