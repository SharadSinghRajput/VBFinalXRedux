export default function Tags(props) {
  
  return (
    <>
    <div className="relative isolate bg-white mt-10 hidden">
        <div className="md:grid-cols-2 gap-20">
        <div>
            <div className="border-b border-gray-200 bg-white px-0 py-5 ">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Leave a comment</h3>
            </div>
            <form action="#" method="POST" className="">
            <div className="mx-auto">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 pt-5">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                    </label>
                    <div className="mt-2.5">
                        
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Comment
                    </label>
                    <div className="mt-2.5">
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                    </div>
                </div>
                </div>
                <div className="mt-8 flex justify-end">
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Post Comment
                </button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </>
  );
}
