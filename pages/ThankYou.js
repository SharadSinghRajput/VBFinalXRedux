"use client"

import { useRouter } from 'next/router';

export default function ThankYou({ data }) {
    const router = useRouter();

    return (
        <div className="flex h-screen items-center justify-center -mt-36 mb-0 pb-0">
            <div>
                <div className="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="text-4xl font-bold">Thank You!</h1>
                    <p>
                        If you have any queries regarding this, feel free to reach out to us at{" "}
                        <a href="mailto:mail@vinaybajrangi.com"><strong>mail@vinaybajrangi.com</strong></a>.
                    </p>
                    <button
                        className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                        onClick={() => router.push('/')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span className="text-sm font-medium">Home</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
