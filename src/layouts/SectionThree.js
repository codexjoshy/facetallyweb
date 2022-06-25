import { mock1 } from '../assets';
import { Container, Typography } from '../components';
import DownloadButton from '../components/DownloadButton';

export const SectionThree = () => {
  // bg-[#664753]/80
  return (
    <Container as="section" className="lg:grid grid-cols-2 banner  py-5">
      <img src={mock1} alt="" className="h-full w-full" />
      <div className="flex flex-col justify-center h-full">
        <Typography as="h2" variant="header" className="!text-white">
          We're here to lend a hand.
        </Typography>
        <Typography variant="body" className="mt-3">
          The first step in finding your next amazing relationship is to sign up
          on Facetally. We're here to help you in your quest for love, with
          everything from profile suggestions to sharing your success story.
        </Typography>
        <div className="mt-10 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 w-fit lg:w-full">
          <DownloadButton />
          <DownloadButton type={'apple'} />
        </div>
      </div>
    </Container>
  );
};
