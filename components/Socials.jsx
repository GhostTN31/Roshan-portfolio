"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const social_path = [
  {
    icon: <FaGithub />,
    path: "http://github.com/GhostTN31",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/roshan-t-2ba6a2208/",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/8220540673",
  },
  // {
  //   icon: <SiLeetcode />,
  //   path: "",
  // },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social_path.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
