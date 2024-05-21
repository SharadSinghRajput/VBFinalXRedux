
import { useState } from 'react';
export default function TopRow({data}) {
    const [showFull, setShowFull] = useState(false)

  if (!data || !Array.isArray(data)) {
  
    return null;
  }

  return (
    <>
      <div className={`${showFull ? "h-[100%] pb-24 mb-20" : "h-52"} overflow-hidden transition-all ease-in duration-200 relative z-0`}> 
        <div className={`${showFull ? "grid grid-cols-4": "grid grid-cols-4" }`}>
              {data.map((item, index) =>(
              <div  key={index} className="cursor-all-scroll p-5 px-2">
                  <a href={item.path}
                  // style={{zIndex: data.length - index }}
                  className={`w-full gap-1 flex transition-all h-full ease-in duration-300 relative group`}>
                    {/* <span className='text-xl w-12 h-12 flex justify-center items-center bg-green-500 text-white rounded-lg'>{index}</span> */}
                    <span className='flex flex-1 flex-col p-5 text-black z-10 h-full rounded-lg border-[1px] font-normal text-base items-end BGBlur'>{item.title}
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg></span></span>
                    <span className={`${index % 3 === 0 ? 'Color3' : (index % 2 === 0 ? 'Color1' : 'Color2')}  w-full h-full absolute top-0 left-0 rotate-[5deg] rounded-lg group-hover:rotate-0 transition-all ease-in duration-200`}></span >
                    </a>
              </div>
              ))}
          </div>
          <div className='h-24 bg-gradient-to-t from-white from-10%  absolute bottom-0 left-0 w-full z-10 flex justify-center items-end'>
            <button
            onClick={()=> setShowFull(!showFull)}
            className='py-2 px-4 border-[1px] bg-white/50 border-gray-400 flex gap-4 justify-center items-center rounded-full text-sm font-normal' >
              {showFull ? <>
                Show Less
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
              </>:<>
                Show More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </>}
            </button>
          </div>
      </div>
    </>
  );
}