export default function News() {
  return (
    <section className="flex flex-col max-w-6xl sm:mx-auto overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-zinc-200 dark:bg-gray-800 md:flex-row md:h-48 my-4 mx-5">
      <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-blue-400 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
            💌 Subscribe to{" "}
            <span className="text-blue-800 dark:text-blue-400 md:text-blue-300">
              School
            </span>{" "}
            news & Updates
          </h2>

          <p className="mt-2 text-s text-zinc-600 dark:text-gray-400 md:text-zinc-100">
            Stay informed about important events, academic updates,
            extracurricular activities, and special announcements. Get the
            latest news delivered directly to your inbox, ensuring you never
            miss out on what&apos;s happening at our school. Sign up today and
            be part of our vibrant community!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 ">
        <form>
          <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="pl-6 pr-12 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
              type="text"
              name="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />

            <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-300 hover:bg-blue-500 rounded-md  focus:bg-gray-600 focus:outline-none">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
