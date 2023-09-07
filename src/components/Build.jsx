import React from "react";
import Section from "./Section";
import Khatey from "@/images/team/blue.png";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Teacher" image={{ src: Khatey, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Japanese language teacher of Drishti Classes since 2 years.
        </p>
        <p>
          We ensure our student for Grade A results and Best Preparation for All Exams.
        </p>
        {/* <p>
          Our account managers are trained to only reply to client emails after
          9pm, several days after the initial email. This reinforces the general
          aura that we are very busy and dissuades clients from asking for
          changes.
        </p> */}
      </div>
      <Blockquote
        author={{ name: "Drishti", role: "Vision" }}
        className="mt-12"
      >
        Strong leadership is essential in striking the right balance. Leaders should communicate a 
        clear vision that emphasizes the importance of both reliability and innovation, ensuring 
        alignment throughout the organization.
      </Blockquote>
    </Section>
  );
};

export default Build;
