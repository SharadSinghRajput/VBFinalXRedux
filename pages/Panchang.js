"use client"; 
import { PaperClipIcon, ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
export default function Questions() {
    const Panchang= [
        {
          name: "panchang1",
          img_url: "https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang1.png",
          time: "5:51:43" },
        {
          name: "panchang2",
          img_url: "https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang2.png",
          time: "18:48:5" },
        {
          name: "panchang3",
          img_url: "https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang3.png",
          time: "14:0:0" },
        {
          name: "panchang4",
          img_url: "https://www.vinaybajrangi.com/asset_frontend/img/icon-new/panchang4.png",
          time: "2:57:40" }
      ]
  return (
    <>
        <div className="bg-white p-5 pb-0 rounded-lg">
            <div class="grid grid-cols-2 gap-2 md:grid-cols-2 ">
                <div>
                    <h3 class="text-lg font-semibold">Aaj Ka <span>Panchang</span></h3>
                    <p className='text-sm'>Noida, uttar Pradesh, India</p>
                </div>
                <div className='flex justify-end items-start'>
                    <button type="button" className="rounded text-xs bg-orange-500 px-2 py-2 text-xs font-normal text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Detailed Panchang</button>
                </div>
            </div>
            <div className="relative mt-3">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-xs">Thursday, 18 April 2024</span>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-2 lg:grid-cols-5 mt-5 border-b-[1px] pb-4 border-b-orange-500">
                {Panchang.map((item, index) =>(
                    <div className='bg-orange-500 p-4 rounded-lg' key={index}>
                        <Image width={500} height={500} className='w-[100%] aspect-square' src={item.img_url} alt='' />
                        <p className='text-center text-xs text-white mt-2'>{item.time}</p>
                    </div>
                ))}
            </div>
            <div class="grid grid-cols-2 gap-2 md:grid-cols-2 py-5">
                <div className='flex divide-y divide-grey flex-col bg-white p-4 border-[1px]  border-grey-100 drop-shadow-lg rounded-lg'>
                    <div className='py-2'>
                        <h5 className='text-sm font-semibold'>Month</h5>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Amanta:</b> Chaitra</p>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Purnimanta:</b> Chaitra</p>
                    </div>
                    <div className='py-2'>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Tithi:</b> Chaitra</p>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Till::</b> 17:3336</p>
                    </div>
                    <div className='py-2'>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Yog:</b> Dand</p>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Till:</b> 24:4233</p>
                    </div>
                </div>
                <div className='flex divide-y divide-grey flex-col bg-white p-4 border-[1px]  border-grey-100 drop-shadow-lg rounded-lg'>
                    <div className='py-2'>
                        <h5 className='text-sm font-semibold'>Samvat</h5>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Amanta:</b> 2081-Peenhal</p>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Purnimanta:</b> 1946-Krodhi</p>
                    </div>
                    <div className='py-2'>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Nakshatra:</b> Ashlesha</p>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Till:</b> 7:579</p>
                    </div>
                    <div className='py-2'>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Karan:</b> Gara</p>
                        <p className='text-sm font-normal text-gray-700'><b className='font-medium'>Purnimanta:</b> 17:3336</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}