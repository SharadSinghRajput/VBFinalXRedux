"use client"; 
import Image from 'next/image';
import {API_KEY, API_NEW_URL, Domain_Secrete_Code} from '../config/config'
import { useEffect, useState, Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/20/solid'
import ReportForm from './component/ReportForm'
import LoginForm from "./LoginForm"
import placeholderImage from "./assets/images/default-image.png";

import { setLocalStorageItem, getLocalStorageItem } from '../config/localStorage';
import { Button, Modal } from "flowbite-react";

import { useDispatch, useSelector } from 'react-redux';
// import { AddProduct } from '@/redux/actions';
import { addProduct, removeProduct } from '../redux/ProductReducer';
import { toggleGetProduct } from '../redux/triggerSlice';
import { toggleStartSession } from '../redux/sessionSlice';
import MetaData from './pageAssets/MetaData';
import Title from './pageAssets/Title';
import Banner from './pageAssets/Banner';
import TopRowonReport from './pageAssets/TopRowonReport';
import Description from './pageAssets/Description';
import MiniCart from './pageAssets/MiniCart'
// import MetaData from './pageAssets/MetaData';
import Holder from './pageAssets/Holder'
import BreadCrumb from "./component/BreadCrumb"
import PriceInfo from "./component/PriceInfo"
import PriceInfoforBundle from "./component/PriceInfoforBundle"
import RelatedProduct from "./pageAssets/RelatedProduct"
import PageRelatedBlog from "./PageRelatedBlog"
import Services from "./Services"





export default function Report({data, FirstData}) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  
  const [productName, setProductName] = useState('');
  const { slug }  = router.query;
  const products = useSelector(state => state.adProduct.products);
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [whichButton, setWhichButton] = useState(false)
  


  const [UnderId, setUnderId] = useState(false)
  const [ProductId, setProductId] = useState(false)
  const [ProductAdding, setProductAdding] = useState(false)

  const [SessionAction, setSessionAction] = useState(false)
  const [questionModal, setQuestionModal] = useState(false)
  const [WhichModal, setWhichModal] = useState("")
  const [CustomQuestion, setCustomQuestion] = useState([])
  const [CustomQuestionAdded, setCustomQuestionAdded] = useState([])
  const [typedQuestion, setTypedQuestion] = useState("")


  const [AddedProduct, setAddedProduct] = useState("")
  useEffect(() => {
    const updatedProductIds = products.map(item=> item.productId)
    setAddedProduct(updatedProductIds)
}, [products]);

const DataExistMailList = (DataExistItem) => {
  if (Array.isArray(AddedProduct)) {
      return AddedProduct.some(item => item === DataExistItem);
  } else {
      return false;
  }
};
  

  useEffect(()=>{
    const GetUserDetails = async () => {
      const UserDetails = getLocalStorageItem('UserDataKey');
      if(UserDetails !== null) {
        setUnderId(UserDetails.id)
      }
    };
    GetUserDetails();
  },[])


  
  const GetSession = async () => {
    const SessionToken = getLocalStorageItem('tokenKey');
    if(SessionToken !== null) {
      setSessionAction(true)
    }else{
      setSessionAction(false)
    }
  };

  useEffect(()=>{
    GetSession()
  },[])


  useEffect(() => {
    if(data){
      products.map((item)=>{
        if(item.productId === data.reportID){
          setWhichButton(true)
        }
      })
    }
  }, [products]);


  
  
  // const [data, setdata] = useState("")
  // useEffect(() => {
  //   if(slug){
  //     const FetchReport = async () =>{
  //       const lastValOfURL = slug[slug.length - 1];
  //       const lastValOfURLWithoutExtension = lastValOfURL.replace('.php', '');
  //       const DataToFetch = {
  //         "apiKey": API_KEY,
  //         "slug": lastValOfURLWithoutExtension,
  //         "domainSecreteCode": Domain_Secrete_Code,
  //         "currency": "INR",
  //         "language": "English"
  //       }
  //       const apiUrl = "https://www.aapkikismat.com/report-detail-tppm-api-test.php"
  //       try { 
  //         const response = await fetch(apiUrl, {
  //           method: "POST",
  //           headers:{
  //             'Content-Type' : 'application/json'
  //           },
  //           body: JSON.stringify(DataToFetch)
  //         });
  //         const data = await response.json();
  //         if(data.success === true){
  //           setdata(data.data[0]);
  //         }
  //       }catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   FetchReport();
  //   }
  // }, [slug])




  const handleAddProduct = async (itemID, ItemPrice, bundleType) => {
    setProductAdding(itemID)
    const dataToAdd = {
      apiKey: API_KEY, 
      domainSecreteCode: Domain_Secrete_Code,
      user_id: UnderId,
      page_id: itemID,
      quantity: 1,
      price: ItemPrice,
      bundleType: bundleType,
    }
    console.log(dataToAdd);
    const apiUrl = `${API_NEW_URL}cart-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToAdd),
      });

      const data = await response.json();
      console.log(data);
      if(data.success === true){
        setProductId(true)
        setProductAdding(false)
        setAddedProduct(prevProducts => [...prevProducts, dataToAdd.page_id]);
      }
      if(data.data === true){
        if(data.data && Array.isArray(data.data)){
          data.data.map((item)=>{
            dispatch(addProduct(item));
          })
        }else{
          dispatch(addProduct(data.data));
        }
        setProductAdding(false)
      }
      dispatch(toggleGetProduct());
    } catch (error) {
      setProductAdding(false)
    }    
  };

  const handleAddProductInConsultation = async (type) => {
    console.log(type);
    const itemID = type === "consultancy" ? 5916710 : 5243310;
    const Price = type === "consultancy" ? 11000 : 4500;
    const RemarkCont = `title: ${data?.title} questions: ${CustomQuestion}`;
    console.log(RemarkCont);

    setProductAdding(itemID)
    const dataToAdd = {
      apiKey: API_KEY, 
      domainSecreteCode: Domain_Secrete_Code,
      user_id: UnderId,
      page_id: itemID,
      quantity: 1,
      price: Price,
      bundleType: "Single Product",
      remark: "dfbddfklmx",
    }
    console.log("dfdx", dataToAdd);
    return
    const apiUrl = `${API_NEW_URL}cart-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToAdd),
      });

      const data = await response.json();
      console.log(data);
      // if(data.success === true){
      //   setProductId(true)
      //   setProductAdding(false)
      //   setAddedProduct(prevProducts => [...prevProducts, dataToAdd.page_id]);
      // }
      // if(data.data === true){
      //   if(data.data && Array.isArray(data.data)){
      //     data.data.map((item)=>{
      //       dispatch(addProduct(item));
      //     })
      //   }else{
      //     dispatch(addProduct(data.data));
      //   }
      //   setProductAdding(false)
      // }
      // dispatch(toggleGetProduct());
    } catch (error) {
      console.log(error);
      setProductAdding(false)
    }    
  };

  const [firstHalfData, setfirstHalfData] = useState("");
  const [secondHalfData, setsecondHalfData] = useState("");

  useEffect(()=>{
    if(data){
      if(data.questionAnswerData.length > 4 ){
        const midpoint = Math.ceil(data.questionAnswerData.length / 2);
        setfirstHalfData(data.questionAnswerData.slice(0, midpoint))
        setsecondHalfData(data.questionAnswerData.slice(midpoint, data.questionAnswerData.length -1))
      } else{
        setfirstHalfData(data.questionAnswerData)
      }
    }
  },[])


  const AddQuestion = () => {
    if(!typedQuestion){
      alert("Please write question first")
      return
    }

    const questionExists = CustomQuestionAdded.some(item => item.question === typedQuestion);

    if (questionExists) {
      alert("This question already exists");
      return;
    }

    let idCounter = 0;
    const generateUniqueId = () => {
      idCounter++;
      return idCounter;
    };

    const newObj = { id: generateUniqueId(), question: typedQuestion, stats: true };
    setCustomQuestionAdded(prevState => [...prevState, newObj]);
  };
    
  const Add = (item) => {
    if(WhichModal === "consultancy"){
      if(CustomQuestion.length > 7){
        alert("you can choose only 8 question")
        return
      }
    }else{
      if(CustomQuestion.length > 3){
        alert("you can choose only 4 question")
        return
      }
    }
      
    setCustomQuestion(prevState => [...prevState, item]);
  };
  const Remove = (item) => {
    setCustomQuestion(prevState => prevState.filter(q => q !== item));
  };
  const FindAdded = (item) => {
    return CustomQuestion.includes(item);
  };

  const QuestionModalSet = (which) => {
    setQuestionModal(!questionModal);
    setWhichModal(which);
  };


  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]

  return (
    <>
      <MetaData data={data} />
      {!data ?
        FirstData?.title ?
            <div className="max-w-6xl mx-auto rounded-lg">
              <div className="p-5 pt-0">
                  <div className='bg-orange-500 p-2 mt-5 rounded-lg'>
                    <h1 className="text-2xl font-bold text-center tracking-tight text-white">{FirstData.title}</h1>
                </div>
              </div>
            </div>
        : null
      : null}
      {data?.breadcrumb && <BreadCrumb data={data.breadcrumb} />}
      {/* <div className='sticky top-0 z-50 bg-white'>
        <Services location={"report"} />
      </div> */}
      <div className="max-w-6xl mx-auto rounded-lg">
      {ProductId}
        {data ?
        <div className="p-5 pt-0">
          {data.topRowData ? <>
            <TopRowonReport data={data.topRowData} />
          </>:<></>}

          {data.extraComponentData ? data.extraComponentData.Holder1 ? <Holder data={data.extraComponentData.Holder1} /> : <></> :<></>}
          {data.extraComponentData ? data.extraComponentData.Holder2 ? <Holder data={data.extraComponentData.Holder2} /> : <></> :<></>}
          {data.extraComponentData ? data.extraComponentData.Holder3 ? <Holder data={data.extraComponentData.Holder3} /> : <></> :<></>}

          <div className=''>
            {/* {data ?
              data.title ? <>
                <div className='pb-5'>
                  <Title titleData={data.title}/>
                </div>
              </>:<></>
            : null} */}
            {data.title ?
            <div className='bg-orange-500 p-2 mt-5 rounded-lg'>
              <h1 className="text-2xl font-bold text-center tracking-tight text-white">{data.title}</h1>
            </div>
            : 
            <div className='bg-orange-500 p-2 mt-5 rounded-lg'>
              <h1 className="text-2xl font-bold text-center tracking-tight text-white">{FirstData.title}</h1>
            </div>
            }
            {/* <div className="flex gap-4">
                <div>
                {data.titleLogo2 ? (
                  <Image
                    width={100}
                    height={100}
                    src={data.titleLogo2}
                    alt={data.title || "Banner Image"}
                    className="w-full rounded-lg "
                    priority
                  />
                ) : (null)}
                </div>
                <div className="">
                  {data.title ?
                    <h1 className="text-4xl font-bold text-center tracking-tight text-white">{data.title}</h1>
                  : null}
                </div>
                <div>
                  {data.titleLogo1 ? (
                    <Image
                      width={100}
                      height={100}
                      src={data.titleLogo1}
                      alt={data.title || "Banner Image"}
                      className="w-full rounded-lg "
                      priority
                    />
                  ) : (null)}
                </div>
            </div> */}

            {data.extraComponentData ? data.extraComponentData.Holder4 ? <Holder data={data.extraComponentData.Holder4} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder5 ? <Holder data={data.extraComponentData.Holder5} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder6 ? <Holder data={data.extraComponentData.Holder6} /> : <></> :<></>}


            <div className='overflow-hidden pt-5'>
              <div className='flex flex-col md:flex-row'>
                <div className="relative flex-1 rounded-lg overflow-hidden flex justify-center items-center">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${data.bannerImage})`,
                      backgroundSize: 'cover',
                      filter: 'blur(15px)',
                      zIndex: 0 // ensure the background is behind the content
                    }}
                  ></div>
                  <div className="relative z-10">
                    {data.bannerImage ? (
                      <Banner BannerData={data.bannerImage} />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className='w-[420px] max-md:w-full gap-5 p-5 max-md:p-0 md:pt-0'>
                  {data.extraComponentData ? data.extraComponentData.Holder34 ? <Holder data={data.extraComponentData.Holder34} /> : <></> :<></>}
                  {data.extraComponentData ? data.extraComponentData.Holder35 ? <Holder data={data.extraComponentData.Holder35} /> : <></> :<></>}
                  
                  {/* <div className='z-10'>
                    {data.price[0] ? <>
                      {data.price[0].dealPrice ? <>
                        <p className='text-2xl font-bold max-w-max mb-2'>{data.price[0].icon} {data.price[0].dealPrice}</p>
                        <div className='flex gap-2 mb-5'>
                          <p className='text-base line-through text-gray-500 max-w-max'>{data.price[0].icon} {data.price[0].price}</p>
                          {data.price[0].dealPrice === data.price[0].price ? <></>:<>
                            <p className='text-base text-green-500 font-bold'>{((data.price[0].price - data.price[0].dealPrice) / data.price[0].price * 100).toFixed(2)}% Off</p>
                          </>}
                          <PriceInfo data={data.price[0]} />
                        </div>
                      </>:<>
                        {data.price[0].price ? <>
                          <p className='text-2xl text-gray-800 font-bold max-w-max mb-2'>{data.price[0].icon} {data.price[0].price}</p>
                        </>:<></>}
                      </>}
                    </>:<></>}
                  </div> */}
                  <div className='flex gap-5 z-0 mt-5'>

                    
                  {/* <button
                    type="button"
                    onClick={()=> setOpen(true)}
                    className="bg-[#091d5a] z-0 rounded-md text-white relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                    hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-orange-600">
                    Generate short report
                  </button> */}



                  {SessionAction?
                    <>
                      {data.price && Array.isArray(data.price) && data.price.length > 0 ? (
                        <>
                          {whichButton || ProductId ? <>
                          <button
                            type="button"
                            // onClick={()=> router.push("cart")}
                            onClick={() => QuestionModalSet("consultancy")}
                            className="bg-[#091d5a] p-3 px-5 text-white">
                            Added to Cart
                          </button>
                          </>:<>
                          {/* <button
                            type="button"
                            onClick={() => handleAddProduct(data.reportID, data.price[0] ? data.price[0].dealPrice ? data.price[0].dealPrice : data.price[0].price : "", "Single Product")}
                            className="bg-orange-500 p-3 px-5 text-white">
                              {ProductAdding === data.reportID ? "Please wait...": "Book Consultancy"}
                          </button> */}
                            <button
                              type="button"
                              onClick={() => QuestionModalSet("consultancy")}
                              className="bg-orange-500 p-3 px-5 text-white">
                                {ProductAdding === data.reportID ? "Please wait...": "Book Consultancy"}
                            </button>
                            <button
                              type="button"
                              onClick={() => QuestionModalSet("report")}
                              className="bg-orange-500 p-3 px-5 text-white">
                                {ProductAdding === data.reportID ? "Please wait...": "Book Voice Report"}
                            </button>
                          </>}
                        </>
                      ) : (<></>)}
                    </>
                  :<>
                  <button
                    type="button"
                    onClick={() => setOpenModal(true)}
                    className="bg-[#091d5a] p-3 px-5 text-white">
                      Book Consultancy
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenModal(true)}
                    className="bg-[#091d5a] p-3 px-5 text-white">
                      Book Voice Report
                  </button>
                  </>}
                  </div>
                </div>
              </div>

            {questionModal ?<>
            <div className='fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center'>
              <button onClick={() => setQuestionModal(!questionModal)} className='absolute w-full h-full backdrop-blur-md'></button>
              <div className="bg-white p-5 max-w-4xl w-full z-50 max-h-screen overflow-auto">
                <p className='font-pt-serif font-bold text-xl text-gray-800 mb-1'>{data.title}</p>
                {WhichModal === "consultancy" ? <>
                <p className='font-pt-serif text-base text-gray-800 mb-5 italic'>Select the Questions You Wish to Ask (You Can Choose Up to a Maximum of 8)</p>
                </>:<>
                <p className='font-pt-serif text-base text-gray-800 mb-5 italic'>Select the Questions You Wish to Ask (You Can Choose Up to a Maximum of 4)</p>
                </> }
                {CustomQuestion && CustomQuestion.length > 0 ? <>
                <div className='flex flex-col mb-5 justify-end items-end'>
                  <div className='mb-2 flex flex-wrap gap-2'>
                  {CustomQuestion.map((item, index)=> (
                    <p className='text-sm flex gap-2 text-gray-700 justify-center items-center bg-white border border-gray-500 p-1 pr-2 rounded-full' key={index}>
                      <span className='bg-green-500 text-white w-5 h-5 rounded-full flex justify-center items-center'>{index + 1}</span>
                      {item}</p>
                  ))}
                  </div>
                  <button onClick={()=> handleAddProductInConsultation(WhichModal)} className='bg-blue-500 p-2 text-sm px-5 text-white uppercase mt-0'>Submit</button>
                </div>
                </> : <></>}
                <div className='divide-y divide-gray-200 max-h-96 overflow-auto'>
                  {data.questionAnswerData?.Serial1 ?
                    data.questionAnswerData?.Serial1.map((item, index) =>(
                      <div key={index}>
                        {FindAdded(item.question) ? <>
                          <button key={index} onClick={() => Remove(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span className="text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                            </span>
                          </button>
                        </>: <>
                          <button key={index} onClick={() => Add(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>
                            </span>
                          </button>
                          </>}
                        </div>
                    ))
                  : <></>}
                  {data.questionAnswerData?.Serial2 ?
                    data.questionAnswerData?.Serial2.map((item, index) =>(
                      <div key={index}>
                        {FindAdded(item.question) ? <>
                          <button key={index} onClick={() => Remove(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span className="text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                            </span>
                          </button>
                        </>: <>
                          <button key={index} onClick={() => Add(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>
                            </span>
                          </button>
                          </>}
                        </div>
                    ))
                  : <></>}
                  {data.questionAnswerData?.Serial3 ?
                    data.questionAnswerData?.Serial3.map((item, index) =>(
                      <div key={index}>
                        {FindAdded(item.question) ? <>
                          <button key={index} onClick={() => Remove(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span className="text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                            </span>
                          </button>
                        </>: <>
                          <button key={index} onClick={() => Add(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>
                            </span>
                          </button>
                          </>}
                        </div>
                    ))
                  : <></>}
                  {data.questionAnswerData?.Serial4 ?
                    data.questionAnswerData?.Serial4.map((item, index) =>(
                      <div key={index}>
                        {FindAdded(item.question) ? <>
                          <button key={index} onClick={() => Remove(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span className="text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                            </span>
                          </button>
                        </>: <>
                          <button key={index} onClick={() => Add(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>
                            </span>
                          </button>
                          </>}
                        </div>
                    ))
                  : <></>}
                  {data.questionAnswerData?.Serial5 ?
                    data.questionAnswerData?.Serial5.map((item, index) =>(
                      <button key={index} onClick={() => Add(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                        <span className='text-sm'>{item.question}</span>
                        <span className={`${FindAdded(item.question) ? "text-green-500" : ""}`}>
                          {FindAdded(item.question) ?<>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                          </> : <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>
                          </>}
                        </span>
                      </button>
                    ))
                  : <></>}
                 {CustomQuestionAdded ? (
                    CustomQuestionAdded.map((item, index) => (
                      <div key={index}>
                        {FindAdded(item.question) ? <>
                          <button key={index} onClick={() => Remove(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span className="text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                            </span>
                          </button>
                        </>: <>
                          <button key={index} onClick={() => Add(item.question)} className="flex gap-4 justify-between items-center w-full py-1 text-left">
                            <span className='text-sm'>{item.question}</span>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>
                            </span>
                          </button>
                          </>}
                        </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
                  <div className="relative flex items-center mt-5">
                    <div className="min-w-0 flex-1 text-sm leading-6">
                      <div className='flex justify-between items-center p-1 px-0 gap-2'>
                        <textarea
                          id="question"
                          name="question"
                          rows={1}
                          placeholder='Ask Your Custom Question ...'
                          value={typedQuestion}
                          onChange={(e)=> setTypedQuestion(e.target.value)}
                          className="p-2 w-full outline-none bg-white/0 text-gray-800 border border-gray-500"
                        ></textarea>
                        <button
                        onClick={AddQuestion}
                          className='bg-orange-500 py-2 px-4 w-44 rounded-md text-sm text-white'>Add Question</button>
                      </div>
                    </div>
                  </div>
                  
              </div>
            </div>
            </>: <></>}


              {data.extraComponentData ? data.extraComponentData.Holder7 ? <Holder data={data.extraComponentData.Holder7} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder8 ? <Holder data={data.extraComponentData.Holder8} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder9 ? <Holder data={data.extraComponentData.Holder9} /> : <></> :<></>}

              <div className="mx-auto mt-5 flex gap-5">
                  {data.titleLogo2 ? (
                <div className='w-40 max-md:hidden'>
                    <Image
                      width={160}
                      height={160}
                      src={data.titleLogo1}
                      alt={data.title || "Banner Image"}
                      className="w-full rounded-lg "
                      priority
                    />
                  </div>
                  ) : (null)}
                <div className='flex-1'>
                  <p className="mx-auto text-base leading-6 text-gray-800 text-justify">
                    {data.description ? (<div className=''
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />) : (<></>)}
                  </p>
                </div>
                    {data.titleLogo2 ? (
                    <div className='w-40 max-md:hidden'>
                      <Image
                        width={160}
                        height={160}
                        src={data.titleLogo2}
                        alt={data.title || "Banner Image"}
                        className="w-full rounded-lg "
                        priority
                      />
                  </div>
                    ) : (null)}
              </div>

              {/* <div className='pt-5 relative'>
                {data.description ? (<div className='text-base font-normal mt-5 text-justify'
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />) : (<></>)}
              </div> */}
            </div>

            {data.extraComponentData ? data.extraComponentData.Holder10 ? <Holder data={data.extraComponentData.Holder10} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder11 ? <Holder data={data.extraComponentData.Holder11} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder12 ? <Holder data={data.extraComponentData.Holder12} /> : <></> :<></>}

            

            {data.questionAnswerData?.Serial1 ? 
                <div className="mt-5">
                  {/* <h2 className="text-2xl mb-5 font-bold tracking-tight text-[#091d5a]">Questions for You</h2> */}
                  <dl className="flex flex-col gap-1">
                    {data.questionAnswerData.Serial1.map((item, index) => (
                      <Disclosure as="div" key={index}  className={({ open }) =>
                        `bg-orange-600 p-4 ${open ? 'bg-white w-full' : ' flex-auto'}`
                      } >
                        {({ open }) => (
                          <>
                            <dt>
                              <Disclosure.Button className={`${open ? 'bg-orange-500 p-5' : ' '} flex w-full items-start justify-between text-left text-white`}>
                                <span className={`text-lg font-bold leading-7 font-pt-serif`}>{item.question} ?</span>
                                <div className='flex gap-5'>
                                  <span className="ml-6 flex h-7 items-center font-bold">{
                                  item.repotPrice ?
                                    item.repotPrice[0].dealPrice?
                                    item.repotPrice[0].icon +" "+ item.repotPrice[0].dealPrice
                                    : item.repotPrice[0].icon +" "+ item.repotPrice[0].price
                                  : null
                                  }</span>
                                  <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                  </span>
                                </div>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <div>
                                <p className={`${open ? "text-gray-800" : "text-white"} text-base font-normal text-justify`} dangerouslySetInnerHTML={{ __html: item.answer }} />
                              </div>
                              <ul role="list" className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                                {item.crossSellingData ? item.crossSellingData.map((crossItem, index) => (
                                  <li key={index} className="rounded-xl border border-orange-200 bg-orange-50">
                                    <div className="flex items-center gap-x-4 p-3">
                                      <button className="text-xs text-left text-gray-900">{crossItem.CombinedDataFor}</button>
                                    </div>
                                    <dl className="-my-3 divide-y divide-orange-200 px-2 py-1 text-sm leading-6">
                                      <div className="flex justify-between gap-x-4 py-3 items-start">
                                        <dt className="text-gray-500 text-xs">Deal Price</dt>
                                        <dd className="text-green-500 text-xs flex gap-2">
                                          <span className='line-through text-red-600'>{crossItem.currencyIcon}{crossItem.bundleTotalPrice}</span>
                                          <span className='font-bold'>{crossItem.currencyIcon}{crossItem.bundleDealPrice}</span>
                                            {/* <PriceInfoforBundle data={crossItem} /> */}
                                            <div className="relative group z-10">
                                              <span className="text-gray-400 group-hover:bg-red-500">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
                                                      <circle cx="12" cy="12" r="10" />
                                                      <path d="M12 16v-4" />
                                                      <path d="M12 8h.01" />
                                                  </svg>
                                              </span>
                                              <div className="shadow-lg p-0 w-0 absolute h-0 overflow-hidden group-hover:h-52 group-hover:w-96 group-hover:p-2 z-10 bg-white transition-all ease-in duration-200">
                                                  <p className="pb-2 mb-2">Price details</p>
                                                  {crossItem.associatedBundleData?.map((item, index)=>(
                                                    <div className="flex gap-2 justify-between" key={index}>
                                                        <p className="text-xs text-gray-600">{item.title ? item.title : null}</p>
                                                        <p className="text-xs text-gray-600 font-medium">{item.price?.price ? item.price.icon + item.price.price : null}</p>
                                                    </div>
                                                  ))}
                                                  
                                                  <div className="flex gap-2 justify-between mt-5">
                                                      <p className="text-xs text-gray-900">Total Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">
                                                      {crossItem.associatedBundleData?.reduce((total, item) => {
                                                        const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                        return total + price;
                                                      }, 0).toFixed(2)}
                                                      </p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between">
                                                      <p className="text-xs text-gray-900">Deal Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">{crossItem.currencyIcon}{crossItem.bundleDealPrice}</p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between mt-2">
                                                    <p className="text-xs text-green-500 font-bold">Total Discount</p>
                                                    <p className="text-xs text-green-500 font-bold">
                                                    {
                                                        ((crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) - crossItem.bundleDealPrice) / crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) * 100).toFixed(2)
                                                    } % Off
                                                    </p>
                                                </div>
                                              </div>
                                          </div>
                                          </dd>
                                        <dd className="P-0">
                                        {SessionAction ?
                                          DataExistMailList(crossItem.bundleId) ?
                                            <button
                                              type="button"
                                              onClick={() => router.push("cart")}
                                              className="text-xs font-bold block">
                                                Added to Cart
                                            </button>
                                          :
                                            <button
                                            type="button"
                                              onClick={() => handleAddProduct(crossItem.bundleId, crossItem.bundleDealPrice ? crossItem.bundleDealPrice : crossItem.bundleTotalPrice, "Bundle")}
                                              className="text-xs font-bold block">
                                              {ProductAdding === crossItem.bundleId ? "Adding...": "Add bundle"}
                                            </button>
                                        : 
                                          <button
                                            type="button"
                                            onClick={() => setOpenModal(true)}
                                            className="bg-orange-500 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              Add bundle
                                          </button>
                                          }
                                        </dd>
                                      </div>
                                    </dl>
                                  </li>
                                )) : null }
                              </ul>
                              <div className='flex justify-end gap-4'>
                                <button
                                    type="button"
                                    onClick={() => router.push(item.path)}
                                    className="bg-orange-800 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                    hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-orange-600">
                                      Know more
                                  </button>
                                {SessionAction ?

                                  item.repotPrice ?
                                    DataExistMailList(item.reportId) ? 
                                      <button
                                        type="button"
                                        onClick={() => router.push("cart")}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Added to Cart
                                      </button>
                                        :
                                          <button
                                            type="button"
                                            onClick={() => handleAddProduct(item.reportId, item.repotPrice[0] ? item.repotPrice[0].dealPrice ? item.repotPrice[0].dealPrice : item.repotPrice[0].price: "", "Single Product")}
                                            className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              {ProductAdding === item.reportId ? "Adding...": "Buy this report"}
                                          </button>
                                  : null

                                      :
                                      <button
                                        type="button"
                                        onClick={() => setOpenModal(true)}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Buy this report
                                      </button>
                                  }
                                </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
            : null}

            {data.extraComponentData ? data.extraComponentData.Holder13 ? <Holder data={data.extraComponentData.Holder13} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder14 ? <Holder data={data.extraComponentData.Holder14} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder15 ? <Holder data={data.extraComponentData.Holder15} /> : <></> :<></>}
            

            {data.questionAnswerData?.Serial2 ? 
                <div className="mt-5">
                  {/* <h2 className="text-2xl mb-5 font-bold tracking-tight text-[#091d5a]">Questions for You</h2> */}
                  <dl className="flex flex-wrap gap-1">
                    {data.questionAnswerData.Serial2.map((item, index) => (
                      <Disclosure as="div" key={index}  className={({ open }) =>
                        `bg-orange-600 p-4 ${open ? 'bg-white w-full' : ' flex-auto'}`
                      } >
                        {({ open }) => (
                          <>
                            <dt>
                            <Disclosure.Button className={`${open ? 'bg-orange-600 p-5' : ' '} flex w-full items-start justify-between text-left text-white`}>
                                <span className="text-base font-semibold leading-7 font-pt-serif">{item.question} ?</span>
                                <div className='flex gap-5'>
                                  <span className="ml-6 flex h-7 items-center font-bold">{
                                  item.repotPrice ?
                                    item.repotPrice[0].dealPrice?
                                    item.repotPrice[0].icon +" "+ item.repotPrice[0].dealPrice
                                    : item.repotPrice[0].icon +" "+ item.repotPrice[0].price
                                  : null
                                  }</span>
                                  <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                  </span>
                                </div>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <div>
                                <p className={`${open ? "text-gray-800" : "text-white"} text-base font-normal text-justify`} dangerouslySetInnerHTML={{ __html: item.answer }} />
                              </div>
                              <ul role="list" className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                                {item.crossSellingData ? item.crossSellingData.map((crossItem, index) => (
                                  <li key={index} className="rounded-xl border border-orange-200 bg-orange-50">
                                    <div className="flex items-center gap-x-4 p-3">
                                      <button className="text-xs text-left text-gray-900">{crossItem.CombinedDataFor}</button>
                                    </div>
                                    <dl className="-my-3 divide-y divide-orange-200 px-2 py-1 text-sm leading-6">
                                      <div className="flex justify-between gap-x-4 py-3 items-start">
                                        <dt className="text-gray-500 text-xs">Deal Price</dt>
                                        <dd className="text-green-500 text-xs flex gap-2">
                                          <span className='line-through text-red-600'>{crossItem.currencyIcon}{crossItem.bundleTotalPrice}</span>
                                          <span className='font-bold'>{crossItem.currencyIcon}{crossItem.bundleDealPrice}</span>
                                            {/* <PriceInfoforBundle data={crossItem} /> */}
                                            <div className="relative group z-10">
                                              <span className="text-gray-400 group-hover:bg-red-500">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
                                                      <circle cx="12" cy="12" r="10" />
                                                      <path d="M12 16v-4" />
                                                      <path d="M12 8h.01" />
                                                  </svg>
                                              </span>
                                              <div className="shadow-lg p-0 w-0 absolute h-0 overflow-hidden group-hover:h-52 group-hover:w-96 group-hover:p-2 z-10 bg-white transition-all ease-in duration-200">
                                                  <p className="pb-2 mb-2">Price details</p>
                                                  {crossItem.associatedBundleData?.map((item, index)=>(
                                                    <div className="flex gap-2 justify-between" key={index}>
                                                        <p className="text-xs text-gray-600">{item.title}</p>
                                                        <p className="text-xs text-gray-600 font-medium">{item.price?.price ? item.price.icon + item.price.price : null}</p>
                                                    </div>
                                                  ))}
                                                  
                                                  <div className="flex gap-2 justify-between mt-5">
                                                      <p className="text-xs text-gray-900">Total Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">
                                                      {crossItem.associatedBundleData?.reduce((total, item) => {
                                                        const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                        return total + price;
                                                      }, 0).toFixed(2)}
                                                      </p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between">
                                                      <p className="text-xs text-gray-900">Deal Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">{crossItem.currencyIcon}{crossItem.bundleDealPrice}</p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between mt-2">
                                                    <p className="text-xs text-green-500 font-bold">Total Discount</p>
                                                    <p className="text-xs text-green-500 font-bold">
                                                    {
                                                        ((crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) - crossItem.bundleDealPrice) / crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) * 100).toFixed(2)
                                                    } % Off
                                                    </p>
                                                </div>
                                              </div>
                                          </div>
                                          </dd>
                                        <dd className="P-0">
                                        {SessionAction ?
                                          DataExistMailList(crossItem.bundleId) ?
                                            <button
                                              type="button"
                                              onClick={() => router.push("cart")}
                                              className="text-xs font-bold block">
                                                Added to Cart
                                            </button>
                                          :
                                            <button
                                            type="button"
                                              onClick={() => handleAddProduct(crossItem.bundleId, crossItem.bundleDealPrice ? crossItem.bundleDealPrice : crossItem.bundleTotalPrice, "Bundle")}
                                              className="text-xs font-bold block">
                                              {ProductAdding === crossItem.bundleId ? "Adding...": "Add bundle"}
                                            </button>
                                        : 
                                          <button
                                            type="button"
                                            onClick={() => setOpenModal(true)}
                                            className="bg-orange-500 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              Add bundle
                                          </button>
                                          }
                                        </dd>
                                      </div>
                                    </dl>
                                  </li>
                                )) : null }
                              </ul>
                              <div className='flex justify-end gap-4'>
                                <button
                                    type="button"
                                    onClick={() => router.push(item.path)}
                                    className="bg-orange-800 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                    hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-orange-600">
                                      Know more
                                  </button>
                                {SessionAction ?

                                  item.repotPrice ?
                                    DataExistMailList(item.reportId) ? 
                                      <button
                                        type="button"
                                        onClick={() => router.push("cart")}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Added to Cart
                                      </button>
                                        :
                                          <button
                                            type="button"
                                            onClick={() => handleAddProduct(item.reportId, item.repotPrice[0] ? item.repotPrice[0].dealPrice ? item.repotPrice[0].dealPrice : item.repotPrice[0].price: "", "Single Product")}
                                            className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              {ProductAdding === item.reportId ? "Adding...": "Buy this report"}
                                          </button>
                                  : null

                                      :
                                      <button
                                        type="button"
                                        onClick={() => setOpenModal(true)}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Buy this report
                                      </button>
                                  }
                                </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
            : null}
            
            
            {data.extraComponentData ? data.extraComponentData.Holder16 ? <Holder data={data.extraComponentData.Holder16} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder17 ? <Holder data={data.extraComponentData.Holder17} /> : <></> :<></>}
            {data.extraComponentData ? data.extraComponentData.Holder18 ? <Holder data={data.extraComponentData.Holder18} /> : <></> :<></>}

            {data.questionAnswerData?.Serial3 ? 
                <div className="mt-5">
                  {/* <h2 className="text-2xl mb-5 font-bold tracking-tight text-[#091d5a]">Questions for You</h2> */}
                  <dl className="flex flex-wrap gap-1">
                    {data.questionAnswerData.Serial3.map((item, index) => (
                      <Disclosure as="div" key={index}  className={({ open }) =>
                        `bg-orange-600 p-4 ${open ? 'bg-white w-full' : ' flex-auto'}`
                      } >
                        {({ open }) => (
                          <>
                            <dt>
                              <Disclosure.Button className={`${open ? 'bg-orange-600 p-5' : ' '} flex w-full items-start justify-between text-left text-white`}>
                                <span className="text-base font-semibold leading-7 font-pt-serif">{item.question} ?</span>
                                <div className='flex gap-5'>
                                  <span className="ml-6 flex h-7 items-center font-bold">{
                                  item.repotPrice ?
                                    item.repotPrice[0].dealPrice?
                                    item.repotPrice[0].icon +" "+ item.repotPrice[0].dealPrice
                                    : item.repotPrice[0].icon +" "+ item.repotPrice[0].price
                                  : null
                                  }</span>
                                  <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                  </span>
                                </div>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <div>
                                <p className={`${open ? "text-gray-800" : "text-white"} text-base font-normal text-justify`} dangerouslySetInnerHTML={{ __html: item.answer }} />
                              </div>
                              <ul role="list" className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                                {item.crossSellingData ? item.crossSellingData.map((crossItem, index) => (
                                  <li key={index} className="rounded-xl border border-orange-200 bg-orange-50">
                                    <div className="flex items-center gap-x-4 p-3">
                                      <button className="text-xs text-left text-gray-900">{crossItem.CombinedDataFor}</button>
                                    </div>
                                    <dl className="-my-3 divide-y divide-orange-200 px-2 py-1 text-sm leading-6">
                                      <div className="flex justify-between gap-x-4 py-3 items-start">
                                        <dt className="text-gray-500 text-xs">Deal Price</dt>
                                        <dd className="text-green-500 text-xs flex gap-2">
                                          <span className='line-through text-red-600'>{crossItem.currencyIcon}{crossItem.bundleTotalPrice}</span>
                                          <span className='font-bold'>{crossItem.currencyIcon}{crossItem.bundleDealPrice}</span>
                                            {/* <PriceInfoforBundle data={crossItem} /> */}
                                            <div className="relative group z-10">
                                              <span className="text-gray-400 group-hover:bg-red-500">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
                                                      <circle cx="12" cy="12" r="10" />
                                                      <path d="M12 16v-4" />
                                                      <path d="M12 8h.01" />
                                                  </svg>
                                              </span>
                                              <div className="shadow-lg p-0 w-0 absolute h-0 overflow-hidden group-hover:h-52 group-hover:w-96 group-hover:p-2 z-10 bg-white transition-all ease-in duration-200">
                                                  <p className="pb-2 mb-2">Price details</p>
                                                  {crossItem.associatedBundleData?.map((item, index)=>(
                                                    <div className="flex gap-2 justify-between" key={index}>
                                                        <p className="text-xs text-gray-600">{item.title}</p>
                                                        <p className="text-xs text-gray-600 font-medium">{item.price?.price ? item.price.icon + item.price.price : null}</p>
                                                    </div>
                                                  ))}
                                                  
                                                  <div className="flex gap-2 justify-between mt-5">
                                                      <p className="text-xs text-gray-900">Total Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">
                                                      {crossItem.associatedBundleData?.reduce((total, item) => {
                                                        const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                        return total + price;
                                                      }, 0).toFixed(2)}
                                                      </p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between">
                                                      <p className="text-xs text-gray-900">Deal Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">{crossItem.currencyIcon}{crossItem.bundleDealPrice}</p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between mt-2">
                                                    <p className="text-xs text-green-500 font-bold">Total Discount</p>
                                                    <p className="text-xs text-green-500 font-bold">
                                                    {
                                                        ((crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) - crossItem.bundleDealPrice) / crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) * 100).toFixed(2)
                                                    } % Off
                                                    </p>
                                                </div>
                                              </div>
                                          </div>
                                          </dd>
                                        <dd className="P-0">
                                        {SessionAction ?
                                          DataExistMailList(crossItem.bundleId) ?
                                            <button
                                              type="button"
                                              onClick={() => router.push("cart")}
                                              className="text-xs font-bold block">
                                                Added to Cart
                                            </button>
                                          :
                                            <button
                                            type="button"
                                              onClick={() => handleAddProduct(crossItem.bundleId, crossItem.bundleDealPrice ? crossItem.bundleDealPrice : crossItem.bundleTotalPrice, "Bundle")}
                                              className="text-xs font-bold block">
                                              {ProductAdding === crossItem.bundleId ? "Adding...": "Add bundle"}
                                            </button>
                                        : 
                                          <button
                                            type="button"
                                            onClick={() => setOpenModal(true)}
                                            className="bg-orange-500 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              Add bundle
                                          </button>
                                          }
                                        </dd>
                                      </div>
                                    </dl>
                                  </li>
                                )) : null }
                              </ul>
                              <div className='flex justify-end gap-4'>
                                <button
                                    type="button"
                                    onClick={() => router.push(item.path)}
                                    className="bg-orange-800 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                    hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-orange-600">
                                      Know more
                                  </button>
                                {SessionAction ?

                                  item.repotPrice ?
                                    DataExistMailList(item.reportId) ? 
                                      <button
                                        type="button"
                                        onClick={() => router.push("cart")}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Added to Cart
                                      </button>
                                        :
                                          <button
                                            type="button"
                                            onClick={() => handleAddProduct(item.reportId, item.repotPrice[0] ? item.repotPrice[0].dealPrice ? item.repotPrice[0].dealPrice : item.repotPrice[0].price: "", "Single Product")}
                                            className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              {ProductAdding === item.reportId ? "Adding...": "Buy this report"}
                                          </button>
                                  : null

                                      :
                                      <button
                                        type="button"
                                        onClick={() => setOpenModal(true)}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Buy this report
                                      </button>
                                  }
                                </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
            : null}

              {data.extraComponentData ? data.extraComponentData.Holder19 ? <Holder data={data.extraComponentData.Holder19} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder20 ? <Holder data={data.extraComponentData.Holder20} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder21 ? <Holder data={data.extraComponentData.Holder21} /> : <></> :<></>}
              



              {data.questionAnswerData?.Serial4 ? 
                <div className="mt-5">
                  {/* <h2 className="text-2xl mb-5 font-bold tracking-tight text-[#091d5a]">Questions for You</h2> */}
                  <dl className="flex flex-wrap gap-1">
                    {data.questionAnswerData.Serial4.map((item, index) => (
                      <Disclosure as="div" key={index}  className={({ open }) =>
                        `bg-orange-600 p-4 ${open ? 'bg-white w-full' : ' flex-auto'}`
                      } >
                        {({ open }) => (
                          <>
                            <dt>
                            <Disclosure.Button className={`${open ? 'bg-orange-600 p-5' : ' '} flex w-full items-start justify-between text-left text-white`}>
                                <span className="text-base font-semibold leading-7 font-pt-serif">{item.question} ?</span>
                                <div className='flex gap-5'>
                                  <span className="ml-6 flex h-7 items-center font-bold">{
                                  item.repotPrice ?
                                    item.repotPrice[0].dealPrice?
                                    item.repotPrice[0].icon +" "+ item.repotPrice[0].dealPrice
                                    : item.repotPrice[0].icon +" "+ item.repotPrice[0].price
                                  : null
                                  }</span>
                                  <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                  </span>
                                </div>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <div>
                                <p className={`${open ? "text-gray-800" : "text-white"} text-base font-normal text-justify`} dangerouslySetInnerHTML={{ __html: item.answer }} />
                              </div>
                              <ul role="list" className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                                {item.crossSellingData ? item.crossSellingData.map((crossItem, index) => (
                                  <li key={index} className="rounded-xl border border-orange-200 bg-orange-50">
                                    <div className="flex items-center gap-x-4 p-3">
                                      <button className="text-xs text-left text-gray-900">{crossItem.CombinedDataFor}</button>
                                    </div>
                                    <dl className="-my-3 divide-y divide-orange-200 px-2 py-1 text-sm leading-6">
                                      <div className="flex justify-between gap-x-4 py-3 items-start">
                                        <dt className="text-gray-500 text-xs">Deal Price</dt>
                                        <dd className="text-green-500 text-xs flex gap-2">
                                          <span className='line-through text-red-600'>{crossItem.currencyIcon}{crossItem.bundleTotalPrice}</span>
                                          <span className='font-bold'>{crossItem.currencyIcon}{crossItem.bundleDealPrice}</span>
                                            {/* <PriceInfoforBundle data={crossItem} /> */}
                                            <div className="relative group z-10">
                                              <span className="text-gray-400 group-hover:bg-red-500">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
                                                      <circle cx="12" cy="12" r="10" />
                                                      <path d="M12 16v-4" />
                                                      <path d="M12 8h.01" />
                                                  </svg>
                                              </span>
                                              <div className="shadow-lg p-0 w-0 absolute h-0 overflow-hidden group-hover:h-52 group-hover:w-96 group-hover:p-2 z-10 bg-white transition-all ease-in duration-200">
                                                  <p className="pb-2 mb-2">Price details</p>
                                                  {crossItem.associatedBundleData?.map((item, index)=>(
                                                    <div className="flex gap-2 justify-between" key={index}>
                                                        <p className="text-xs text-gray-600">{item.title}</p>
                                                        <p className="text-xs text-gray-600 font-medium">{item.price?.price ? item.price.icon + item.price.price : null}</p>
                                                    </div>
                                                  ))}
                                                  
                                                  <div className="flex gap-2 justify-between mt-5">
                                                      <p className="text-xs text-gray-900">Total Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">
                                                      {crossItem.associatedBundleData?.reduce((total, item) => {
                                                        const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                        return total + price;
                                                      }, 0).toFixed(2)}
                                                      </p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between">
                                                      <p className="text-xs text-gray-900">Deal Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">{crossItem.currencyIcon}{crossItem.bundleDealPrice}</p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between mt-2">
                                                    <p className="text-xs text-green-500 font-bold">Total Discount</p>
                                                    <p className="text-xs text-green-500 font-bold">
                                                    {
                                                        ((crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) - crossItem.bundleDealPrice) / crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) * 100).toFixed(2)
                                                    } % Off
                                                    </p>
                                                </div>
                                              </div>
                                          </div>
                                          </dd>
                                        <dd className="P-0">
                                        {SessionAction ?
                                          DataExistMailList(crossItem.bundleId) ?
                                            <button
                                              type="button"
                                              onClick={() => router.push("cart")}
                                              className="text-xs font-bold block">
                                                Added to Cart
                                            </button>
                                          :
                                            <button
                                            type="button"
                                              onClick={() => handleAddProduct(crossItem.bundleId, crossItem.bundleDealPrice ? crossItem.bundleDealPrice : crossItem.bundleTotalPrice, "Bundle")}
                                              className="text-xs font-bold block">
                                              {ProductAdding === crossItem.bundleId ? "Adding...": "Add bundle"}
                                            </button>
                                        : 
                                          <button
                                            type="button"
                                            onClick={() => setOpenModal(true)}
                                            className="bg-orange-500 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              Add bundle
                                          </button>
                                          }
                                        </dd>
                                      </div>
                                    </dl>
                                  </li>
                                )) : null }
                              </ul>
                              <div className='flex justify-end gap-4'>
                                <button
                                    type="button"
                                    onClick={() => router.push(item.path)}
                                    className="bg-orange-800 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                    hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-orange-600">
                                      Know more
                                  </button>
                                {SessionAction ?

                                  item.repotPrice ?
                                    DataExistMailList(item.reportId) ? 
                                      <button
                                        type="button"
                                        onClick={() => router.push("cart")}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Added to Cart
                                      </button>
                                        :
                                          <button
                                            type="button"
                                            onClick={() => handleAddProduct(item.reportId, item.repotPrice[0] ? item.repotPrice[0].dealPrice ? item.repotPrice[0].dealPrice : item.repotPrice[0].price: "", "Single Product")}
                                            className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              {ProductAdding === item.reportId ? "Adding...": "Buy this report"}
                                          </button>
                                  : null

                                      :
                                      <button
                                        type="button"
                                        onClick={() => setOpenModal(true)}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Buy this report
                                      </button>
                                  }
                                </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
            : null}

              {data.extraComponentData ? data.extraComponentData.Holder22 ? <Holder data={data.extraComponentData.Holder22} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder23 ? <Holder data={data.extraComponentData.Holder23} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder24 ? <Holder data={data.extraComponentData.Holder24} /> : <></> :<></>}
              
              


              {data.questionAnswerData?.Serial5 ? 
                <div className="mt-5">
                  {/* <h2 className="text-2xl mb-5 font-bold tracking-tight text-[#091d5a]">Questions for You</h2> */}
                  <dl className="flex flex-wrap gap-1">
                    {data.questionAnswerData.Serial5.map((item, index) => (
                      <Disclosure as="div" key={index}  className={({ open }) =>
                        `bg-orange-600 p-4 ${open ? 'bg-white w-full' : ' flex-auto'}`
                      } >
                        {({ open }) => (
                          <>
                            <dt>
                            <Disclosure.Button className={`${open ? 'bg-orange-600 p-5' : ' '} flex w-full items-start justify-between text-left text-white`}>
                                <span className="text-base font-semibold leading-7 font-pt-serif">{item.question} ? </span>
                                <div className='flex gap-5'>
                                  <span className="ml-6 flex h-7 items-center font-bold">{
                                  item.repotPrice ?
                                    item.repotPrice[0].dealPrice?
                                    item.repotPrice[0].icon +" "+ item.repotPrice[0].dealPrice
                                    : item.repotPrice[0].icon +" "+ item.repotPrice[0].price
                                  : null
                                  }</span>
                                  <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                  </span>
                                </div>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <div>
                                <p className={`${open ? "text-gray-800" : "text-white"} text-base font-normal text-justify`} dangerouslySetInnerHTML={{ __html: item.answer }} />
                              </div>
                              <ul role="list" className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                                {item.crossSellingData ? item.crossSellingData.map((crossItem, index) => (
                                  <li key={index} className="rounded-xl border border-orange-200 bg-orange-50">
                                    <div className="flex items-center gap-x-4 p-3">
                                      <button className="text-xs text-left text-gray-900">{crossItem.CombinedDataFor}</button>
                                    </div>
                                    <dl className="-my-3 divide-y divide-orange-200 px-2 py-1 text-sm leading-6">
                                      <div className="flex justify-between gap-x-4 py-3 items-start">
                                        <dt className="text-gray-500 text-xs">Deal Price</dt>
                                        <dd className="text-green-500 text-xs flex gap-2">
                                          <span className='line-through text-red-600'>{crossItem.currencyIcon}{crossItem.bundleTotalPrice}</span>
                                          <span className='font-bold'>{crossItem.currencyIcon}{crossItem.bundleDealPrice}</span>
                                            {/* <PriceInfoforBundle data={crossItem} /> */}
                                            <div className="relative group z-10">
                                              <span className="text-gray-400 group-hover:bg-red-500">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
                                                      <circle cx="12" cy="12" r="10" />
                                                      <path d="M12 16v-4" />
                                                      <path d="M12 8h.01" />
                                                  </svg>
                                              </span>
                                              <div className="shadow-lg p-0 w-0 absolute h-0 overflow-hidden group-hover:h-52 group-hover:w-96 group-hover:p-2 z-10 bg-white transition-all ease-in duration-200">
                                                  <p className="pb-2 mb-2">Price details</p>
                                                  {crossItem.associatedBundleData?.map((item, index)=>(
                                                    <div className="flex gap-2 justify-between" key={index}>
                                                        <p className="text-xs text-gray-600">{item.title}</p>
                                                        <p className="text-xs text-gray-600 font-medium">{item.price?.price ? item.price.icon + item.price.price : null}</p>
                                                    </div>
                                                  ))}
                                                  
                                                  <div className="flex gap-2 justify-between mt-5">
                                                      <p className="text-xs text-gray-900">Total Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">
                                                      {crossItem.associatedBundleData?.reduce((total, item) => {
                                                        const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                        return total + price;
                                                      }, 0).toFixed(2)}
                                                      </p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between">
                                                      <p className="text-xs text-gray-900">Deal Price</p>
                                                      <p className="text-xs text-gray-900 font-medium">{crossItem.currencyIcon}{crossItem.bundleDealPrice}</p>
                                                  </div>
                                                  <div className="flex gap-2 justify-between mt-2">
                                                    <p className="text-xs text-green-500 font-bold">Total Discount</p>
                                                    <p className="text-xs text-green-500 font-bold">
                                                    {
                                                        ((crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) - crossItem.bundleDealPrice) / crossItem.associatedBundleData?.reduce((total, item) => {
                                                            const price = item.price?.price ? parseFloat(item.price.price) : 0;
                                                            return total + price;
                                                        }, 0) * 100).toFixed(2)
                                                    } % Off
                                                    </p>
                                                </div>
                                              </div>
                                          </div>
                                          </dd>
                                        <dd className="P-0">
                                        {SessionAction ?
                                          DataExistMailList(crossItem.bundleId) ?
                                            <button
                                              type="button"
                                              onClick={() => router.push("cart")}
                                              className="text-xs font-bold block">
                                                Added to Cart
                                            </button>
                                          :
                                            <button
                                            type="button"
                                              onClick={() => handleAddProduct(crossItem.bundleId, crossItem.bundleDealPrice ? crossItem.bundleDealPrice : crossItem.bundleTotalPrice, "Bundle")}
                                              className="text-xs font-bold block">
                                              {ProductAdding === crossItem.bundleId ? "Adding...": "Add bundle"}
                                            </button>
                                        : 
                                          <button
                                            type="button"
                                            onClick={() => setOpenModal(true)}
                                            className="bg-orange-500 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              Add bundle
                                          </button>
                                          }
                                        </dd>
                                      </div>
                                    </dl>
                                  </li>
                                )) : null }
                              </ul>
                              <div className='flex justify-end gap-4'>
                                <button
                                    type="button"
                                    onClick={() => router.push(item.path)}
                                    className="bg-orange-800 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                    hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-orange-600">
                                      Know more
                                  </button>
                                {SessionAction ?

                                  item.repotPrice ?
                                    DataExistMailList(item.reportId) ? 
                                      <button
                                        type="button"
                                        onClick={() => router.push("cart")}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Added to Cart
                                      </button>
                                        :
                                          <button
                                            type="button"
                                            onClick={() => handleAddProduct(item.reportId, item.repotPrice[0] ? item.repotPrice[0].dealPrice ? item.repotPrice[0].dealPrice : item.repotPrice[0].price: "", "Single Product")}
                                            className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                            hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                            focus-visible:outline-orange-600">
                                              {ProductAdding === item.reportId ? "Adding...": "Buy this report"}
                                          </button>
                                  : null

                                      :
                                      <button
                                        type="button"
                                        onClick={() => setOpenModal(true)}
                                        className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                        hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600">
                                          Buy this report
                                      </button>
                                  }
                                </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
              : null}


              {data.extraComponentData ? data.extraComponentData.Holder25 ? <Holder data={data.extraComponentData.Holder25} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder26 ? <Holder data={data.extraComponentData.Holder26} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder27 ? <Holder data={data.extraComponentData.Holder27} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder28 ? <Holder data={data.extraComponentData.Holder28} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder29 ? <Holder data={data.extraComponentData.Holder29} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder30 ? <Holder data={data.extraComponentData.Holder30} /> : <></> :<></>}
  

            {data.faqData && data.faqData.length !== 0 ? <>
                <div className="mt-10 divide-y divide-orange-200">
                <h2 className="text-2xl mb-5 font-bold tracking-tight text-orange-600">Frequently asked questions</h2>
                {data.faqData.map((faq, index) => (
                  <div key={index} className="bg-orange-600 p-4 mb-4">
                    <Disclosure as="dt">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                            <span className="text-base font-semibold leading-7">{faq.faqQue}</span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                              ) : (
                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 pr-12">
                            {/* <p className="text-base leading-7 font-light text-white">{faq.faqAns}</p> */}
                            {faq.faqAns ? (<div className='text-base leading-7 font-light text-white'
                              dangerouslySetInnerHTML={{ __html: faq.faqAns }}
                            />) : (<></>)}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </div>

              {data.extraComponentData ? data.extraComponentData.Holder31 ? <Holder data={data.extraComponentData.Holder31} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder32 ? <Holder data={data.extraComponentData.Holder32} /> : <></> :<></>}
              {data.extraComponentData ? data.extraComponentData.Holder33 ? <Holder data={data.extraComponentData.Holder33} /> : <></> :<></>}
            </>:<></>}

            
            {data.pageRelatedProduct ?<>
              <div className="bg-whitemx-auto">
                <div className="border-b border-gray-200 px-0 py-5 pb-3 ">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900">Related Product</h3>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-5 pt-0">
                  {data.pageRelatedProduct.map((item, index)=>(
                    <div key={index} className="mx-auto rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10 mt-10 w-full">
                        <button onClick={()=> router.push(item.path)} className="text-sm font-bold leading-6 text-left text-gray-900">{item.title}</button>
                        <div className="mt-4 flex items-center gap-x-5">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">{item.price[0]?.icon} {item.price[0]?.price}</button>
                            {SessionAction ?

                              item.price ? 
                              DataExistMailList(item.reportID) ? 
                                  <button
                                    type="button"
                                    onClick={() => router.push("cart")}
                                    className="bg-orange-600 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                                    hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-orange-600">
                                      Added to Cart
                                  </button>
                                  :
                                  <button
                                    type="button"
                                    onClick={() => handleAddProduct(item.reportID, item.price[0] ? item.price[0].dealPrice ? item.price[0].dealPrice : item.price[0].price: "", "Single Product")}
                                    className="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                    >
                                      {ProductAdding === item.reportID ? "Adding...": "Add to cart"}
                                  </button>
                                  : null

                            :
                            <button
                              type="button"
                              onClick={() => setOpenModal(true)}
                              className="bg-orange-500 z-0 text-white rounded-md relative py-2 px-4 text-sm font-normal text-whiteshadow-sm
                              hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                              focus-visible:outline-orange-600">
                                Add to cart
                            </button>
                            }
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </>:<></>}


            {data.pageRelatedBlog ? <>
              <div className="bg-whitemx-auto">
                <div className="border-b border-gray-200 px-0 py-5 pb-3 ">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900">Related Blogs</h3>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 py-5">
                  <PageRelatedBlog Data={data.pageRelatedBlog} />
                </div>
              </div>
            </>:<></>}

            {data.pageRelatedArticle ? <>
              <div className="bg-whitemx-auto">
                <div className="border-b border-gray-200  px-0 py-5 pb-3 ">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900">Related Articles</h3>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 py-5">
                  <PageRelatedBlog Data={data.pageRelatedArticle} />
                </div>
              </div>
            </>:<></>}

          </div>
        </div>
        :<>
        <div className='w-full bg-white p-5 flex flex-col gap-5'>
            <div role="status" class="max-w-sm animate-pulse w-full">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
            <div role="status" class="max-w-sm animate-pulse w-full">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
            <div role="status" class="max-w-sm animate-pulse w-full">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
            <div role="status" class="max-w-sm animate-pulse w-full">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        </>}
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden bg-black/20 backdrop-blur-sm">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                    <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1">
                        {/* Header */}
                        <div className="bg-gray-50 px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between space-x-3">
                            <div className="space-y-1">
                              {data ?
                                data.title ? <>
                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                  {data.title}
                                </Dialog.Title>
                                </>:<></>
                              : null}
                              {data ?
                                data.shortDesc ? (<div className='text-sm text-gray-500' dangerouslySetInnerHTML={{ __html: data.shortDesc }} />) : (<></>)
                              : null}
                            </div>
                            <div className="flex h-7 items-center">
                              <button
                                type="button"
                                className="relative text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-2.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Divider container */}

                       {data ?
                          data.reportID ?
                            <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                              <ReportForm reportID={data.reportID} language={data.language} />
                            </div>
                          : null
                        : null}
               
                      </div>
                      {/* Action buttons */}
                      <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                        <div className="flex justify-end space-x-3">
                          <button
                            type="button"
                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
          {openModal ?<>
          <div className='flex flex-col justify-center items-center z-30 backdrop-blur-md bg-white/20 fixed left-0 top-0 w-full h-full'>
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 w-96">
                <LoginForm />
            </div>
            <button onClick={() => {setOpenModal(false), GetSession(), dispatch(toggleStartSession())}} className='-mt-5 w-96 flex items-center justify-center gap-2 rounded-b-md bg-white px-4 py-2 text-sm font-semibold text-blue-500 shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-gray-50 focus-visible:ring-transparent'>Close</button>
          </div>
          </>:<></>}
      </div>
      
    </>
  )
}
