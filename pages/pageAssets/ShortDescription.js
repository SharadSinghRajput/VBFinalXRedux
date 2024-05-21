export default function Banner(props) { 
  if (!props.descData) {
    return null;
  }
  
  return (
    <><div className='text-sm text-gray-500 text-justify' dangerouslySetInnerHTML={{ __html:
        props.CharCount ? 
            props.descData.length > props.CharCount ?
                props.descData.slice(0, props.CharCount).replace(/\\r\\n/g, '<br/>') + "..."
                : props.descData.replace(/\\r\\n/g, '<br/>') + "..."
            : props.descData.replace(/\\r\\n/g, '<br/>') + "..."
    }} /></>
  );
}
