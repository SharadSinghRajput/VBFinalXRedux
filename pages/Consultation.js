import Consultation from '../config/ConsultationData';
import Image from 'next/image';

export default function Example() {
    return (<>
    <div className='mx-auto max-w-6xl mx-auto shadow-2xl p-5 mt-5 mb-5 rounded-lg'>

            <div className="border-b border-gray-200  bg-orange-600 p-3 sm:px-6">
                <h3 className="text-2xl font-semibold leading-6 text-center text-white">Consultation</h3>
            </div>
            <div className="border-b border-gray-200  bg-white p-3 sm:px-6">
                <h3 className="text-base font-semibold leading-6  text-gray-700">Total 48 Products.</h3>
            </div>
            <div className="bg-white py-10 sm:py-10 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0 border-2">
                        <h2 className="text-lg font-bold p-3 bg-gray-200 text-gray-900 sm:text-lg">Marriage Astrology</h2>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-10 grid max-w-2xl grid-cols-2 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                    >
                        {Consultation[0].links.map((item) => (
                            <li key={item.text}>
                                <a href={item.url}>
                                    <Image width={40} height={40} className="p-3 bject-cover" src={item.imgsrc} alt="" />
                                    <h3 className="px-3 text-sm font-semibold leading-6 capitalize tracking-tight text-orange-600">{item.text}</h3>
                                    <ul role="list" className="mb-2 ">
                                        <li>
                                            <p className="text-gray-9 px-3 ">{item.price}</p>
                                        </li>
                                    </ul>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    </div>
            </>
    );
}
