export const leftSideAnimation = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  transition: {
    duration: 0.5,
    delay: 0.5,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

export const rightSideAnimation = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  transition: {
    duration: 0.5,
    delay: 0.5,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

// export default leftSideAnimation;
// export default rightSideAnimation;
