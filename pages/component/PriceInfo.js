"use client"; 
import { HomeIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';

export default function BlogList({data}) {
    const router = useRouter();
  return (
    <>
      <div className="relative group z-10">
        <span className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </svg>
        </span>
        <div className="shadow-lg p-0 w-0 absolute h-0 overflow-hidden group-hover:h-36 group-hover:w-52 group-hover:p-2 z-10 bg-white transition-all ease-in duration-200">
            <p className="pb-2 mb-2">Price details</p>
            <div className="flex gap-2 justify-between">
                <p className="text-xs text-gray-400">Maximum Retail Price</p>
                <p className="text-xs line-through text-gray-400 font-medium">{data.icon} {data.price}</p>
            </div>
            <div className="w-full my-2" />
            <div className="flex gap-2 justify-between">
                <p className="text-xs text-gray-400">Selling Price</p>
                <p className="text-xs line-through text-gray-400 font-medium">{data.icon} {data.price}</p>
            </div>
            <div className="w-full border-t border-dashed border-gray-300 my-2" />
            <div className="flex gap-2 justify-between">
                <p className="text-xs font-semibold">Special Price</p>
                <p className="text-xs font-semibold text-green-500">{data.icon} {data.dealPrice}</p>
            </div>
        </div>
    </div>
  
    </>
  )
}
