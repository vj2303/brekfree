"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'


type navLinkType = {
    label: string,
    link: string,
    icon: React.ReactElement,
}

const LinkComp = ({ navLink }: { navLink: navLinkType }) => {
    const pathname = usePathname()
    return (
        <Link
            href={navLink.link}
            className={`flex flex-col items-center gap-2 m-4 rounded-xl p-2 ${pathname === navLink.link ? "bg-[#F0F3FA]" : ""}`}
        >
            {navLink.icon}
            <span>{navLink.label}</span>
        </Link>
    )
}

export default LinkComp