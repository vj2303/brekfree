'use client'
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname

const user = {
  userName: "Natashia Bunny",
  email: "natashiabunny@mail.com",
};

const Navbar = () => {
  const pathname = usePathname(); // Get the current route

  // Hide Navbar on the login page
  if (pathname === "/login") {
    return null;
  }

  return (
    <nav className="flex justify-between border-b border-grey-rgba px-[40px]">
      <Image src={"/logo.png"} alt="logo" width={104} height={104} />
      <div className="flex items-center gap-[12px]">
        <Bell className="mr-[12px]" />
        <Image
          src="/dummyAvatar.jpg"
          alt="profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span>
          <p className="font-medium">{user.userName}</p>
          <p>{user.email}</p>
        </span>
        <ChevronDown />
      </div>
    </nav>
  );
};

export default Navbar;
