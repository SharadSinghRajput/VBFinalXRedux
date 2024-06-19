import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { Close } from "../config/SvgConst";
import { API_KEY, Domain_Secrete_Code, MAIN_URL } from "../config/config";

export default function SearchComp({lang}) {
  const router = useRouter();
  const [OpenFullSearch, setOpenFullSearch] = useState(false);
  const [SearchedData, setSearchedData] = useState("");
  const [SearchLoding, setSearchLoding] = useState(false);
  const Search = async (SerchText) => {
    setSearchLoding("searching")
    const dataHit = {
      domainSecreteCode: Domain_Secrete_Code,
      apiKey: API_KEY,
      getTotal: 10,
      dataFrom: 0,
      searchData: SerchText,
      language: "English",
    };
    const apiUrl = `https://www.aapkikismat.com/search-data-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataHit),
      });
      const data = await response.json();
      console.log(data);
      if (data.success === true) {
        setSearchLoding("found")
        setSearchedData(data.data);
      }else{
        setSearchLoding("notfound")
      }
    } catch (error) {
      console.log(error);
      setSearchLoding(false)
    }
  };

  function sanitizeDescription(html, charLimit) {
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    var textContent = tempDiv.textContent || tempDiv.innerText || "";
    textContent = textContent.replace(/\\r\\n/g, "\n");

    if (charLimit && textContent.length > charLimit) {
      textContent = textContent.slice(0, charLimit) + "...";
    }
    return textContent;
  }


  const handleClickRouter = (e, url) => {
    e.preventDefault();
    router.push(`${MAIN_URL}${url}`);
  };



  return (
    <>
      <div
        className={`transition-all duration-500 ${
          OpenFullSearch ? "fixed w-full h-full left-0 top-0 pt-20 bg-white z-[51] p-5" : ""
        }`}>
        <div className={`${OpenFullSearch ? "bg-white max-w-6xl mx-auto mt-5" : ""}`}>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="flex gap-5">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                onFocus={() => setOpenFullSearch(true)}
                onChange={(e) => Search(e.target.value)}
                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
              />
            </div>
            {OpenFullSearch ? (
              <button
                onClick={() => setOpenFullSearch(false)}
                className="flex w-9 h-9 justify-center items-center bg-red-600 rounded-sm text-white">
                <Close width={25} height={25} />
              </button>
            ) : (
              <></>
            )}
          </div>
          {OpenFullSearch ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
                {SearchLoding === "searching" ?
                <>
                    <div role="status" className='flex justify-center items-center' >
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </>
                : SearchLoding === "found"? <>
                    {SearchedData ? (
                        SearchedData.map((item, index) => (
                        <a
                            key={index}
                            href={`${MAIN_URL}${item.path}`}
                            onClick={(e) => handleClickRouter(e, item.path)}
                            className="flex gap-2 shadow-lg p-2 rounded-lg">
                            <div
                            className={`flex h-full w-10 flex-none items-center justify-center rounded-lg`}>
                            <Image
                                src={item.bannerImage}
                                width={40}
                                height={40}
                                className="aspect-square object-cover h-10 w-10 rounded-lg"
                            />
                            </div>
                            <div className="ml-4 flex-auto gap-2 flex flex-col">
                            <p className={`text-sm font-bold text-left text-gray-900`}>
                                {" "}
                                {item.category}{" "}
                            </p>
                            <p className={`text-sm font-normal text-left text-gray-900`}> {item.name} </p>
                            {/* <p className={`text-sm font-normal text-left text-gray-900`} > {sanitizeDescription(item.shortDesc, 80)} </p> */}
                            </div>
                        </a>
                        ))
                    ) : (
                        <></>
                    )}
                    
                </> :SearchLoding === "notfound" ?<>
                   <div className="px-6 py-14 text-center text-sm sm:px-14">
                     <ExclamationCircleIcon
                     type="outline"
                     name="exclamation-circle"
                     className="mx-auto h-6 w-6 text-gray-400"
                     />
                     <p className="mt-4 font-semibold text-gray-900">No results found</p>
                     <p className="mt-2 text-gray-500">No components found for this search term. Please try again.</p>
                 </div>
                </>: null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}


