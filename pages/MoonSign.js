"use client"; 
import { useState } from 'react';
import { EnvelopeIcon, UserIcon } from '@heroicons/react/20/solid'
// import Datepicker from "react-tailwindcss-datepicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Alert } from "flowbite-react";
import CalculatorForm from './pageAssets/CalculatorForm'


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
        <CalculatorForm routing={"/calculator/moon-sign-calculator-result.php"} />
    </div>
    </>
  )
}