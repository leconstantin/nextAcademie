import { aboutContent } from "@/lib/home";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="">
      {aboutContent.map((article) => (
        <section className="px-6 md:px-14  pb-20" key={article.id}>
          <div className="flex flex-col items-center   justify-center">
            <p className="text-lg text-gray-500 dark:text-gray-100">Unique</p>
            <h2 className="font-bold text-4xl lg:w-1/2 text-center pt-4">
              More
              <span className="text-blue-400"> about </span>
              our home
            </h2>
            <p className="pt-4 text-center w-[70vw] text-balance text-slate-500 dark:text-slate-200">
              {article.subtitile}
            </p>
          </div>
          <div className="flex  flex-col-reverse lg:flex-row pt-20 gap-x-16 gap-y-10">
            <div className="lg:w-1/2">
              <p className="font-medium text-zinc-700 dark:text-zinc-200 leading-8 text-lg text-balance">
                {article.content}
              </p>
              <Link href="/about">
                <span className="text-sky-500 hover:text-sky-600 text-sm pt-7">
                  Learn more &rarr;
                </span>
              </Link>
            </div>
            <div className="lg:w-1/2 shadow-xl rounded-md bg-indigo-100 dark:bg-slate-50">
              <Image
                width={700}
                height={500}
                src={article.src}
                alt={article.banner}
                className="rounded-md ring-2 ring-zinc-100 rotate-6 hover:-rotate-0 ease-in duration-500 shadow-xl "
                title={article.banner}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
