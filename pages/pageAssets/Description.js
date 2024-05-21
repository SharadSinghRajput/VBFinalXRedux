export default function Banner(props) {
  // Check if props.descData is defined before accessing its properties
  const descHTML = props.descDatab ? props.descData.replace(/\\r\\n/g, '<br/>') : '';

  return (
    <div className='mb-2 ml-2 mr-2 text-sm text-black text-justify' dangerouslySetInnerHTML={{ __html: descHTML }} />
  );
}