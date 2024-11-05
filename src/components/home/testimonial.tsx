import { people } from "@/lib/home";
import TestimonialCard from "./testimonialCard";

export default function Testimonial() {
  return (
    <section className="test px-6 md:px-14 pt-10 pb-20 p-">
      <div className="flex flex-col">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-indigo-600 font-semibold text-lg leading-6 tracking-tight">
            Testimonials
          </h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear from our students and Parents on the impact of
            <span className="text-blue-400"> our school community.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
          {people.map((person) => (
            <div key={person.id} className="first:sm:col-span-1">
              <TestimonialCard {...person} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
