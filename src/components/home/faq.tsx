import { faqs } from "@/lib/home";
import { FiMinus, FiPlus } from "react-icons/fi";
export default function Faq() {
  return (
    <section className="px-6 md:px-14 pt-20 pb-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-x-7 gap-y-16">
        <div className="md:w-[90%] sm:w-full">
          <p className="text-base font-semibold text-indigo-500">
            Frequently asked questions 🙋🏽
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100  xl:text-4xl xl:leading-[3.5rem]">
            Your guide to
            <span className="text-indigo-400"> our School Community</span>
          </h2>
        </div>
        <div className="min-w-[50%] sm:w-full">
          <h2 className=" text-sm font-semibold leading-7 text-slate-400">
            General
          </h2>

          <dl className="mt-2 divide-y divide-slate-100 dark:divide-zinc-700">
            {faqs.map((faq) => (
              <details
                key={faq.id}
                className="group py-4 marker:content-[&#39;&#39;]"
              >
                <summary className="flex w-full cursor-pointer select-none justify-between items-center gap-x-3 lg:gap-x-3 md:gap-0 text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                  <h4 className="dark:text-white">{faq.question}</h4>
                  <FiPlus className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 dark:stroke-slate-50  group-open:hidden font-thin" />
                  <FiMinus className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 dark:stroke-slate-50 hidden group-open:flex  group-open:stroke-indigo-500 font-thin" />
                </summary>
                <div className="pt-5">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
