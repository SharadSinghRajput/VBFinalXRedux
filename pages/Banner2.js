"use client"; 
import Image from "next/image";
import { useRouter } from "next/router";
export default function Questions() {
    const router = useRouter();
    const BannerImages = [
        { url: "https://www.vinaybajrangi.com/upload/manage-image-banner/259_Know What Your Future Life Partner Will Be Like.jpg", alt: "Vinay Bajrangi", link: "services/online-report/future-life-partner.php" },
        { url: "https://www.vinaybajrangi.com/upload/manage-image-banner/260_Know When You Will Get Married (2).jpg", alt: "Vinay Bajrangi", link: "services/online-report/know-your-marriage-timing.php" },
        { url: "https://www.vinaybajrangi.com/upload/manage-image-banner/261_Know If You Have The Yoga to Do Business.jpg", alt: "Vinay Bajrangi", link: "services/online-report/job-or-business.php" }
    ]
      
  return (
    <>
    <div class="max-w-7xl pb-10  mx-auto">
        <ul class="flex flex-row flex-wrap gap-4 py-4 justify-center">
            {BannerImages.map((item) => (
                <li key={item.name} className="rounded-md w-[32%] min-h-15">
                    <button onClick={()=> router.push(item.link)} className="text-xs text-white flex-col text-center flex justify-center items-center no-underline" >
                        <Image width={400} height={100} className="w-[100%] rounded-lg aspect-auto object-contain" src={item.url} alt={item.alt} />
                    </button>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}