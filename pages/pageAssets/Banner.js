import Image from "next/image";
import placeholderImage from "../assets/images/default-image.png";

export default function Banner(props) {
  const { BannerData, AltName } = props;



  return (
    <>
      {BannerData ? (
        <Image
          width={1200}
          height={300}
          src={BannerData}
          alt={AltName || "Banner Image"}
          className="w-full"
          priority
        />
      ) : (
        <Image
          src={placeholderImage}
          alt="Placeholder Image"
          width={1200}
          height={300}
          className="w-full"
          priority
        />
      )}
    </>
  );
}