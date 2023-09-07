import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

/* eslint react/no-unescaped-entities */
const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is Mentorship">
        <p>
          Mentorship programs at Drishti Classes connect students with experienced mentors who can offer
          valuable advice, share their knowledge, and inspire them to reach their full potential.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Drishti classes is an educational technology Institute headquartered in Budhanilkantha-12, Durga Mandir, Kapan, Kathmandu, Nepal.
            It was founded by<strong> Mukesh Tamatta</strong> in  B.S .2079.
          </p>
          <p>
            Live / Scheduled Lectures 24/7
            In this Schedule we will take care of Learners . We will solve their problems in 24 hours of
            students. Learning is an important step for achieving dreams in a student’s journey. We encourage
            the student to explore the concept in depth instead of memorizing. The live lectures help us in
            learning theneeds of the students and motivate the students to be creative and be passionate
            learners.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35+" label="Underpaid employees" />
          <StatListItem value="100+" label="Satisfied Students" />
          <StatListItem value="$100K" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
