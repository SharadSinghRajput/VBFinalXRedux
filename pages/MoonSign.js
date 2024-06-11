"use client"; 
import { useState } from 'react';
import { useRouter } from "next/router";
// import { EnvelopeIcon, UserIcon } from '@heroicons/react/20/solid'
// import Datepicker from "react-tailwindcss-datepicker";
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { Alert } from "flowbite-react";
import CalculatorForm from './pageAssets/CalculatorForm'

// import { MAIN_URL, MAIN_URL_HINDI } from '../config/config';

export default function Questions({language = "English"}) {  
    // const router = useRouter();
    // const [mainURL, setMainURL] = useState(MAIN_URL);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

  // const handleTimeChange = (time) => {
  //   setSelectedTime(time);
  // };
  // const handleChanges = date => {
  //   setSelectedDate(date);
  // };

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    city: ''
  });
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

    // const handleValueChange = newValue => {
    //     console.log("newValue:", newValue);
    //     setValue(newValue);
    // };


  return (
    
    <>
    <div className='drop-shadow-2xl bg-white p-5 rounded-xl'>
        <h3 className="text-xl font-bold">
        { language === "Hindi" ? ( <> अपनी <span className="text-orange-500">चंद्र राशि जानें</span> </> ) : ( <> Know your <span className="text-orange-500">Moon Sign</span> </> ) }
        
        </h3>
        <CalculatorForm routing={"/calculator/moon-sign-calculator-result.php"} />
    </div>
    </>
  )
}