import { useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

import LoginForm from "./LoginForm"

export default function Login() {
  const router = useRouter();
  const [LogSucessFull, setLogSucessFull] = useState(false);
  const { slug }  = router.query;
  const [PageSlug, setPageSlug] = useState("")
  useEffect(()=>{
    if(slug){
      setPageSlug(slug[slug.length - 1])
    }
  },[])
  
      


    return (
      <>
        <div className="flex min-h-[70vh] flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              {LogSucessFull ? <>
              </>:<>
                <div>
                  <h2 className="mt-8 text-2xl text-center font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div className="relative mt-2">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">Or</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-center items-center">
                  <button
                    onClick={()=> router.push("signup")}
                    className="flex w-max items-center justify-center gap-3 rounded-md bg-white px-4 py-1 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                    <span className="text-sm font-normal leading-6">Create account</span>
                  </button>
                </div>
                <div className="mt-10">
                  <div>
                    <LoginForm pageslug={PageSlug} />
                  </div>
                </div>
              </>}
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <Image
              width={1200}
              height={500}
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
              alt="Login"
              fetchPriority
            />
          </div>
        </div>
      </>
    )
  }
  