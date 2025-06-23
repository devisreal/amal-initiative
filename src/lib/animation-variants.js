export const statsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.8,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const statsChildren = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
