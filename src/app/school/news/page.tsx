import type { Metadata } from "next";
import News from "@/components/blog/news";
export const metadata: Metadata = {
  title: "News & Blog",
};
export default function page() {
  return (
    <main>
      <News />
    </main>
  );
}
