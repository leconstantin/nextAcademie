import { buttons, heroContent } from "@/lib/home/hero";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <main className="relative w-full overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/school/likes.jpg"
          alt="background image of hero"
          layout="fill"
          className="bg-indigo-100 h-screen w-screen object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-55"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4 md:px-14">
        {heroContent.map((content) => (
          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="mx-auto max-w-5xl text-4xl md:text-5xl font-medium font-poppins tracking-tight text-slate-50  text-center">
                {content.title}
              </p>
            </div>
            <div className="max-w-3xl">
              <p className="mx-auto my-6 text-2xl tracking-tight font-poppins text-slate-50  text-center">
                {content.subtitle}
                <span className="text-blue-400 font-semibold font-mono">
                  {" "}
                  Together we can.
                </span>{" "}
                🖐️
              </p>
            </div>
          </div>
        ))}

        <div className="flex gap-x-12 pt-20 md:pt-14">
          {buttons.map((btn) => (
            <button key={btn.id}>
              <Link href="">
                <span className="inline-flex items-center justify-center px-4 py-2  font-poppins text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-transparent hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-gray-800">
                  {btn.text}
                </span>
              </Link>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
