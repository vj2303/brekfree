'use client'
import { ChartNoAxesColumnIncreasing, Home, Plus } from "lucide-react";
import React from "react";
import LinkComp from "./LinkComp";
import { usePathname } from "next/navigation";

type navLinkType = {
  label: string;
  link: string;
  icon: React.ReactElement;
};

const navLinks: navLinkType[] = [
  {
    label: "Home",
    link: "/",
    icon: <Home />,
  },
  {
    label: "Create",
    link: "/create",
    icon: <Plus />,
  },
  {
    label: "Evaluate",
    link: "/evaluate",
    icon: <ChartNoAxesColumnIncreasing />,
  },
];

const Sidebar = async () => {
  const pathname = usePathname();

  // Hide sidebar on the login page
  if (pathname === "/login") {
    return null;
  }

  return (
    <div className="w-[110px] fixed ">
      {navLinks.map((navLink) => (
        <LinkComp navLink={navLink} key={navLink.link} />
      ))}
    </div>
  );
};

export default Sidebar;
