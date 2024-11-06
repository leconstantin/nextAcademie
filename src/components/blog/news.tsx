export default function News() {
  return (
    <section className="bg-white dark:bg-gray-900 px-1 md:px-5">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            From the blog
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Explore what's happening in our classrooms and around campus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1630830844072-b7ad174db3bc?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                Back to School: Tips for a Successful Year
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Welcome back, Academie dela salle families! As we gear up for
                another exciting school year, we're here to share some helpful
                tips to ensure that students are ready for success, both inside
                and outside the classroom. Whether you're starting the year as a
                returning student or joining us for the first time, we've got
                everything you need to make this school year your best one yet.
              </p>

              <p className="mt-3 text-sm text-blue-500">21 October 2024</p>
            </div>
          </div>

          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <a
                href="#"
                className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                School Events You Won't Want to Miss This Semester
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                The new semester is here, and it's packed with exciting events
                and activities designed to bring our school community together.
                Whether you're a student, parent, or teacher, there's something
                for everyone to look forward to. From school spirit days to
                academic showcases, this semester promises to be one for the
                books! Here's a sneak peek at the events you won't want to miss:
              </p>

              <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
