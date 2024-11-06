export default function Photo() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 md:px-9 py-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            Highlights of the Year
          </h1>
          <p className="text-zinc-600">
            A Collection of Unforgettable Memories from Our Students and Faculty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* <!-- Large item --> */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/likes.jpg"
              alt="Nature"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white">
                  Explore Nature
                </h3>
                <p className="text-white">Discover the beauty of our school</p>
              </div>
            </div>
          </div>

          {/* <!-- Two small items --> */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/aaa.jpg"
              alt="Food"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">
                  Student Highlight
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/bbb.jpg"
              alt="Technology"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">
                  Best our school
                </h4>
              </div>
            </div>
          </div>

          {/* <!-- Three medium items --> */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/ccc.jpg"
              alt="Travel"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">
                  Students Highliht
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/ddd.jpg"
              alt="Art"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">
                  Students Highliht
                </h4>
              </div>
            </div>
          </div>

          {/* <!-- bottom cards --> */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/eee.jpg"
              alt="Sport"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">
                  {" "}
                  Students Highliht
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/fff.jpg"
              alt="Sport"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">
                  {" "}
                  Students Highliht
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/ggg.jpg"
              alt="Sport"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">
                  {" "}
                  Students Highliht
                </h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="/school/hhh.jpg"
              alt="Sport"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">
                  {" "}
                  Students Highliht
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
