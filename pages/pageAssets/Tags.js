export default function Tags({TagData}) {
  if (!TagData || !Array.isArray(TagData)) {
    return null;
  }
  
  return (
    <>
    <div className="">
        <p className="text-xl mt-4 font-semibold mb-2 leading-6 text-black">Tags:</p>
        <div className='flex flex-wrap gap-2'>
            {TagData.map((item, index) =>(
                <div className="rounded-md bg-orange-100 p-2 px-4" key={index}>
                    <p className="text-sm text-orange-500">{item}</p>
                </div>
            ))}
        </div> 
    </div>
    </>
  );
}
