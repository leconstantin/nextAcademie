import type { Metadata } from "next";
import Photo from "@/components/gallery/photo";
export const metadata: Metadata = {
  title: "Gallery",
};
export default function page() {
  return (
    <main>
      <Photo />
    </main>
  );
}
