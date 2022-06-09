import { Navbar, Container, Typography } from "../components";

export const HeroPage = ({}) => {
  return (
    <section className="h-[45rem] w-full bg-[url('./assets/banner.svg')] object-cover object-center bg-no-repeat ">
      <Navbar />
      <Container
        as="div"
        className="w-full h-[20rem] grid grid-cols-2 mt-24 gap-5 py-5"
      >
        <div>
          <Typography as="h1" variant="display">
            Same Face, Online and Offline
          </Typography>
          <Typography variant="body" className="mt-3">
            Get past the hassle of not meeting the person you met online when
            you go on a date. What you see is what you get.
          </Typography>
        </div>
        <div>hi</div>
      </Container>
    </section>
  );
};
