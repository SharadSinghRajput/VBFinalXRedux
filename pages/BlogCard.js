"use client";
import { Date } from "../config/SvgConst";
import Image from "next/image";

export default function Example({ Data }) {
  if (!Data) {
    // If Data is undefined or null, return null or handle the loading state as needed
    return null;
  }

  return (
    <>
    {Data ? <>
      {Data.map((category, index) => (
        <a key={index} href={category.href} className="block">
          <div className="shadow-md rounded-lg bg-white">
            <div aria-hidden="true" className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
              <Image
                width={200}
                height={100}
                src={category.imageSrc}
                alt={category.imageAlt}
                className="w-full aspect-auto"
                priority
              />
            </div>
            <div className="px-5 pt-2 flex gap-2 justify-start items-center">
              <Date width={15} height={15} />
              <p className="text-xs text-gray-800">{category.date}</p>
            </div>
            <div className="p-5 pt-3">
              <h3 className="text-sm mb-4 font-bold text-gray-900">{category.name}</h3>
              <p className="text-sm mb-4 text-justify text-gray-800">{category.description && category.description.length > 180 ? category.description.slice(0, 150) + "..." : category.description}</p>
              <button className="block w-full rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-normal text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Read More <span aria-hidden="true">&rarr;</span></button>
            </div>
          </div>
        </a>
      ))}
  
    </>:<></>}
    </>
  );
}
