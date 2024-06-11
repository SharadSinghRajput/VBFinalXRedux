export default function Banner(props) {
  // Check if props.descData is defined before accessing its properties
  const descHTML = props.descData ? props.descData.replace(/\\r\\n/g, '<br/>') : '';

  return (
    <div className={`mb-2 ml-2 mr-2 text-black inner-data-mb-5 text-justify ${props.extra ? props.extra : "text-sm "} has-[ol]:!list-decimal has-[ul]:!list-disc has-[li]:!ml-2`} dangerouslySetInnerHTML={{ __html: descHTML }} />

  );
}