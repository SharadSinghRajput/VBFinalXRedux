export default function Title(props) {
  if (!props.titleData) {
    return null;
  }
  
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-8 py-8 sm:py-8 rounded-lg ">
        {props.titleData ?
        <div
            className={`?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=824838&sat=-100&exp=15&blend-mode=multiply, absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center`}
        />
        : null}
        <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
        >
            <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
                clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            />
        </div>
        <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
        >
            <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
                clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            />
        </div>
        <div className="flex gap-4">
          
            <div className="">
                {props.titleData ?
                <h2 className="text-2xl font-bold text-center tracking-tight text-white">{props.titleData}</h2>
                : null}
            </div>
        </div>
        </div>
    //   <div className="border-b border-gray-200 px-0 py-5 bg">
    //     <h3 className="text-xl font-semibold leading-6 text-gray-900">{props.titleData.replace(/\\r\\n/g, '')}</h3>
    //   </div>
  );
}
