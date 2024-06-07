"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { MAIN_URL } from '../config/config';

export default function Banner() {
  const router = useRouter();

  const handleClick = (e, url) => {
    e.preventDefault(); // Prevent the default anchor behavior
    router.push(`${MAIN_URL}${url}`);
  };

  return (
    <a 
      href={`${MAIN_URL}services/consultation.php`} 
      onClick={(e) => handleClick(e, "services/consultation.php")}
    >
      <Image 
        width={1667} 
        height={335} 
        className="w-[100%] pt-0 mx-auto cursor-pointer" 
        src="https://www.vinaybajrangi.com/asset_frontend/img/bookan-app.png" 
        alt="Book an Appointment" 
      />
    </a>
  );
}
