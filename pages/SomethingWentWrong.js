
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';



export default function SomethingWentWrong() {
  const router = useRouter();
  return (
    <>
    <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">        
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Something went wrong</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Server not responding. Please try again later.</p>
        <div className="mt-10">
          <button onClick={() => router.push("/")} className="text-xl font-semibold leading-7 text-indigo-600">
              <span aria-hidden="true">&larr;</span> Back to home
          </button>
        </div>
    </main>
    
    </>
  )
}