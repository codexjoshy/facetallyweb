import { Container, Typography } from "../components";

const NewsLetter = ({ title, body }) => {
  return (
    <div>
      <Typography as="h3" variant="title">
        {title}
      </Typography>
      <Typography variant="body" className="mt-3 !text-gray-600">
        {body}
      </Typography>
    </div>
  );
};

export const SectionFour = () => {
  const blog = [
    {
      title: "Why online dating with facetally works",
      body: "We don't have time to waste on dates that aren't chemistry. Because we match our members on 32 dimensions of compatibility. Facetally brings like-minded people together. Two-thirds of our customers said that Facetally helped them find better dates, so save time and effort by examining your compatible matches online and have more enjoyable, meaningful relationships.",
    },
    {
      title: "The science of dating",
      body: "Because of the way we get to know you, Facetally stands out among the finest dating sites. Your responses to our questionnaire help us figure out how you perceive the world so we can pair you up with others who share your viewpoint. The new Facetally Compatibility Wheel shows you how you and your matches stack up on the most important criteria. Try Facetally for free today and then subscribe to gain access to all of the tools that will help you find appropriate matches.",
    },
    {
      title: "Meet compatible singles across the world",
      body: "We'll match you with singles that complement your personality no matter where you live in the world, and we have members all throughout the globe. Sign up today to find compatible matches in your local area by searching for singles in the world's major cities.",
    },
    {
      title: "Meet people who share your passions and beliefs",
      body: "Over 2 million individuals have found love with Facetally, so you can be confident that you will find someone who shares your beliefs among our members. There's a vast pool of like-minded singles for you to meet, whether you're Christian, Muslim, or Asian.",
    },
  ];

  return (
    <Container as="section" className="mt-24 mb-24">
      <div className="border-b-2 pb-5">
        <Typography as="h4" variant="header">
          Dating advice
        </Typography>
        <Typography variant="body" className="mt-2 !text-gray-600">
          Your guide to dating and relationships all in one place.
        </Typography>
      </div>
      <div className="grid grid-cols-2 pt-10 gap-3 gap-y-8">
        {blog.map(({ title, body }, index) => (
          <NewsLetter {...{ key: index, title, body }} />
        ))}
      </div>
    </Container>
  );
};
