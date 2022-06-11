const variants = {
  section: "section",
  div: "div",
};

export const Container = ({ as, className, children }) => {
  const Component = variants[as];
  return (
    <Component className={`lg:px-20 px-5 ${className}`}>{children}</Component>
  );
};
