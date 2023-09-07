import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imgclass from "../images/Class.png";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We offer personalized tutoring services to assist students in understanding and mastering their subjects."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Experienced tutors provide guidance,
          address questions,
          and help students build a strong
          foundation in their chosen fields.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imgclass}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="CTEVT entrance Preparation">
              We specialise in H.A., Staff Nurse, CMA, ANM, D.Pharmacy, CMLT, Veterinary, Agriculture, 
              OA, Ranger, Lab, Overseer, Optometry, RadioGraphy, Dental, Amin.
            </ListItem>
            <ListItem title="All language courses">
              We have courses of English language, Japanese language(N4/N5 Level), Korean language, TOEFL, IELTS.
            </ListItem>
            <ListItem title="BSW/BBA/BA/BCA/B.Ed.">
              We give courses of all bachelor degree. BBS Level course and B.SC Level courses.
            </ListItem>
            <ListItem title="License Exam Preparation">
              Nursing and Pharmacy exam preparations.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
