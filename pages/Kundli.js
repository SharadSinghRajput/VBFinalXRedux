import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import { useRouter } from 'next/router';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Services from "./Services"
import { Combobox } from '@headlessui/react'
import { LocationData } from '../config/location'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {API_KEY, Domain_Secrete_Code} from '../config/config'
import {lifesProblems} from "../config/json/lifesProblems"

import Title from './pageAssets/Title';
import Banner from './pageAssets/Banner';
import Description from './pageAssets/Description';

import MetaData from './pageAssets/MetaData';



import moonsignm from "./assets/images/moonsign.png"
import questionimg from "./assets/images/question.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ServicesNew = [
  { name : "Consultation", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/consultation.png", Link: "https://www.vinaybajrangi.com/services/consultation.php" },
  { name : "Online Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/online-report.png", Link: "https://www.vinaybajrangi.com/services/consultation.php"},
  { name : "Voice Report", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/voice-report.png", Link: "https://www.vinaybajrangi.com/services/consultation.php"},
  { name : "Life Readings", ImgUrl: "https://www.vinaybajrangi.com/asset_frontend/img/life-readings.png", Link: "https://www.vinaybajrangi.com/services/consultation.php"}
]


export default function DailyHoroscope({data}) {
  const router = useRouter();
  const GenderType = [
    { id: 'RepMale', title: 'Male' },
    { id: 'RepFemale', title: 'Female' },
  ]

const [selectedDate, setSelectedDate] = useState(null);
const [selectedTime, setSelectedTime] = useState(null);
const [SearchLocation, setSearchLocation] = useState('')
const [selectedBirthLocation, setSelectedBirthLocation] = useState(null)
const [Gender, setGender] = useState("Male");
const [Name, setName] = useState("");
const [Email, setEmail] = useState("");
const [Mobile, setMobile] = useState("");



const GetUserData = async () => {
  const savedInputValue = getLocalStorageItem('UserInfoDataKey');
  if(savedInputValue !== null) {
    setName(savedInputValue.name);
    // setSelectedDate(savedInputValue.dob);
    // setSelectedTime(savedInputValue.dob);
     setSelectedBirthLocation({city_name: savedInputValue.birth_place, latitude: savedInputValue.birth_place_latitude, longitude: savedInputValue.birth_place_longitude})
     
  }
};

useEffect(()=>{
    GetUserData()
},[])


const handleTimeChange = (time) => {
  setSelectedTime(time);
};

const handleChanges = date => {
  setSelectedDate(date);
};

function filterPeople(LocationData, SearchLocation) {
  return LocationData.filter((person) => {
      if (SearchLocation.length > 3 && person.city_name.toLowerCase().includes(SearchLocation.toLowerCase())) {
          return person;
      } else {
          return false;
      }
  });
}
// Then use the filterPeople function to get the filtered array
const filteredPeople = filterPeople(LocationData, SearchLocation);
// const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();

        var formattedDateTime = ""
        if(selectedDate || selectedTime){
            if(!selectedDate) console.log("date not entered");
            if(!selectedTime) console.log("time not entered");
            const formattedDate = selectedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            const parts = formattedDate.split("/");
            const month = parts[0];
            const day = parts[1];
            const year = parts[2];
            const date = new Date(year, month - 1, day);
            const UpdatedDate = date.toISOString().slice(0,10);
            const formattedTime = selectedTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            formattedDateTime = `${UpdatedDate} ${formattedTime}`;
        }

        function formatDate(date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const hours = String(date.getHours()).padStart(2, '0');
          const minutes = String(date.getMinutes()).padStart(2, '0');
          return `${month}-${day}-${year} ${hours}:${minutes}`;
        }
        
      const CurrentDate = formatDate(new Date());
      const data = {
          "apiKey": API_KEY,
          "dob": formattedDateTime,
          "birth_place_longitude" : selectedBirthLocation.latitude,
          "birth_place_latitude" : selectedBirthLocation.longitude,
          "cdate": CurrentDate
      }
      const UserInfoData = {
          "name" : Name,
          "dob": formattedDateTime,
          "birth_place_longitude" : selectedBirthLocation.latitude,
          "birth_place_latitude" : selectedBirthLocation.longitude,
          "birth_place" : selectedBirthLocation.city_name,
      }
      const UserData = (JSON.stringify(data));
      try{
        setLocalStorageItem('KundliFromDataKey', UserData)
        setLocalStorageItem('UserInfoDataKey', UserInfoData)
        router.push('/kundli-report.php');
      }catch (error) {
        console.log("Not set")
      }
    };

  const src = "https://www.youtube.com/watch?v=GDjFJZ7-k8M";
  const videoId = src.split('v=')[1];
  

  return (
      <div className="">
        <div className={`bg-[#091d5a]`}>          
          <div className="container py-4 mx-auto">
              <div className='my-5 mb-14 pb-5 border-b-white/50 border-b-[0.5px]'>
                <p className='text-lg font-light text-white'>To read your fate I need your Kundli or astrology birth chart. Kundali can be made through Kundli software. I am providing you here on this page a free Janam kundali calculator. Before presenting your Janam Kundli to any astrologer kindly create your kundli as per date of birth through the Kundli calculator.</p>
              </div>
              
              <div className='mb-5 flex flex-col xl:flex-row  gap-8'>
                <div className='flex flex-col md:flex-row max-w-5xl w-full gap-8'>
                  <div className='w-full md:max-w-[400px] rounded-lg bg-white p-5'>
                    <form className='z-50 relative'>
                      <h3 className='text-xl font-bold'>Free <span className='text-orange-500'>Kundli</span></h3>
                      <div className="space-y-4 mt-5 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                        {GenderType.map((item) => (
                          <div key={item?.id} className="flex items-center">
                              <input
                                  id={item?.id}
                                  name="gender"
                                  type="radio"
                                  onChange={() => setGender(item?.title)}
                                  className="h-4 w-4 border-gray-300 text-orange-500 focus:ring-orange-500"
                              />
                              <label htmlFor={item?.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                  {item?.title}
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
                            value={Name}
                            onChange={(value)=>setName(value.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Vinay Bajrangi"
                        />
                      </div>
                      <Combobox as="div" value={selectedBirthLocation} onChange={setSelectedBirthLocation}>
                        <Combobox.Label className="block text-sm font-medium leading-6 mt-5 text-gray-900">Birth location</Combobox.Label>
                        <div className="relative mt-2">
                            <Combobox.Input
                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(event) => setSearchLocation(event.target.value)}
                            displayValue={(person) => person?.city_name}
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </Combobox.Button>

                            {filteredPeople.length > 3 ? (
                                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredPeople.map((person, index) => (
                                      <Combobox.Option
                                          key={index}
                                          value={person}
                                          className={({ active }) =>
                                              classNames(
                                                  'relative cursor-default select-none py-2 px-4 pl-10',
                                                  active ? 'bg-orange-500 text-white' : 'text-gray-900'
                                              )
                                          }
                                      >
                                          {({ active, selected }) => (
                                              <>
                                                  <span className={classNames('block truncate', selected && 'font-semibold')}>
                                                      {person?.city_name}
                                                  </span>

                                                  {selected && (
                                                      <span
                                                          className={classNames(
                                                              'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                              active ? 'text-white' : 'text-indigo-600'
                                                          )}
                                                      >
                                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                      </span>
                                                  )}
                                              </>
                                          )}
                                      </Combobox.Option>
                                  ))}

                                </Combobox.Options>
                            ): (
                                <>
                                {filteredPeople[0] ? <>
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <Combobox.Option                                    
                                            value={filteredPeople[0]}
                                            className={({ active }) =>
                                            classNames(
                                                'relative cursor-default select-none py-2 px-4 pl-10',
                                                active ? 'bg-orange-500 text-white' : 'text-gray-900'
                                            )
                                            }
                                        >
                                            {({ active, selected }) => (
                                            <>
                                                <span className={classNames('block truncate', selected && 'font-semibold')}>{filteredPeople[0].city_name}</span>

                                                {selected && (
                                                <span
                                                    className={classNames(
                                                    'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                    active ? 'text-white' : 'text-indigo-600'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                                )}
                                            </>
                                            )}
                                        </Combobox.Option>
                                    </Combobox.Options>
                                    </>:<>
                                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        <Combobox.Option
                                            value={filteredPeople}
                                            className={({ active }) =>
                                            classNames(
                                                'relative cursor-default select-none py-2 px-4 pl-10',
                                                active ? 'bg-orange-500 text-white' : 'text-gray-900'
                                            )
                                            }
                                        >
                                            {({ active, selected }) => (
                                                <>
                                                    <span className={classNames('block truncate', selected && 'font-semibold')}>{filteredPeople}</span>
                                                    {selected && (
                                                    <span
                                                        className={classNames(
                                                        'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                                        active ? 'text-white' : 'text-indigo-600'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                    )}
                                                </>
                                            )}
                                            <span className={classNames('block truncate font-semibold')}>{filteredPeople}</span>
                                        </Combobox.Option>
                                    </Combobox.Options>
                                    </>}
                                </>
                            )}
                        </div>
                      </Combobox>
                      
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
                      <button type="button" onClick={handleSubmit} className="w-[100%] inline-flex items-center justify-center gap-x-1.5 rounded-md bg-[#091d5a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Submit</button>
                    </form>
                  </div>
                  <div className='flex-1'>
                    <h4 className="text-center text-white text-xl font-bold mb-2"> Free Online Kundli/ Janam Kundli/ Kundli Software </h4>
                    <div className='rounded-lg overflow-hidden'>
                      <iframe                        
                        className='w-full aspect-video'                        
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube Video Player"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                <div className='flex-1 gap-3'>
                  <div className='grid gap-3 grid-cols-2'>
                  {ServicesNew.map((item) => (
                      <div key={item.name} className="bg-orange-500 rounded-md py-3 min-h-15">
                          <a className="text-xs text-white flex-col text-center flex justify-center items-center no-underline" href={item?.Link}>
                              <Image width={40} height={40} className="w-[40px] md:w-[50px] lg:w-[75px] aspect-square object-contain" src={item?.ImgUrl} alt={item?.name} />
                              <span className="text-xs text-white">{item?.name}</span>
                          </a>
                      </div>
                  ))}
                  </div>
                  <div className='bg-white mt-3 flex items-center justify-evenly rounded-lg p-2'>
                    <Image width={40} height={40} className='w-10' src="https://www.vinaybajrangi.com/asset_frontend/img/newsicon.png" alt="newsicon.png" />
                    <h3 className='text-lg font-bold'>Astrology News and Articles</h3>
                  </div>
                  <div>
                    <div>
                      {/* <Image src={questionimg} width={80} className='w-[80px] p-3 aspect-square rounded-lg' /> */}
                      <Image src={questionimg} width={80} className='' alt={questionimg} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='border-t-white/50 pt-5 border-t-[0.5px]'>
                <p className="text-lg text-center mb-5 text-white font-bold">Astrological Solutions for all life’s problems</p>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    breakpoints={{
                      400: {
                        slidesPerView: 3,
                      },
                      500: {
                        slidesPerView: 4,
                      },
                      768: {
                        slidesPerView: 5,
                      },
                      1024: {
                        slidesPerView: 7,
                      },
                      1280: {
                        slidesPerView: 8,
                      },
                      1530: {
                        slidesPerView: 10,
                      },
                    }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                    {lifesProblems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <a className="text-xs text-white gap-2 text-center no-underline flex flex-col justify-center items-center" href={item?.url}>
                                <Image src={item?.img} width={80} alt={item?.name} className='w-[80px] p-3 bg-orange-500 aspect-square rounded-lg' />
                                <span>{item?.name}</span>
                            </a>    
                        </SwiperSlide>                    
                    ))}
                </Swiper>
              </div>
              
          </div>
      </div>
      <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mb-5 rounded-lg">
          <div className="p-2 pt-2">
          {data ? (
              <>
              {data.title ? <>
                  <Title titleData={data.title} />
              </>:<></>}

              {data.blogBannerImage && (
                <div className="w-[100%] md:w-[100%] mb-5 mt-5">
                  <Banner BannerData={data.blogBannerImage} AltName={data.title} />
                </div>
              )}

              {data.description ?
                  <Description descData={data.description} />
              :<></>}
              </>
          ) : (
              <>
                  <div className="text-center">
                      <div role="status">
                          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span className="sr-only">Loading...</span>
                      </div>
                  </div>
              </> 
          )}
          </div>
      </div>
      {/* <div className="max-w-6xl mx-auto shadow-2xl bg-white p-5 mt-5 mb-5 rounded-lg">
          <div className="container py-4 mx-auto">
            <p className='text-sm font-normal'>To read your fate I need your Kundli or astrology birth chart. Kundali can be made through Kundli software. I am providing you here on this page a free Janam kundali calculator. Before presenting your Janam Kundli to any astrologer kindly create your kundli as per date of birth through the Kundli calculator.</p>
            <p className='text-lg font-bold '>What is a Birth Chart / Kundli?</p>
            <p className='text-sm font-normal'>The Kundli created here through the kundli calculator presented on this page is the exact representation of the positions of the planets in the sky at the time of your birth. This Vedic horoscope is the tool provided by Lord Bharma through which your complete life can be read and corrected.</p>
            <p className='text-sm font-normal'>These planets because of their specific positioning in a sign and constellation impart peculiar characteristics to you. The positioning of the planets forms the basis of the Vedic Kundali in which the various Yogas in natal chart, Maha Yogas and periods find their place. This positioning is a matter of Kundli analysis or analysis of the astrology birth chart as it dictates you to lead the life in a specific way.</p>
            <p className='text-lg font-bold'>The Best Online Kundli / Kundli Software?</p>
            <p className='text-sm font-normal'>You can create your Kundli through many Kundli making software available on the internet but since a perfect natal chart leads to perfect kundli predictions, it is important to know which Kundli calculator gives the Vedic kundali without flaws. Through my website you can create a free kundli online. This online Kundli is by far the most accurate Vedic horoscope. If you get a reading done by an expert astrologer though this Vedic Kundali then the Kundli predictions are bound to be accurate. This kundali making software is an outcome of my collective efforts with top programmers of the country.</p>
            <p className='text-lg font-bold'>What does my Kundli tell me?</p>
            <p className='text-sm font-normal'>Your kundali tells you what you did in your previous life(s). This online Kundli can further tell the effect of the karmas of the previous birth on the present birth. If Kundli analysis is done by an expert he/she can reveal the quality of the present life, the modes through which it can be made better, finish the karmic loads of the previous births and to predict Life Reading by Astrology. You, therefore, create your kundli as per date of birth, and leave the rest on to an expert astrologer who could lessen your karmic loads and freshen up your present life.</p>
            <p className='text-lg font-bold'>How does Horoscope reading help me?</p>
            <p className='text-sm font-normal'>A Janam Kundli is your stored karmas' of the previous birth(s) that will pave the way, good or bad, of this birth. The Free janam Kundli that you have created is the essential document for making predictions about your studies, career, business, marriage, married life, children, property, health, and wealth. With the help of this free Kundli and the advice of an able Astrologer, you can know all important information related to your future and strive to make it better and effective. Referring to my kundli that you had from the natal chart maker, your Astrologer could suggest significant ways to overcome many upcoming troubles. Your online-Kundali can give an insight into your personality and other aspects such as nature, behavior, character, business astrology, career, traits, relationships, IQ, EQ, and health.</p>
          </div>
        </div> */}
      </div>
  )
}
