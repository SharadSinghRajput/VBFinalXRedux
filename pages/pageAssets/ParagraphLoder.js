export default function ParagraphLoder({data, FirstData}) {
    return (
        <>
        <div className='w-full bg-white p-5 flex flex-col gap-5'>
            <div role="status" class="max-w-sm animate-pulse w-full">
                <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
            <div role="status" class="max-w-sm animate-pulse w-full">
                <div class="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        </>
    )
}
