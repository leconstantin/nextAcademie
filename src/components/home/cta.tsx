import Image from "next/image";
import Link from "next/link";
export default function Cta() {
  return (
    <section className="bg-gray-100 dark:bg-neutral-900 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl flex md:flex-none md:flex-row flex-col items-center">
        <div className="lg:w-1/2">
          <div>
            <Image
              src="/school/likes.jpg"
              width={500}
              height={64}
              alt="school photo"
              className="h-64 bg-cover lg:h-full"
            />
          </div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Build Your New <span className="text-blue-500">Foundation</span>
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link href="/admission">
              <span className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Start Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
