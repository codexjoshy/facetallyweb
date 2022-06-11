const variants = {
  section: "section",
  div: "div",
};

export const Container = ({ as, className, children }) => {
  const Component = variants[as];
  return (
    <Component className={`px-5 lg:px-20 ${className}`}>{children}</Component>
  );
};
