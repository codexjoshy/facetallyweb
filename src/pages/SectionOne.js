import { frame } from "../assets";
import { Container, Typography } from "../components";

export const SectionOne = () => {
  return (
    <Container as="section" className="lg:grid grid-cols-3 gap-4 w-full mb-24">
      <div className="flex flex-col h-full justify-center ">
        <Typography as="h4" variant="header" className="mb-3">
          Like you, attractive singles.
        </Typography>
        <Typography variant="body" className="!text-black/70">
          They're intelligent, sincere, and dedicated to finding love. Meet
          people today that have personalities and outlooks that are similar to
          yours.
        </Typography>
        <button className="p-3 w-fit mt-5 bg-black/70 rounded-md text-white/80 ring-1 ring-black">
          Download
        </button>
      </div>
      <div className="col-span-2 mt-5 lg:mt-0">
        <img src={frame} className="h-full w-full" alt="" />
      </div>
    </Container>
  );
};
