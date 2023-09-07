import React from "react";
import Section from "./Section";
import dhartifodkey from "@/images/team/Mukesh.png";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Mukesh Tamatta" image={{ src: dhartifodkey, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong>Mukesh Tamatta</strong>,  is an Nepalese business magnate, Teacher, internet entrepreneur,
          and philanthropist. He co-founded the Drishti Classes back in 2022.
        </p>
        <p>
          Dedicated and passionate educator with 5 years of experience in teaching Mathematics and Physics.
          Possesses 8 months of teaching experience in MS-CET courses. Additionally, has exposure to the aviation
          field through work at IGT SOLUTIONS Pvt Ltd, Pune. Engaged in various extracurricular activities, including
          participation in mathematics competitions and electronics excellence events. Demonstrates a
          strong commitment to academic and personal growth.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">Mr. Tamatta</strong> is also
          Proficient in a range of software skills, including computer fundamentals, with certifications in PC Operation (CPO),
          Desk Top Publishing (CDP), and Internet usage.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        EDUCATIONAL QUALIFICATIONS
      </h3>
      <TagList className="mt-4">
        <TagListItem>M.sc. physics</TagListItem>
        <TagListItem>B. Sc from Savitribai Phule Pune
          University </TagListItem>
        {/* <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem> */}
      </TagList>
    </Section>
  );
};

export default Discover;
