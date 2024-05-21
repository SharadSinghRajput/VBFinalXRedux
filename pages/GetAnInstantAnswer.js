import { useState } from 'react';

export default function GetAnInstantAnswerForm() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        date: '',
        time: '',
        question: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData) {
            if (formData[key] === '') {
                const errorMessage = 'Please fill in all fields.';
                setError(errorMessage);
                alert(errorMessage);
                return;
            }
        }

        setLoading(true);
        setTimeout(() => {
            console.log(formData);
            setLoading(false);
            setSubmitted(true);
            setFormData({
                name: '',
                mobile: '',
                email: '',
                city: '',
                date: '',
                time: '',
                question: ''
            });

            setTimeout(() => {
                setSubmitted(false);
            }, 4000);
        }, 5000);
    };

    return (
        <form onSubmit={handleSubmit} className='border p-4'>
            <div className="space-y-12 ">
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-base font-semibold leading-7 p-6 text-center border uppercase bg-orange-700 text-white">Unlock the secrets of tomorrow and get your instant answer in Yes or No.</h1>
                    <div className='border mt-4 rounded-t-lg'>
                    <h2 className="text-base font-semibold leading-7 p-4 text-center border uppercase bg-orange-600 rounded-t-lg text-white">Let me answer your Question</h2>
                    <p className='px-4 mt-4 font-semibold'>PUT IN YOUR DATE TIME AND PLACE OF BIRTH.</p>
                    <div className="mt-10 mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder='Enter Name'
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                                Mobile No.
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder='Enter Mobile No.'
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    autoComplete="tel"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder='Enter Email Address'
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder='Enter City Name'
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
                                Time
                            </label>
                            <div className="mt-2">
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="question" className="block text-sm font-medium leading-6 text-gray-900">
                                Question
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="question"
                                    id="question"
                                    autoComplete="question"
                                    value={formData.question}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
            <p className='px-4 mt-6 border bg-red-200'><b>Note:</b> Mind you that the answer will only be in <b>'Yes'</b>, <b>'No'</b> or May be. "Put in your question considering this."</p>
                </div>
            </div>


            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </div>
            {submitted && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow">
                        <p className="text-lg font-semibold text-gray-900">Question Submitted Successfully! We will reply to you as soon as possible. <br /> -Team Vinay Bajrangi </p>
                    </div>
                </div>
            )}
        </form>
    );
}
