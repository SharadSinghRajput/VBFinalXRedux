import { Date } from "../config/SvgConst";
import Image from "next/image";
import { useRouter } from 'next/router';
import placeholderImage from "./assets/images/default-image.png";


export default function Example({ Data }) {
    const router = useRouter();
  if (!Data) {
    return null;
  }
  return (
    <>
    {Data ? <>
      {Data.map((category, index) => (
        <a key={index} href={category.path} className="block">
          <div className="shadow-md rounded-lg bg-white">
            <div aria-hidden="true" className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75">
            {category.featuredImg ? <>
              <Image
                width={200}
                height={100}
                src={category.featuredImg}
                alt={category.title}
                className="w-full aspect-auto"
                fetchpriority
              />
            </>:<>
              <Image
                width={200}
                height={100}
                src={placeholderImage}
                alt={category.title}
                className="w-full aspect-auto"
                fetchpriority
              />
            </>}
            </div>
            <div className="p-3 pt-3">
              {category.title ? <h3 className="text-sm mb-4 font-bold text-gray-900">{category.title}</h3> : null} 
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
