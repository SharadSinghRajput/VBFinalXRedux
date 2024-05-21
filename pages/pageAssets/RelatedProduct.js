import { Date } from "../../config/SvgConst";
import Image from "next/image";
import { useRouter } from 'next/router';
import Title from "./Title";
import placeholderImage from "../assets/images/default-image.png";



export default function Example({ data }) {
    const router = useRouter();
    console.log("data", data)
  return (
    <>
    {data ?
        data.map((item, index)=>(
            <button key={index} onClick={()=> router.push(item.path)} className="mx-auto rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10 mt-10">
                {/* {item.banner ? <>
                    <Image
                        width={200}
                        height={100}
                        src={item.banner}
                        alt={item.title}
                        className="w-full aspect-auto"
                    />
                    </>:<>
                    <Image
                        width={200}
                        height={100}
                        src={placeholderImage}
                        alt={item.title}
                        className="w-full aspect-auto"
                    />
                    </>} */}
                <p className="text-sm font-bold leading-6 text-left text-gray-900">{item.title}</p>
                <div className="mt-4 flex items-center gap-x-5">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">{item.price[0]?.icon} {item.price[0]?.price}</button>
                    <button type="button"
                    className="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >ADD TO CART</button>
                </div>
            </button>
        ))
    : null}
    </>
  );
}
