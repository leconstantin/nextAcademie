import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
};
export default function page() {
  return (
    <main>
      <section>
        <div className="relative grid w-full bg-indigo-500 h-96 lg:h-[32rem] place-items-center">
          <div className="flex flex-col items-center mx-auto text-center">
            <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">
              Hero Header
            </h1>
            <p className="mt-6 text-lg leading-5 text-white">
              The best in town.
            </p>
            <a href="#about" className="mt-8 cursor-pointer animate-bounce">
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="27"
                  cy="26"
                  r="18"
                  stroke="white"
                  stroke-width="2"
                ></circle>
                <path
                  d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <svg
          className="fill-indigo-500"
          viewBox="0 0 1440 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
        </svg>
      </section>
      <section className="fixe flex items-center justify-between max-w-4xl p-4 mx-auto bg-white border border-gray-200 shadow-md dark:bg-gray-900 left-12 bottom-16 dark:shadow-gray-900 shadow-gray-100 md:gap-x-4 dark:border-gray-700 rounded-2xl">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          By continuing to use this site you consent to the use of cookies in
          accordance with our cookie policy.
        </p>

        <button className="flex items-center justify-center text-gray-700 transition-colors duration-300 rounded-full shrink-0 dark:text-gray-200 dark:hover:bg-gray-700 w-7 h-7 focus:outline-none hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </section>
    </main>
  );
}
