/* eslint-disable jsx-a11y/anchor-is-valid */
import { mockMatch } from '../assets';
import { Container, Typography } from '../components';
import DownloadButton from '../components/DownloadButton';
// bg-[#664753]
export const HeroPage = () => {
  return (
    <section className=" min-h-screen w-full banner  mb-24">
      <Container
        as="div"
        className="w-full grid grid-cols-1 lg:grid-cols-2 lg:pt-24 pt-10 gap-5 py-5"
      >
        <div className="m">
          <Typography as="h1" variant="display">
            Same Face, Online and Offline
          </Typography>
          <Typography variant="body" className="mt-3">
            Get past the hassle of not meeting the person you met online when
            you go on a date. What you see is what you get.
          </Typography>
          <div className="lg:mt-10 mt-5 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 w-fit lg:w-full">
            <DownloadButton type={'apple'} />
            <DownloadButton />
          </div>
        </div>
        <div className="flex-1 hidden lg:block">
          <img
            src={mockMatch}
            alt=""
            className="h-full w-full relative -left-20"
          />
        </div>
      </Container>
    </section>
  );
};
