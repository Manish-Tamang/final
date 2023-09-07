import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/team/lede.png";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Member" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        SLC from Saraswati Secondary School , Jayagadh , Achham.{" "}
           <strong className="font-semibold text-neutral-950">
           Intermediate </strong>
            from Siddhanath Multiple Campus , Mahendranagar , Kanchanpur 

        </p>
        <p>
        Bachelor from Kailali Multiple Campus Dhangadhi , Kailali. {" "}
        Master from Tribhuwan University Kirtipur , Kathmandu.
        15 years  teaching experience  as an English teacher  at Shree Saraswati Secondary School ,
         Bannigadhi Rural Municipality Ward number.
        </p>
        <p>
        Assistant Headmaster of Shree Saraswati secondary School Jayagadh , Achham 
          
        </p>
      </div>
      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
    </Section>
  );
};

export default Deliver;
