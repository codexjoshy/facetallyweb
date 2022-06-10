import { Container, Typography } from "../components";

export const SectionFour = () => {
  return (
    <Container as="section" className="mt-24">
      <div className="border-b-2 pb-5">
        <Typography as="h4" variant="header">
          Dating advice
        </Typography>
        <Typography variant="body" className="mt-2 !text-gray-600">
          Your guide to dating and relationships all in one place.
        </Typography>
      </div>
      <div className="grid grid-cols-2 pt-10 gap-3">
        <div>
          <Typography as="h3" variant="title">
            Why online dating with facetally works
          </Typography>
          <Typography variant="body" className="mt-3 !text-gray-600">
            We don't have time to waste on dates that aren't chemistry. Because
            we match our members on 32 dimensions of compatibility,
            Facetally brings like-minded people together. Two-thirds of our
            customers said that Facetally helped them find better dates, so save
            time and effort by examining your compatible matches online and have
            more enjoyable, meaningful relationships.
          </Typography>
        </div>
        <div>
          <Typography as="h3" variant="title">
            The science of dating
          </Typography>
          <Typography variant="body" className="mt-3 !text-gray-600">
            Because of the way we get to know you, Facetally stands out among
            the finest dating sites. Your responses to our questionnaire help us
            figure out how you perceive the world so we can pair you up with
            others who share your viewpoint. The new Facetally Compatibility
            Wheel shows you how you and your matches stack up on the most
            important criteria. Try Facetally for free today and then subscribe
            to gain access to all of the tools that will help you find
            appropriate matches.
          </Typography>
        </div>
      </div>
    </Container>
  );
};
