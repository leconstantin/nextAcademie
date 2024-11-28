import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <Image src="/selfbricks.svg" width={500} height={500} alt="loader" />
      </div>
    </main>
  );
}
