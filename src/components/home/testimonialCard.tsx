import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  body,
  imgUrl,
  name,
  handle,
}: {
  body: string;
  imgUrl: string;
  name: string;
  handle: string;
}) => {
  return (
    <div className="">
      <figure className="space-y-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition">
        <blockquote className="text-gray-900">
          <p>{body}</p>
        </blockquote>
        <figcaption className="flex items-center gap-x-4">
          <Image
            src={imgUrl}
            alt={name}
            width={30}
            height={30}
            title={name}
            className="h-10 w-10 flex-none rounded-full bg-gray-50 object-cover"
          />
          <div className="flex-auto">
            <div className="font-medium">{name}</div>
            <div className="text-zinc-500">{handle}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialCard;
