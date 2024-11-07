import { ModeToggle } from "../modeToggle";
import Link from "next/link";
import NavItem from "./navitem";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white shadow dark:bg-gray-800 py-5 px-5 md:px-10">
      <div>
        <Link href="/">
          <h1 className="text-xl font-semibold md:text-[25px] space-x-1 tracking-tight bg-gradient-to-b from-blue-200 via-blue-700 to-blue-600 text-transparent bg-clip-text ">
            <span>Academie</span>
            <span className="text-blue-500">Dela</span>
            <span>Salle</span>
          </h1>
        </Link>
      </div>
      <div>
        <NavItem />
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex lg:hidden xl:flex">
          <Link href="/admission">
            <span className="bg-blue-500 px-3 py-2 rounded-lg text-white tracking-tight font-semibold cursor-pointer hover:bg-blue-400">
              Enroll now
            </span>
          </Link>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
