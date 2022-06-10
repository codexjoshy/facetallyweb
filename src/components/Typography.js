const variants = {
  display: "text-5xl font-bold leading-[4rem] text-white tracking-wide",
  title: "text-2xl font-semibold ",
  body: "text-base text-white/70 leading-[1.5rem]",
  caption: "",
};

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
};

export const Typography = ({ as, variant, className, children }) => {
  const Component = as ? tags[as] : tags["p"];
  const componentClassType = variant ? variants[variant] : "";
  return (
    <Component className={`${componentClassType} ${className ?? ""}`}>
      {children}
    </Component>
  );
};
