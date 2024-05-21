import { Date } from "../config/SvgConst";
import Image from "next/image";
import { useRouter } from 'next/router';


export default function Example({ Data }) {
    const router = useRouter();
  if (!Data) {
    return null;
  }
console.log("Data Blog", Data)
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
                src={category.bannerImage}
                alt={category.name}
                className="w-full aspect-auto"
                fetchpriority
              />
            </div>
            <div className="px-3 pt-2 flex gap-2 justify-start items-center">
              <Date width={15} height={15} />
              <p className="text-xs text-gray-800">{category.date}</p>
            </div>
            <div className="p-3 pt-3">
              {category.name ? <h3 className="text-sm mb-4 font-bold text-gray-900">{category.name}</h3> : null} 
              <div className='mb-2 text-sm text-black text-justify' 
                  dangerouslySetInnerHTML={{ __html: category.shortDesc && category.shortDesc.length > 180 ? category.shortDesc.slice(0, 150).replace(/\\r\\n/g, '<br/>') + "..." : category.shortDesc.replace(/\\r\\n/g, '<br/>') }} 
                />
              <p className="text-sm mb-4 text-justify text-gray-800">{}</p>
              <button
              onClick={() => router.push(category.path)}
              className="block w-full rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-normal text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Read More <span aria-hidden="true">&rarr;</span></button>
            </div>
          </div>
        </a>
      ))}
  
    </>:<></>}
    </>
  );
}
