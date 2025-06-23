import { peace } from "@lucide/lab";
import { Icon } from "lucide-react";
import { ShieldEllipsis } from "lucide-react";
import { UsersRound } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import EmpowermentImage from "../assets/images/scholarship-assistance.webp";
import { Hero } from "../components/Hero/Hero";
import { coreInitiatives } from "../data/core-intiatives";
import { statsChildren, statsVariants } from "../lib/animation-variants";

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
            className="font-clash text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-6xl"
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
            className="hidden max-w-lg text-base font-medium text-gray-100 sm:text-lg md:max-w-xl lg:inline lg:max-w-2xl lg:text-lg"
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

      {/* Scholarship */}

      <section className="mx-auto my-28 max-w-screen-xl px-4 py-20 sm:px-6 lg:px-6 xl:px-0">
        <div className="grid grid-cols-1 gap-4 md:items-center md:gap-16 lg:grid-cols-2">
          <div>
            <motion.img
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src={EmpowermentImage}
              className="rounded-xl lg:rounded-3xl"
              alt="Scholarship Assistant Program"
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
                Scholarship Assistant Program
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
                className="mb-6 leading-relaxed text-gray-600 md:text-lg"
              >
                The Sanctuary Scholarship offers opportunities for those who
                have been forcibly displaced from their homes and forced to seek
                sanctuary. Also, the scholarship assistant program will support
                international students who live in countries considered to be
                war zones and poor countries.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-600 md:text-lg"
              >
                This Sanctuary Scholarship recognizes that forced displacement
                creates significant barriers to accessing higher education. You
                may have always dreamed to study at university but faced
                barriers in achieving your goal.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3 inline-flex items-center gap-3 text-3xl font-semibold text-sky-500 md:text-4xl"
            >
              Who are categorized as displaced students?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto mb-16 h-[3px] w-28 rounded-sm bg-sky-200"
            ></motion.div>

            <motion.div
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-12 md:grid-cols-3"
            >
              <motion.div variants={statsChildren} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <Icon className="h-10 w-10 text-sky-600" iconNode={peace} />
                </div>

                <p className="text-gray-600">
                  An asylum seeker: a person who has made a claim for refugee
                  status.
                </p>
              </motion.div>
              <motion.div variants={statsChildren} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <ShieldEllipsis className="h-10 w-10 text-sky-600" />
                </div>

                <p className="text-gray-600">
                  A person who has been granted Humanitarian Protection (HP) or
                  Limited Leave to Remain (formerly Discretionary Leave to
                  Remain) in the UK.
                </p>
              </motion.div>
              <motion.div variants={statsChildren} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <UsersRound className="h-9 w-9 text-sky-600" />
                </div>

                <p className="text-gray-600">
                  A refugee – a person who has been granted refugee status in
                  the UK, or other nation.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core initiatives */}
      <section className="my-28 py-20">
        <div className="mx-auto max-w-screen-xl px-6 py-10">
          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-3 inline-flex w-full items-center justify-center gap-3 text-3xl font-semibold text-sky-500 md:text-4xl"
          >
            Our Core Initiatives
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 h-[3px] w-28 rounded-sm bg-sky-200"
          ></motion.div>

          <motion.div
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-12"
          >
            {coreInitiatives.map((initiative) => {
              return (
                <motion.div
                  variants={statsChildren}
                  key={initiative.title}
                  className="space-y-3 rounded-xl border-2 border-sky-400 p-4 pb-6 md:p-8"
                >
                  <span className="inline-block text-sky-500">
                    <initiative.icon
                      className="size-10 text-sky-500"
                      strokeWidth={1.5}
                    />
                  </span>

                  <h3 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl">
                    {initiative.title}
                  </h3>

                  <p className="text-gray-500">{initiative.description}</p>

                  <Link
                    to="/contact"
                    className="mt-3 inline-flex transform rounded-full bg-sky-100 p-2 text-sky-500 capitalize transition-colors duration-300 hover:text-sky-600 hover:underline rtl:-scale-x-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ's */}
      <section className="mx-auto mb-28 max-w-4xl space-y-4 px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3 inline-flex w-full items-center justify-center gap-3 text-3xl font-semibold text-sky-500 md:text-4xl"
        >
          FAQs ?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 h-[3px] w-28 rounded-sm bg-sky-200"
        ></motion.div>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-sky-100 p-4 text-gray-900">
            <h2 className="font-medium md:text-lg">
              Scholarships Available for Palestinian Students?
            </h2>

            <svg
              className="size-5 shrink-0 text-sky-500 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <ul className="space-y-1 px-4 pt-4 text-gray-900">
            <li>
              <b>Chevening Scholarships:</b> Fully funded one-year master's
              programs for students with leadership potential.
            </li>
            <li>
              <b>Higher Education Scholarships for Palestinians (HESPAL):</b>{" "}
              Supports future academics from Palestinian universities for
              master's degrees in the UK.
            </li>
            <li>
              <b>Durham Palestine Educational Trust Scholarships:</b> Offers
              master's scholarships at Durham University, focusing on
              development in Palestine.
            </li>
            <li>
              <b>
                Palestinian Scholarship at Goldsmiths, University of London:
              </b>{" "}
              Covers tuition and living costs, prioritizing students from the
              West Bank, Gaza, or refugee camps.
            </li>
            <li>
              <b>The Salam Scholarships at Ulster University:</b> Fully funds
              education for up to five Palestinian women annually.
            </li>
            <li>
              <b>Dima Alhaj Scholarship at the University of Glasgow:</b>{" "}
              Supports postgraduate studies for Palestinians displaced or
              affected by humanitarian crises.
            </li>
            <li>
              <b>Said Foundation Scholarships:</b> For students from the Middle
              East, including Palestinians, to study in the UK.
            </li>
            <li>
              Early application and strong preparation are key to securing these
              competitive scholarships.
            </li>
          </ul>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-sky-100 p-4 text-gray-900">
            <h2 className="font-medium md:text-lg">
              How can I improve my chances of getting a scholarship?
            </h2>

            <svg
              className="size-5 shrink-0 text-sky-500 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <ol className="list-inside list-decimal space-y-1 px-4 pt-4 text-gray-800 marker:font-bold">
            Here’s a summary of key steps to improve your chances of getting a
            scholarship:
            <li>
              <b>Research Scholarships:</b> Target ones matching your profile
              and goals.
            </li>
            <li>
              <b>Tailor Applications:</b> Align your achievements and
              aspirations with the scholarship's mission.
            </li>
            <li>
              <b>Maintain Strong Academics:</b> Achieve high grades and pursue
              relevant certifications.
            </li>
            <li>
              <b>Show Leadership and Volunteering:</b> Engage in community
              projects and leadership roles.
            </li>
            <li>
              <b>Write a Compelling Personal Statement:</b> Share your story,
              goals, and why you deserve the scholarship.
            </li>
            <li>
              <b>Obtain Strong References:</b> Secure recommendations from
              mentors or professors.
            </li>
            <li>
              <b>Prepare for Interviews:</b> Practice answering questions and
              align your responses with the scholarship values.
            </li>
            <li>
              <b>Highlight Extracurriculars:</b> Emphasize relevant activities
              and skills.
            </li>
            <li>
              <b>Polish Your Application:</b> Proofread and ensure it’s
              professional and error-free.
            </li>
            <li>
              <b>Apply Broadly:</b> Submit applications to multiple
              scholarships.
            </li>
            <li>
              <b>Stay Persistent:</b> Learn from rejections and improve.
            </li>
            These steps, combined with careful preparation and persistence, will
            significantly enhance your chances.
          </ol>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-sky-100 p-4 text-gray-900">
            <h2 className="font-medium md:text-lg">
              Tips for writing a strong personal statement or essay:
            </h2>

            <svg
              className="size-5 shrink-0 text-sky-500 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <ol className="list-inside list-decimal space-y-1 px-4 pt-4 text-gray-800 marker:font-bold">
            <li>
              <b>Understand the Prompt:</b> Address what the scholarship
              committee is seeking.
            </li>
            <li>
              <b>Outline your Ideas:</b> Structure your essay with a clear
              introduction, body, and conclusion.
            </li>
            <li>
              <b>Start Strong:</b> Achieve high grades and pursue relevant
              certifications.
            </li>
            <li>
              <b>Be Authentic:</b> Share your genuine story and personal growt
            </li>
            <li>
              <b>Show, Don’t Tell:</b> Use specific examples and quantifiable
              achievements.
            </li>
            <li>
              <b>Align with Values:</b> Reflect the scholarship’s mission in
              your narrative.
            </li>
            <li>
              <b>Highlight Impact:</b> Demonstrate how you’ve made a difference
              and your future potential.
            </li>
            <li>
              <b>Stay Focused:</b> Be concise and stick to the word limit.
            </li>
            <li>
              <b>Use a Positive Tone:</b> Convey enthusiasm, confidence, and
              resilience.
            </li>
            <li>
              <b>Edit and Proofread:</b> SReview for clarity, grammar, and
              style, and seek feedback. By being authentic, clear, and
              goal-oriented, you can craft a compelling essay that stands out.
            </li>
          </ol>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-sky-100 p-4 text-gray-900">
            <h2 className="font-medium md:text-lg">
              How do UK teaching styles differ from my home country?
            </h2>

            <svg
              className="size-5 shrink-0 text-sky-500 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900">
            In summary, UK teaching styles often emphasize{" "}
            <strong>student-centered learning, frequent assessments</strong>{" "}
            with feedback, and independent, practical, and applied learning.
            Classrooms are typically{" "}
            <strong>informal and discussion-based</strong>, with teachers acting
            as facilitators rather than authoritative figures. The UK system
            encourages <strong>early specialization</strong>, development of{" "}
            <strong>soft skills</strong>, and integration of{" "}
            <strong>extracurricular activities</strong> for a well-rounded
            education. In contrast, other systems might focus more on{" "}
            <strong>lecture-based learning, exam-oriented assessments</strong>,
            and <strong>a formal, teacher-led approach</strong>, with a heavier
            emphasis on <strong>theoretical knowledge</strong> and{" "}
            <strong>memorization</strong>.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-sky-100 p-4 text-gray-900">
            <h2 className="font-medium md:text-lg">
              Process for obtaining a UK student visa:
            </h2>

            <svg
              className="size-5 shrink-0 text-sky-500 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <ol className="list-inside list-decimal space-y-1 px-4 pt-4 text-gray-800 marker:font-bold">
            <li>
              <b>Choose Course & Institution:</b> Secure an offer from a
              licensed UK educational institution and obtain a Confirmation of
              Acceptance for Studies (CAS).
            </li>
            <li>
              <b>Check Eligibility:</b> Ensure you meet financial, English
              language, and other requirements.
            </li>
            <li>
              <b>Prepare Documents:</b> Gather essentials like your CAS,
              passport, proof of funds, English test results, and other
              supporting documents.
            </li>
            <li>
              <b>Apply Online:</b> Submit your application on Gov.uk, pay the
              visa fee (£363) and Immigration Health Surcharge.
            </li>
            <li>
              <b>Provide Biometrics:</b> Attend an appointment for fingerprints
              and photos or use the ID Check app if eligible.
            </li>
            <li>
              <b>Attend an Interview (if required):</b> Demonstrate your genuine
              intent to study.
            </li>
            <li>
              <b>Wait for a Decision:</b> Standard processing takes about 3
              weeks.
            </li>
            <li>
              <b>Collect Visa & Travel:</b> Receive your visa, travel to the UK,
              and collect your Biometric Residence Permit (BRP) after arrival.
            </li>
          </ol>
        </details>
      </section>
    </>
  );
};

export default Scholarship;
