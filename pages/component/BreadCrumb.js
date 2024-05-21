"use client"; 
import { HomeIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const pages = [
    { name: 'About', href: '#', current: false },
    { name: 'About us', href: '#', current: true },
]

export default function BlogList({data}) {
    const router = useRouter();
    
    useEffect(() => {
        if (!data) return;
      }, [data]);

      if (!data || !Array.isArray(data)) {
        return;
    }
  return (
    <>
      <div className='bg-white max-w-6xl mx-auto mt-5 mb-5 '>
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex space-x-4 rounded-md bg-white px-6 shadow">
            <li className="flex">
                <div className="flex items-center">
                <a href="#" className="text-orange-500 hover:text-orange-800">
                    <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Home</span>
                </a>
                </div>
            </li>
            {data.map((page, index) => (
                <li key={index} className="flex">
                <div className="flex items-center">
                    <svg
                    className="h-full w-6 flex-shrink-0 text-gray-200"
                    viewBox="0 0 24 44"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    aria-hidden="true"
                    >
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                    </svg>
                    <button
                    onClick={()=> router.push(page.path)}
                    className="ml-4 text-sm font-medium text-orange-500 hover:text-orange-800"
                    // aria-current={page.current ? 'page' : undefined}
                    >
                    {page.name}
                    </button>
                </div>
                </li>
            ))}
            </ol>
        </nav>
        </div>
    </>
  )
}