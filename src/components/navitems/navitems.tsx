'use client'
import { Navitems as navItems } from "@/lib/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems(){
    const pathname = usePathname() ?? '/';
    const isactive: (path: string) => boolean = (path: string) => {
            if (path === '/') return pathname === '/';
            return pathname.startsWith(path);
    }
    return(
        <>
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {navItems.map(({href,title})=>(
                <li key={href}>
                    <Link href={href} className={`hover:text-yellow-500 transition-colors ${isactive(href)?'text-gray-100':''}`}>{title}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}