export default function ParagraphLoder({data, FirstData}) {
    return (
        <>
        <div className='w-full flex flex-col gap-5'>
            <div role="status" class="max-w-sm animate-pulse w-full">
                <div class="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        </>
    )
}
