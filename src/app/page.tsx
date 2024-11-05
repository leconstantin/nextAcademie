import About from "@/components/home/about";
import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import News from "@/components/home/newsLetter";
import Principal from "@/components/home/principal";
import Program from "@/components/home/program";
import Testimonial from "@/components/home/testimonial";
import Values from "@/components/home/value";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden min-h-screen">
      <Hero />
      <Values />
      <About />
      <Program />
      <Testimonial />
      <Principal />
      <Faq />
      <News />
    </main>
  );
}
