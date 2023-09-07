import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTiktok,
  BsYoutube, 
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://youtube.com/@Drishti_classes2079?si=QSspB1InU4QgO5un",
    icon: BsYoutube,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100091976812386",
    icon: BsFacebook,
  },
  { title: "Tiktok", href: "https://www.tiktok.com/@drishti_classes", icon: BsTiktok },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
