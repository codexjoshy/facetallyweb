/* eslint-disable jsx-a11y/anchor-is-valid */
import { mock3 } from '../assets';
import { Container, Typography } from '../components';
import DownloadButton from '../components/DownloadButton';

export const SectionFive = () => {
  return (
    <Container as="section" className="mb-24 ">
      <Typography as="h4" variant="header" className="mb-3 text-center my-10">
        The No.1 trusted dating app
      </Typography>
      <div className="lg:grid grid-cols-3 w-full mt-10">
        <div className="col-span-2">
          <img src={mock3} className="h-full w-full" alt="" />
        </div>
        <div className="flex flex-col justify-center h-full">
          <Typography variant="body" className="!text-black/70">
            We have years of trusted matchmaking under our belts, with a
            dedicated Trust and Safety team by your side.
          </Typography>
          <div className="mt-5 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 w-fit lg:w-full">
            <DownloadButton type={'apple'} />
            <DownloadButton />
          </div>
        </div>
      </div>
    </Container>
  );
};
