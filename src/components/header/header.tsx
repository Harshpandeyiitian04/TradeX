import Image from "next/image";
import Link from "next/link";
import NavItems from "../navitems/navitems";
import Usedropdown from "../usedropdown/usedropdown";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0B1220] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 w-full">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/tumbnail.png"}
                alt="signaling logo"
                width={140}
                height={32}
                className="h-8 w-auto cursor-pointer"
              />
              <div>
                <span className="text-xl text-white font-bold">Trade</span>
                <span className="text-xl text-[#FDBD01] font-bold">X</span>
              </div>
            </Link>

            <nav className=" sm:hidden sm:items-center sm:gap-6">
              <NavItems />
            </nav>
            <Usedropdown />
          </div>
        </div>
      </header>
    </>
  );
}
