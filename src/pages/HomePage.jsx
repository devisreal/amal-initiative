import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

// Images
import EducationForAllImage from "../assets/images/education-for-all.webp";
import EmpowermentImage from "../assets/images/empowerment.webp";
// Components
import { Hero } from "../components/Hero/Hero";
// Data
import { stats } from "../data/stats";
import { testimonials } from "../data/testimonials";
import { statsChildren, statsVariants } from "../lib/animation-variants";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          AMAL Initiative | Free Higher Education for Displaced Students in the
          UK
        </title>
        <meta
          content="AMAL Initiative | Free Higher Education for Displaced Students in the
    UK"
          name="title"
        />
        <meta
          name="keywords"
          content="home, amal, initiative, amal initiative, refugees, seo, education, scholarship"
        />
        <meta
          content="The AMAL Initiative empowers displaced students across the UK by connecting them with fully funded scholarships, dedicated mentorship, and tailored support to unlock access to higher education—completely free of charge."
          name="description"
        />

        <meta
          property="og:title"
          content="AMAL Initiative | Free Higher Education for Displaced Students"
        />
        <meta
          property="og:description"
          content="The AMAL Initiative empowers displaced students across the UK by connecting them with fully funded scholarships, dedicated mentorship, and tailored support to unlock access to higher education—completely free of charge."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amal-initiative.com/" />
        <meta
          property="og:image"
          content="https://amal-initiative.com/assets/logo2-COZAhHh1.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AMAL Initiative | Free Higher Education for Displaced Students"
        />
        <meta
          name="twitter:description"
          content="The AMAL Initiative empowers displaced students across the UK by connecting them with fully funded scholarships, dedicated mentorship, and tailored support to unlock access to higher education—completely free of charge."
        />
        <meta
          name="twitter:image"
          content="https://amal-initiative.com/assets/logo2-COZAhHh1.webp"
        />
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

      {/* About & Mission Section */}
      <section className="my-28 py-20">
        <div className="mx-auto px-4 lg:container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-24 items-center gap-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-3 inline-flex items-center gap-3 text-3xl font-semibold text-sky-500 md:text-4xl lg:text-5xl"
              >
                What AMAL Initiative Does
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mx-auto mb-8 h-[3px] w-28 rounded-sm bg-sky-200"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8 leading-relaxed text-gray-600 md:text-lg"
              >
                We support displaced students in the UK finding scholarships and
                continuing their higher education for free. We believe refugees
                and asylum seekers deserve to have easy access to higher
                education to develop new skills and be prepared for the job
                market in the UK.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-600 md:text-lg"
              >
                Education is an essential element in every community and in
                every house for better future. We want young refugees in the UK
                from{" "}
                <span className="font-mediumbr text-sky-600">Palestine</span>,{" "}
                <span className="font-mediumbr text-sky-600">Sudan</span>,{" "}
                <span className="font-mediumbr text-sky-600">Ghana</span> and
                other students who left their countries because of war,
                occupation or fear of persecution to continue their higher
                education in the UK.
              </motion.p>
            </div>

            <motion.div
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid grid-cols-2 gap-4 md:w-10/12"
            >
              {stats.map((stat) => {
                return (
                  <motion.div
                    variants={statsChildren}
                    key={stat.id}
                    className="rounded-2xl bg-sky-50 p-8 text-center font-medium"
                  >
                    <div className="mb-2 text-3xl font-semibold text-sky-500">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-700 md:text-sm">
                      {stat.title}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empowerment  */}

      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-6 xl:px-0">
        <div className="grid grid-cols-1 gap-4 md:items-center md:gap-16 lg:grid-cols-2">
          <div>
            <motion.img
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src={EmpowermentImage}
              className="rounded-xl lg:rounded-3xl"
              alt="Empowerment for Refugees"
            />
          </div>
          <div>
            <div className="max-w-x md:max-w-none">
              <motion.h2
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-3 inline-flex items-center gap-3 text-3xl font-semibold text-sky-500 md:text-4xl"
              >
                Empowering Refugees Through Education
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
                className="mb-8 leading-relaxed text-gray-600 md:text-lg"
              >
                Access to higher education transforms lives. It equips learners
                with the skills and capabilities needed for the 21st century and
                fosters opportunities for personal, social, and economic growth.
                However, millions are denied this transformative experience due
                to circumstances beyond their control.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-600 md:text-lg"
              >
                Tens of millions of young people face the consequences of
                displacement caused by war, political upheaval, natural
                disasters, or other crises. These individuals often find
                themselves far from home, stripped of the security and
                opportunities that many take for granted.
              </motion.p>
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

      {/* Solidarity */}
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-6 xl:px-0">
        <div className="grid grid-cols-1 gap-4 md:items-center md:gap-16 lg:grid-cols-2">
          <div>
            <div className="max-w-x md:max-w-none">
              <motion.h2
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-3 inline-flex items-center gap-3 text-3xl font-semibold text-sky-500 md:text-4xl"
              >
                Solidarity With Right To Educate
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8 h-[3px] w-28 rounded-sm bg-sky-200"
              ></motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-3 inline-flex items-center gap-3 text-lg font-bold text-gray-500 md:text-xl"
              >
                Universal Declaration of Human Rights, Article 26 (1)
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-600 md:text-lg"
              >
                We firmly stay our right to promote local and international
                relations from universities and their partners to support
                displaced students in the UK finding scholarships and learning
                new skills and engagement.
              </motion.p>
            </div>
          </div>
          <div>
            <motion.img
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src={EducationForAllImage}
              className="rounded-xl lg:rounded-3xl"
              alt="Education for all"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-28 bg-gray-100 py-28">
        <div className="mx-auto px-4 md:container">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3 inline-flex items-center gap-3 text-3xl font-semibold text-sky-500 md:text-4xl"
            >
              What Our Students Say
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mb-8 h-[3px] w-28 rounded-sm bg-sky-200"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg font-medium text-gray-600 md:text-xl"
            >
              Real stories from students who've transformed their lives through
              education
            </motion.p>
          </div>
          {/* Grid */}
          <motion.div
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto flex max-w-screen-xl flex-col justify-center gap-6 md:flex-row"
          >
            {/* Card */}
            {testimonials.map((testimony) => {
              return (
                <motion.div
                  variants={statsChildren}
                  key={testimony.id}
                  className="mx-auto flex h-auto w-full md:w-[26rem] lg:mx-0"
                >
                  <div className="flex flex-col rounded-xl bg-white shadow">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base text-gray-800 italic md:text-lg">
                        "{testimony.content}"
                      </p>
                    </div>

                    <div className="rounded-b-xl bg-gray-200 p-4 md:px-7">
                      <div className="flex items-center gap-x-3">
                        <div className="shrink-0">
                          <img
                            className="size-8 rounded-full sm:size-14"
                            src={testimony.image}
                            alt={testimony.name}
                          />
                        </div>

                        <div className="grow">
                          <p className="text-sm font-semibold text-gray-800 sm:text-base">
                            {testimony.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimony.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            {/* End Card */}
          </motion.div>
          {/* End Grid */}
        </div>
      </section>
    </>
  );
};

export default HomePage;
