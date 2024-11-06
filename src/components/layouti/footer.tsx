import { navGroup, navLinks, support } from "@/lib/navlink";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <footer className="bg-blue-400 darK:bg-neutral-800 px-6 lg:px-10 pt-10 text-white">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2 pb-9 pt-5">
          <div className="lg:col-span-2 w-full">
            <h5 className="font-bold uppercase tracking-tight pb-3">
              Academie DLS
            </h5>
            <p className="text-balance leading-5 pr-3">
              We aspire to be a world-leading institution committed to providing
              excellent holistic education to young people. Our focus is on
              nurturing well-rounded individuals who are equipped with the
              knowledge, skills, and values needed to thrive in an ever-changing
              global landscape.
            </p>
          </div>

          <div className=" w-full">
            <h5 className="font-bold uppercase tracking-tight pb-3">
              Quick Links
            </h5>

            <ul className="w-20">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="font-normal  text-base transition-[2s] hover:translate-x-2  pb-1"
                >
                  <Link href={link.href}>
                    <span className="tracking-tight text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h5 className="font-bold uppercase tracking-tight pb-3">School</h5>

            <ul className="w-40">
              {navGroup.map((res) => (
                <li
                  key={res.id}
                  className="font-normal  text-base transition-[2s] hover:translate-x-2  pb-1"
                >
                  <Link href={res.href}>
                    <span className="tracking-tight text-sm cursor-pointer">
                      {res.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h5 className="font-bold uppercase tracking-tight pb-3">Support</h5>
            <ul className="w-40">
              {support.map((sup) => (
                <li
                  key={sup.id}
                  className="font-normal  text-base transition-[2s] hover:translate-x-2  pb-1"
                >
                  <Link href={sup.path}>
                    <span className=" tracking-tight text-sm cursor-pointer">
                      {sup.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h5 className="font-bold uppercase tracking-tight pb-3">
              OPEN HOURS
            </h5>
            <div>
              <p className="text-balance  font-normal leading-5 pb-5">
                Our support available to help you 24 hours a day, seven days a
                week.
              </p>
            </div>
            <ul className="list-unstyled">
              <li className="pb-1 tracking-tight text-sm">
                Monday-Friday: <span>8am to 5pm</span>
              </li>
              <li className="pb-1 tracking-tight text-sm">
                Saturday: <span>10am to 3pm</span>
              </li>
              <li className="pb-1 tracking-tight text-sm">
                Sunday: <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border border-slate-200 mt-4" />

        <div className="flex md:justify-end mt-6 gap-4">
          <div className="bg-white hover:bg-transparent h-10 w-10 text-black flex items-center justify-center rounded-full shadow-lg shadow-blue-900 hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
            <BsTwitterX size={20} />
          </div>
          <div className="bg-white hover:bg-transparent h-10 w-10 text-black flex items-center justify-center rounded-full shadow-lg shadow-blue-900 hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="bg-white hover:bg-transparent h-10 w-10 text-black flex items-center justify-center rounded-full shadow-lg shadow-blue-900 hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
            <FaFacebookF size={20} />
          </div>
          <div className="bg-white hover:bg-transparent h-10 w-10 text-black flex items-center justify-center rounded-full shadow-lg shadow-blue-900 hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
            <FaInstagram size={20} />
          </div>
          <div className="bg-white hover:bg-transparent h-10 w-10 text-black flex items-center justify-center rounded-full shadow-lg shadow-blue-900 hover:scale-110 hover:ring-1 ring-white ease-in duration-300 cursor-pointer">
            <FaWhatsapp size={20} />
          </div>
        </div>

        <div className="mt-auto text-center text-zinc-200 boder-t py-6">
          <small>&copy; 2024. All right reserved by Academie dela salle</small>
        </div>
      </footer>
    </>
  );
}
