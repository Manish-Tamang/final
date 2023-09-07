import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
 
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Our Team", href: "/process" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
