export default function Title(props) {
  if (!props.titleData) {
    return null;
  }
  
  return (
      <div className="border-b border-gray-200 px-0 py-5 bg">
        <h3 className="text-xl font-semibold leading-6 text-gray-900">{props.titleData.replace(/\\r\\n/g, '')}</h3>
      </div>
  );
}
