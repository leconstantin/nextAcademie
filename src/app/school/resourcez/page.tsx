import Healthy from "@/components/resources/healthy";
import Play from "@/components/resources/tailwindplay";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Resources",
};
export default function page() {
  return (
    <main>
      <Play />
      <Healthy />
    </main>
  );
}
