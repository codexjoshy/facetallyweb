import React from 'react';
import { Container, Typography } from '../components';
import { Faq } from '../layouts';

function Contact() {
  return (
    <section className="min-h-screen w-full banner04">
      <Container
        as="div"
        className=" w-full grid grid-cols-1 lg:grid-cols-1 lg:pt-24 pt-10 gap-5 py-5"
      >
        <div className=" lg:mb-0">
          <Typography
            as="h1"
            variant="display"
            className="text-black text-center"
          >
            We are Here for you 😍
          </Typography>
        </div>
      </Container>
      <Faq />
    </section>
  );
}
export default Contact;
