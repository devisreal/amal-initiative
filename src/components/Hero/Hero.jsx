export const Hero = ({ children, type }) => {
  return (
    <header
      className={`hero ${type === "general" ? "hero-general" : "hero-home"}`}
    >
      {children}
    </header>
  );
};
