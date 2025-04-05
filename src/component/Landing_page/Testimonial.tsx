import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Testimonial() {
  return (
    <main className=" ml-62 mt-12">
      <h1 className="text-2xl font-bold"> Why invest with Agrive?</h1>
      <div className=" flex flex-col mt-6">
        <h2 className="font-semibold">
          What our customers are saying
        </h2>
        <div className="mt-6">
          <div className="">
            <div className="flex items-center gap-1.5">
              <Image
                src={"/image/woman.jpeg"}
                alt="woman"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-xs">
                <h3 className="font-semibold">Hannah</h3>
                <p className="">April 4, 2025</p>
              </div>
            </div>
            <div className="flex items-center mb-2 mt-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-black" />
              ))}
            </div>
            <p className=" w-[1020px]">
              I love that I can invest in something tangible and feel like I`m
              making a positive impact. The platform is easy to use and the
              customer service is great.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-1.5">
              <Image
                src={"/image/man.jpeg"}
                alt="man"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-xs">
                <h3 className="font-semibold">Lorenzo</h3>
                <p className="">January 22, 2025</p>
              </div>
            </div>
            <div className="flex items-center mb-2 mt-3">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-black" />
              ))}
            </div>
            <p className="w-[1020px]">
              I`m impressed with the level of transparency and the quality of
              produce I`ve received. It`s so rewarding to know where my food
              comes from and how it`s grown.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
