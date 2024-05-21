"use client"; 
import { useState } from 'react';
import { EnvelopeIcon, UserIcon, } from '@heroicons/react/20/solid'
// import Datepicker from "react-tailwindcss-datepicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Alert } from "flowbite-react";
import { Male } from '../config/SvgConst';


const notificationMethods = [
    { id: 'HmMale', title: 'Male' },
    { id: 'HmFemale', title: 'Female' },
  ]


export default function Questions() {  
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleChanges = date => {
    setSelectedDate(date);
  };

    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        city: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

      const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };





  return (
    
    <>
    <div className='drop-shadow-2xl bg-white p-5 rounded-xl'>
        <form onSubmit={handleSubmit}>
            <h3 className='text-xl font-bold'>Free <span className='text-orange-500'>Kundli</span></h3>
            <div className="space-y-4 mt-5 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                {notificationMethods.map((notificationMethod) => (
                    <div key={notificationMethod.id} className="flex items-center">
                    <input
                        id={notificationMethod.id}
                        name="notification-method"
                        type="radio"
                        defaultChecked={notificationMethod.id === 'email'}
                        className="h-4 w-4 border-gray-300 text-orange-500 focus:ring-orange-500"
                    />
                    <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                        {notificationMethod.title}
                    </label>
                    </div>
                ))}
                </div>
            <div className="relative mt-7">
                <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Jane Smith"
                />
            </div>
            <div className="relative mt-7">
                <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                    Email
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Jane Smith"
                />
            </div>
            
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Date of Birth
                    </label>
                    <div className="mt-2">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleChanges}
                            dateFormat="dd/MM/yyyy" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Time of Birth
                    </label>
                    <div className="mt-2">
                        <DatePicker
                            selected={selectedTime}
                            onChange={handleTimeChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="h:mm aa"
                            timeCaption="Time"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <br />
            <button type="button" className="w-[100%] inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Submit</button>
        </form>
        <div>
    </div>
    </div>
    </>
  )
}