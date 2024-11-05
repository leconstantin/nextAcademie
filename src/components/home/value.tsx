import { valuesContent } from "@/lib/home";

export default function Values() {
  return (
    <section className="px-5 md:px-12 lg:pt-10 py-40 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10 items-center">
        {valuesContent.map((value) => (
          <div
            key={value.id}
            className={`flex flex-col items-center shadow-lg  px-4 py-10 rounded ease-in-out duration-500  hover:scale-105 ${
              value.id % 2 == 0
                ? "lg:mt-28 ring-1 ring-zinc-200 dark:ring-slate-500 bg-white dark:bg-gray-700"
                : "bg-blue-300 dark:bg-blue-900 text-white"
            }`}
          >
            <div className="text-5xl mb-1 mt-6">{value.icon}</div>
            <h4 className="py-4 font-bold">{value.title}</h4>

            <p className="text-center pb-10 pt-6 font-medium leading-8">
              {value.subtitile}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
