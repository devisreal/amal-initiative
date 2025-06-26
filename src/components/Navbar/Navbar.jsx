import { useClickAway } from "@uidotdev/usehooks";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo/logo.webp";
import { links } from "../../data/links";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const mobileMenuRef = useClickAway(() => {
    setIsMobileMenuOpened(false);
  });

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow">
      <div className="mx-auto max-w-screen-md px-4 md:px-0 lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="flex items-center justify-between py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:flex md:items-center md:gap-12"
          >
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src={Logo} alt="" className="w-36" />
            </Link>
          </motion.div>

          <div className="hidden lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-3 text-sm lg:gap-6">
                {links.map((link) => {
                  return (
                    <li key={link.link}>
                      <NavLink
                        className={({ isActive }) =>
                          `rounded-lg p-2 px-3 text-base font-medium ${
                            isActive ? "bg-gray- text-sky-500" : "text-gray-800"
                          }`
                        }
                        to={link.link}
                        viewTransition
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500/90"
                to="/contact"
              >
                Apply Now
              </Link>
            </div>

            <div className="block lg:hidden" ref={mobileMenuRef}>
              {isMobileMenuOpened ? (
                <button
                  onClick={() => setIsMobileMenuOpened(false)}
                  className="cursor-pointer rounded-lg bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => setIsMobileMenuOpened(true)}
                  className="cursor-pointer rounded-lg bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              )}

              <MobileMenu
                isMobileMenuOpened={isMobileMenuOpened}
                setIsMobileMenuOpened={setIsMobileMenuOpened}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
