import Image from 'next/image'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { Faqs } from '../config/Faqs'

export default function FaqSection() {
    return (
        <div className='mx-auto max-w-6xl mx-auto shadow-2xl p-5 mt-5 mb-5 rounded-lg'>
            <div className="relative isolate bg-white container">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-50 w-full overflow-hidden ring-1 ring-white/5">
                                <div
                                    className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                                        style={{
                                            clipPath:
                                                'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                                        }}
                                    />
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight text-black">Contact Us</h2>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <BuildingOffice2Icon className="h-7 w-6 text-black" aria-hidden="true" />
                                    </dt>
                                    <dd className='text-gray-950'>
                                        M-22, Sector-66, Noida, Uttar Pradesh-201301
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <PhoneIcon className="h-7 w-6 text-black" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-orange-500 text-gray-950" href="tel:+91 9278555588">
                                            +91 9278555588
                                        </a>
                                        <a className="hover:text-orange-500 text-gray-950" href="tel:+91 9278665588">
                                            ,+91 9278665588
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon className="h-7 w-6 text-black" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-orange-500 text-gray-950" href="mailto:mail@vinaybajrangi.com">
                                            mail@vinaybajrangi.com
                                        </a>
                                    </dd>
                                </div>

                            </dl>
                        </div>
                        <div className='px-20 py-20'>
                            <Image width={150} height={150} src="https://www.vinaybajrangi.com/asset_frontend/img/logo.png" alt="Logo" className="w-auto bg-cover" />
                        </div>
                    </div>
                    <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-black">
                                        Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            placeholder='Enter Name'
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder='Enter Email'
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-black">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            placeholder='Enter Number'
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-black">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            placeholder='Type Message...'
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='px-40 -mt-48'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9374681264085!2d77.37607101505012!3d28.601652692228765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57d79904367%3A0x2f94ff1146a7b30e!2sDr.%20Vinay%20Bajrangi!5e0!3m2!1sen!2sin!4v1657187354638!5m2!1sen!2sin" width="100%" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="bg-white py-8 container">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                    <div className="mx-auto max-w-4xl  divide-y divide-gray-900/10">
                        <h2 className="text-2xl font-bold  leading-10 tracking-tight text-gray-900 w-2/4">Frequently asked questions</h2>
                        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                            {Faqs.map((faq, index) => (
                                <Disclosure as="div" key={index} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt >
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                    <span className="text-base font-semibold leading-7 ">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center ">
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}