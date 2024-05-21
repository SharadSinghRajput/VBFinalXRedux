export default function Title(props) {
  if (!props.titleData) {
    return null;
  }
  
  return (
      <div className="border-b border-gray-200 bg-white px-0 py-5 ">
        <h3 className="text-xl font-semibold leading-6 text-gray-900">{props.titleData}</h3>
      </div>
  );
}
