import { CiCircleCheck } from "react-icons/ci";
export default function AnimatedProgram() {
  return (
    <>
      <div className="bg-gray-50  lg:flex items-center justify-center px-4 md:px-7 py-10 gap-9">
        <div className="relative max-w-lg lg:w-1/2">
          {/* cicles */}
          {/* TODO:circle 1 */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

          {/* TODO:circle 2 */}
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          {/* TODO:circle 3 */}
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          {/* Rectangles */}
          <div className="m-8 relative space-y-4">
            {/* square 1 */}
            <div className="p-5 bg-white rounded-lg font-bold">Nursery</div>
            {/* square 2 */}
            <div className="p-5 bg-white rounded-lg font-bold">Primary</div>

            {/* square 3 */}

            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 font-bold">
              <div className="flex-1">Secondary</div>
            </div>
          </div>
        </div>
        <div>
          <div className="divide-y divide-gray-300/50 px-4">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>Our school have different education systems which are:</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />

                  <p className="ml-4">
                    More efficient to
                    <code className="text-sm font-bold text-gray-900">
                      {" "}
                      every
                    </code>{" "}
                    student
                  </p>
                </li>
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">
                    Well{" "}
                    <code className="text-sm font-bold text-gray-900">
                      Prepared
                    </code>
                  </p>
                </li>
                <li className="flex items-center">
                  <CiCircleCheck
                    size={29}
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                  />
                  <p className="ml-4">Code completion with instant preview</p>
                </li>
              </ul>
              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">Want to know more about that ?</p>
              <p>
                <a
                  href="https://tailwindcss.com/docs"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Read more &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
