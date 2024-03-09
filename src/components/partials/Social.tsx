import React from "react";
import { Link } from "react-router-dom";

interface SocialItem {
  alt: string;
  pathSVG: string;
  href: string;
}

const socialList: SocialItem[] = [
  {
    alt: "facebook",
    pathSVG: "/assets/ic_Facebook.svg",
    href: "https://www.facebook.com",
  },
  {
    alt: "linkedIn",
    pathSVG: "/assets/ic_LinkedIN.svg",
    href: "https://www.facebook.com",
  },
  {
    alt: "facebook",
    pathSVG: "/assets/ic_youtube.svg",
    href: "https://www.facebook.com",
  },
  {
    alt: "facebook",
    pathSVG: "/assets/ic_gmail.svg",
    href: "https://www.facebook.com",
  },
];

export default function SocialConnect() {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="drop-shadow-xl z-50 text-[26px] p-4 bg-white fixed bottom-16 right-0 text-white flex-col items-center justify-center">
      {socialList.map((e, i) => {
        return (
          <Link key={i} to={e.href}>
            <img src={e.pathSVG} alt={e.alt} className="py-4"></img>
          </Link>
        );
      })}
    </div>
  );
}
