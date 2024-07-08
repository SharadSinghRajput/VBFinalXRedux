import Image from 'next/image';

export default function TopRow({data}) {
    // Ensure data is available before rendering
    if (!data) return null; 

    // Determine the tag dynamically
    let Tag = "h3";
    switch (data.titleTag) {
        case "h1":
            Tag = "h1";
            break;
        case "h2":
            Tag = "h2";
            break;
        case "h3":
            Tag = "h3";
            break;
        case "h4":
            Tag = "h4";
            break;
        case "h5":
            Tag = "h5";
            break;
        case "h6":
            Tag = "h6";
            break;
        default:
            Tag = "h3";
    }


    const description = data.description ? String(data.description).replace(/\\r\\n/g, '<br/>') : '';


    // Render component
    return (
        <>
            <div className="rounded-lg shadow-lg bg-white p-5 mt-5 w-full">
                {data.title ? <Tag className="text-lg font-bold mb-5">{data.title}</Tag> : null }
                {data.image ? <Image src={data.image} width={1200} height={300} />: null}
                {description ? <div className="text-base text-gray-900 text-justify" dangerouslySetInnerHTML={{ __html: description }}/> :null}
            </div>
        </>
    );
}
