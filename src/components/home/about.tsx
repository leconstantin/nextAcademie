import { aboutContent } from "@/lib/home";

export default function About() {
  return (
    <div className="">
      {aboutContent.map((article) => (
        <section className="px-6 md:px-14  pb-20" key={article.id}>
          <div className="flex flex-col items-center   justify-center">
            <p className="text-lg text-gray-500 ">Unique</p>
            <h2 className="font-bold text-4xl lg:w-1/2 text-center pt-4">
              More
              <span className="text-blue-400"> about </span>
              our home
            </h2>
            <p className="pt-4 text-center w-[70vw] text-balance text-slate-500 ">
              {article.subtitile}
            </p>
          </div>
          <div className="flex  flex-col-reverse lg:flex-row pt-20 gap-x-16 gap-y-10">
            <div className="lg:w-1/2">
              <p className="font-medium text-zinc-700 leading-8 text-lg text-balance">
                {article.content}
              </p>
            </div>
            <div className="lg:w-1/2 shadow-xl rounded-md bg-indigo-100 ">
              <img
                src={article.src}
                alt={article.banner}
                className="rounded-md ring-1 ring-zinc-200 rotate-6 shadow-xl animate-pulse animate-infinite animate-duration-9000"
                loading="lazy"
                title={article.banner}
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
