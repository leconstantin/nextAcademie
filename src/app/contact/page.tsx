import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact us",
};
export default function page() {
  return (
    <main>
      {/* about */}
      <section className="px-6 lg:px-14 pt-10 pb-20">
        <div className="lg:px-4">
          <div className="py-12">
            <p className="font-medium text-lg text-gray-500">Welcome</p>
            <h2 className="font-bold text-blue-400 text-4xl md:w-1/2  pt-2">
              Get in Touch
            </h2>
            <p className="pt-1 md:w-[70vw] text-balance text-slate-600 ">
              Visit our campus to experiencce our vibrant learning environment
              and dedicated staff.
            </p>
          </div>
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13128.209147203068!2d30.0505379!3d-1.5720065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc7de941d47015%3A0xa832b08ab391125e!2sAcademie%20De%20La%20Salle%20Byumba!5e1!3m2!1sen!2srw!4v1727861427706!5m2!1sen!2srw"
              width="600"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-14 pt-10 pb-20">
        <div className="px-4">
          <h2 className="font-bold text-blue-400 text-4xl pt-2">Contact Us</h2>
          <p className="pt-2 w-[70vw] text-balance text-slate-600 ">
            We&apos;d love to hear from you ❕
            <span className="w-40 border border-blue-400"></span>
          </p>
        </div>
        <div className="px-4 space-y-16 md:flex items-center justify-center">
          <div className="md:w-1/2">
            <div className="">
              <p className="text-gray-700 text-lg font-medium flex items-center gap-4 pt-10">
                <span className="text-xl">📧</span>
                academie@gmail.com
              </p>
              <p className="text-gray-700 text-lg font-medium flex items-center gap-4 pt-10">
                <span className="text-xl"> 📞</span>
                +25079552432
              </p>
              <p className="text-gray-700 text-lg font-medium flex items-center gap-4 pt-10">
                <span className="text-xl">🧭</span>
                Gicumbi - Byumba - Nyamabuye
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="max-w-full mx-auto flex flex-col gap-y-5">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-zinc-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="academie dela salle"
                  className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-zinc-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-zinc-700 font-medium">
                  Your message
                </label>
                <textarea
                  placeholder="Ex: When is the visiting day...."
                  className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500 min-h-28"
                />
              </div>

              <button className="block w-full my-4 appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none hover:text-blue-300 hover:bg-zinc-100 font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
