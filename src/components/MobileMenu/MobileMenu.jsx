import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ links, isMobileMenuOpened, setIsMobileMenuOpened }) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {isMobileMenuOpened && (
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0,
          }}
          exit={{ y: -20, opacity: 0 }}
          key="mobile-menu"
          className="fixed top-16 right-0 left-0 w-full space-y-1 bg-white p-5 shadow"
        >
          {links.map((link) => {
            return (
              <li key={link.link} onClick={() => setIsMobileMenuOpened(false)}>
                <NavLink
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-md font-medium ${
                      isActive ? "bg-sky-100 text-sky-700" : "text-gray-800"
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
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
