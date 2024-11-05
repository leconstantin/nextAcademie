import type { Metadata } from "next";
import OurStaff from "@/components/staff/ourStaff";
export const metadata: Metadata = {
  title: "Our staff",
};
export default function page() {
  return (
    <main className="">
      <OurStaff />
    </main>
  );
}
