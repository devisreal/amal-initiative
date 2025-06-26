import { motion } from "motion/react";
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm/ContactForm";
import { Hero } from "../components/Hero/Hero";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Amal Initiative</title>
        <meta name="description" content="Contact AMAL Initiative" />
      </Helmet>
      <Hero type="general">
        <div className="mx-auto flex h-full max-w-screen-md flex-col items-start justify-center gap-6 px-6 md:px-0 lg:max-w-screen-lg xl:max-w-screen-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-clash text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-6xl"
          >
            <span className="text-sky-400">Contact</span> Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-lg text-base font-medium text-gray-100 sm:text-lg md:max-w-xl lg:max-w-2xl lg:text-lg"
          >
            Reach out to us. We reply in under 24hours.
          </motion.p>
        </div>
      </Hero>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Contact Us */}
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-sky-500 lg:text-3xl"
            >
              Contact us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mb-4 h-[3px] w-28 rounded-sm bg-sky-200"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-1 text-gray-600"
            >
              We'd love to talk about how we can help you.
            </motion.p>
          </div>

          <div className="mt-18 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
            {/* Card */}
            <div className="shadowh flex flex-col rounded-xl border border-gray-200 p-4 sm:p-6 lg:p-8">
              <h2 className="mb-8 text-xl font-semibold text-gray-800">
                Get in Touch
              </h2>

              <ContactForm />
            </div>
            {/* End Card */}

            <div className="divide-y divide-gray-200">
              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="mt-1.5 size-6 shrink-0 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">What we do</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We support displaced students in the UK finding scholarships
                    and continue their higher education for free.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}

              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="mt-1.5 size-6 shrink-0 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <div className="grow">
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    London, United Kingdom
                  </p>
                </div>
              </div>
              {/* End Icon Block */}

              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="mt-1.5 size-6 shrink-0 text-amber-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>

                <div className="grow">
                  <h3 className="font-semibold text-gray-800">Note:</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We do not offer any grants, we are just a scholarship
                    assistant program for young people in the UK.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Us */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Contact;
