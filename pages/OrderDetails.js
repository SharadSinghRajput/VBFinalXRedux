
"use client"; 
import Image from 'next/image';
import {useEffect, useState} from 'react'
import { getLocalStorageItem, setLocalStorageItem } from '../config/localStorage';
import ShortDescription from './pageAssets/ShortDescription'
import {API_KEY, Domain_Secrete_Code, API_NEW_URL} from '../config/config'

import { useRouter } from 'next/router';

const products = [
    {
      id: 1,
      name: 'Cold Brew Bottle',
      description:
        'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
      href: '#',
      quantity: 1,
      price: '$32.00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
      imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
    {
      id: 1,
      name: 'Cold Brew Bottle',
      description:
        'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
      href: '#',
      quantity: 1,
      price: '$32.00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
      imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
    {
      id: 1,
      name: 'Cold Brew Bottle',
      description:
        'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
      href: '#',
      quantity: 1,
      price: '$32.00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
      imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
    {
      id: 1,
      name: 'Cold Brew Bottle',
      description:
        'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
      href: '#',
      quantity: 1,
      price: '$32.00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
      imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
  ]


export default function Cart() {
    const router = useRouter();
  
    const [UnderId, setUnderId] = useState(false)
    const [cartId, setcartId] = useState("")
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [Address, setAddress] = useState("")
    const [confirmed, setconfirmed] = useState(true)
    const [OrderDetailsBank, setOrderDetailsBank] = useState("")
    const [PaymentDetailsBank, setPaymentDetailsBank] = useState("")
    const [orderDataID, setorderDataID] = useState("")
    const [ShowRecipt, setShowRecipt] = useState(false)
    
    


    useEffect(()=>{
        const GetUserDetails = async () => {
            const UserDetails = getLocalStorageItem('UserDataKey');
            if(UserDetails !== null) {
                setUnderId(UserDetails.id)
                setName(UserDetails.name)
                setPhone(UserDetails.phone)
                setEmail(UserDetails.email)
            }
        };
        GetUserDetails();
    },[])



    
    useEffect(()=>{
        const handleSubmit = async () => {
            const OrderDetails = getLocalStorageItem('OrderDetailsKey');
            if (OrderDetails !== null) {
                setOrderDetailsBank(OrderDetails)
                setorderDataID(OrderDetails.orderData.oderid)
                console.log(OrderDetails)
            }
        };
        handleSubmit()
    },[])


   
   




    useEffect(() => {
        const handleSubmit = async () => {
            const PayID = getLocalStorageItem('Pay_IDKey');
            if (PayID !== null) {
                try {
                    const response = await fetch(`/api/razorpay?id=${PayID}`, {
                        method: 'GET'
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }

                    const result = await response.json();
                    console.log(result);
                    if(result){
                        setPaymentDetailsBank(result);
                        if(orderDataID){
                            SendInfo(result);
                        }
                    }

                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
        };
        handleSubmit();
    }, [orderDataID]);

    function convertUnixTimestampToDate(unixTimestamp) {
        // Convert the timestamp to milliseconds
        const date = new Date(unixTimestamp * 1000);
      
        // Get the year, month, day, hours, minutes, and seconds
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
      
        // Format the date and time
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      
        return formattedDate;
      }

    
    const SendInfo = async (PayData) => {
        const dataToGet = {
            order_id : orderDataID,
            paidAmount : PayData.amount,
            tracking_id : PayData.acquirer_data.rrn || "" ,
            bank_ref_no : "",
            order_status : PayData.status || "",
            failure_message : PayData.error_description || "",
            payment_mode : PayData.method || "",
            status_code : "200",
            status_message :
                PayData.status === "created" ? "Payment request initiated" :
                PayData.status === "authorized" ? "Payment approved, pending capture." :
                PayData.status === "captured" ? "Payment successfully processed" :
                PayData.status === "refunded" ?  "Payment reversed, refunded." : 
                PayData.status === "failed" ? "Payment attempt unsuccessful." : "",
            trans_date : convertUnixTimestampToDate(PayData.created_at) || "",
            status : PayData.status || "",
            razorpayId : PayData.id || "",
            currency : PayData.currency || ""
        }

        const apiUrl = `${API_NEW_URL}payment-api.php`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToGet),
            });

            const data = await response.json();
            console.log(data);
            console.log(JSON.stringify(dataToGet));
        } catch (error) {}
    };
    


    const [totalPrice, setTotalPrice] = useState(0);
    const [DealPrice, setDealPrice] = useState(0);
    const [MIcon, setMIcon] = useState("");


    useEffect(() => {
        let totalPrice = 0;
        let DealPrice = 0;
        if(OrderDetailsBank){
            OrderDetailsBank.cartData.forEach(item => {
                if(item.productData?.repotPrice[0]){
                    totalPrice += item.productData?.repotPrice[0].price;
                    DealPrice += Number(item.productData?.repotPrice[0].dealPrice) || Number(item.productData?.repotPrice[0].price);
                    if(item.productData?.repotPrice[0].icon){
                        setMIcon(item.productData?.repotPrice[0].icon)
                    }
                }
            });
            setTotalPrice(totalPrice);
            setDealPrice(DealPrice);
            console.log(totalPrice);
            console.log(DealPrice);
        }
    }, [OrderDetailsBank]);

    

    return (
        <div className="max-w-6xl mx-auto shadow-2xl bg-white p-10 mt-5 mb-5 rounded-lg">
            <main className="bg-white px-4 pb-24 sm:px-6 lg:px-8 pt-0">
                <div className="mx-auto">
                    {PaymentDetailsBank ?
                    <div className="max-w-xl">
                        <h1 className="text-sm font-medium text-indigo-600">
                            {PaymentDetailsBank.status === "created" ||
                            PaymentDetailsBank.status === "authorized" || 
                            PaymentDetailsBank.status === "captured" 
                            ? <span className='text-green-500'>Thank you!</span> : <span className='text-red-500'>Ooops!</span> }</h1>
                        <p className="mt-2 text-4xl font-bold tracking-tight flex gap-3">
                            Your order is
                            {PaymentDetailsBank.status === "created" ||
                            PaymentDetailsBank.status === "authorized" ? <span className='text-green-500 flex gap-4'>processing <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></span> : 
                            PaymentDetailsBank.status === "captured"  ? <span className='text-green-500 flex gap-4'>confirmed <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></span> :
                            <span className='text-red-500'>failed</span>
                            }
                        </p>
                            <p className='text-xs text-gray-500 mt-2'> Your payment is {PaymentDetailsBank.status}</p>
                            {/* <p className='text-xs text-gray-500'>
                            {PaymentDetailsBank.status === "created" ? "Payment request initiated" :
                            PaymentDetailsBank.status === "authorized" ? "Payment approved, pending capture." :
                            PaymentDetailsBank.status === "captured" ? "Payment successfully processed" :
                            PaymentDetailsBank.status === "refunded" ?  "Payment reversed, refunded." : 
                            PaymentDetailsBank.status === "failed" ? "Payment attempt unsuccessful." : ""}
                            </p> */}
                            <dl className="flex gap-5 mt-5">
                                {OrderDetailsBank ?
                                OrderDetailsBank.orderData ?
                                <>
                                <dt className="text-xs text-gray-500">Order number </dt>
                                <dd className="text-xs text-gray-500">{OrderDetailsBank.orderData.oderid}</dd>
                                </>
                                : null : null}
                            <dd className="text-sm text-gray-900">
                            <p className='text-xs text-gray-500' >{convertUnixTimestampToDate(PaymentDetailsBank.created_at)}</p>
                            </dd>
                        </dl>
                        <div className='w-full flex justify-end'>
                            <button className='text-sm text-gray-600' onClick={() => setShowRecipt(!ShowRecipt)}>View Invoice</button>
                        </div>
                    </div>
                    :  null}
                    <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
                    <h3 className="sr-only">Items</h3>
                    {OrderDetailsBank ?
                        OrderDetailsBank.cartData ?
                            OrderDetailsBank.cartData.map((item, index)=>(
                                item.itemType === "Single Product" ?
                                    <div key={index} className="flex space-x-6 border-b border-gray-200 py-4">
                                        <Image
                                            src={item.productData.banner}
                                            alt={item.productData.banner}
                                            width={96}
                                            height={40}
                                            className="rounded-md aspect-video object-cover"
                                            priority
                                        />
                                        <div className="flex flex-auto flex-col">
                                            <div>
                                                <div className='flex gap-10 justify-between'>
                                                    <h4 className="font-medium text-sm text-gray-900">
                                                        <button onClick={()=> router.push(item.productData.path)} >{item.productData.question}</button>
                                                    </h4>
                                                    <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                                                        <div className="flex">
                                                            {/* <dt className="font-medium text-sm text-gray-900">Price/</dt> */}
                                                            {item.productData.repotPrice[0] 
                                                            ? (item.productData.repotPrice[0].dealPrice ?
                                                                <>
                                                                    <dd className="ml-2 text-gray-700 line-through"> 
                                                                    {MIcon}
                                                                    {item.productData.repotPrice[0]
                                                                    ? (item.productData.repotPrice[0].price                                                                 
                                                                    ? item.productData.repotPrice[0].price
                                                                    : null) : null}</dd>
                                                                </>
                                                            : null) 
                                                            : null}
                                                            <dd className="ml-2 text-gray-700">{MIcon} 
                                                            {item.productData.repotPrice[0] 
                                                            ? (item.productData.repotPrice[0].dealPrice
                                                            ? item.productData.repotPrice[0].dealPrice
                                                            : item.productData.repotPrice[0].price) 
                                                            : null}</dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                                {item.productData.answer ?
                                                    <ShortDescription descData={item.productData.answer} CharCount={100} />
                                                :<></>}
                                            </div>
                                        </div>
                                    </div>
                                :null

                            ))
                        : null
                    : null }
                    <div className="sm:ml-40 sm:pl-6">
                        <h3 className="sr-only">Your information</h3>
                        <h4 className="sr-only">Addresses</h4>
                        <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
                        <div>
                            <dt className="font-medium text-gray-900">Shipping address</dt>
                            <dd className="mt-2 text-gray-700">
                            {OrderDetailsBank ?
                                OrderDetailsBank.orderData ?
                                    <address className="not-italic">
                                        <span className="block">{OrderDetailsBank.orderData.personName}</span>
                                        <span className="block">
                                            {OrderDetailsBank.orderData.address}{", "}
                                            {OrderDetailsBank.orderData.city}{", "}
                                        </span>
                                        <span className="block">
                                            {OrderDetailsBank.orderData.state}{", "}
                                            {OrderDetailsBank.orderData.country}{", "}
                                            {OrderDetailsBank.orderData.pincode}{", "}
                                        </span>
                                    </address>
                                : null
                            :null }
                            </dd>
                        </div>
                        <div>
                            <dt className="font-medium text-gray-900">Billing address</dt>
                            <dd className="mt-2 text-gray-700">
                            {OrderDetailsBank ?
                                OrderDetailsBank.orderData ?
                                    <address className="not-italic">
                                        <span className="block">{OrderDetailsBank.orderData.personName}</span>
                                        <span className="block">
                                            {OrderDetailsBank.orderData.address}{", "}
                                            {OrderDetailsBank.orderData.city}{", "}
                                        </span>
                                        <span className="block">
                                            {OrderDetailsBank.orderData.state}{", "}
                                            {OrderDetailsBank.orderData.country}{", "}
                                            {OrderDetailsBank.orderData.pincode}{", "}
                                        </span>
                                    </address>
                                : null
                            :null }
                            </dd>
                        </div>
                        </dl>

                        <h4 className="sr-only">Payment</h4>
                        <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
                        <div>
                            {PaymentDetailsBank ?
                                PaymentDetailsBank.method ?
                                    <>
                                    <dt className="font-medium text-gray-900">Payment method</dt>
                                    <dd className="mt-2 text-gray-700">
                                        <p>{PaymentDetailsBank.method}</p>
                                        <p>{PaymentDetailsBank.vpa}</p>
                                    </dd>
                                    </>
                                : null
                            : null}
                        </div>
                        <div>
                            <dt className="font-medium text-gray-900">Shipping method</dt>
                            <dd className="mt-2 text-gray-700">
                            {/* <p>DHL</p>
                            <p>Takes up to 3 working days</p> */}
                            </dd>
                        </div>
                        </dl>

                        <h3 className="sr-only">Summary</h3>

                        <dl className="space-y-6 border-t border-gray-200 pt-10 text-sm">
                        {totalPrice ?
                        <div className="flex justify-between">
                            <dt className="font-medium text-gray-900">Total cart value</dt>
                            <dd className="text-gray-700">{MIcon} {totalPrice}</dd>
                        </div>
                        : null}
                        {DealPrice && totalPrice ?
                        <div className="flex justify-between">
                            <dt className="flex font-medium text-gray-900">
                            Discount price
                            {/* <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600">STUDENT50</span> */}
                            </dt>
                            <dd className="text-green-500">{MIcon} {totalPrice - DealPrice}</dd>
                        </div>
                        : null}
                        {DealPrice ?
                        <div className="flex justify-between">
                            <dt className="font-medium text-gray-900">Total</dt>
                            <dd className="text-green-500">{MIcon} {DealPrice}</dd>
                        </div>
                        : null}
                        </dl>
                    </div>
                    {PaymentDetailsBank ?
                    <div className=''>
                        <div className="sm:flex-auto mb-5 mt-10">
                            <h1 className="text-base font-semibold leading-6 text-gray-900">Payment Details for Order ID : 8454623</h1>
                            {/* <p className="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p> */}
                        </div>
                        <table className="min-w-full divide-y divide-gray-300 p-5 ">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-700">Order Status</th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xs font-normal text-gray-700 sm:pl-6">Razorpay ID</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-700">Transaction Date</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-700">Amount</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-700">Payment Mode</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-700">Tracking ID</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-500">{PaymentDetailsBank.status}</th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xs font-normal text-gray-500 sm:pl-6">{PaymentDetailsBank.id}</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-500">{convertUnixTimestampToDate(PaymentDetailsBank.created_at)}</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-500">{PaymentDetailsBank.amount}</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-500">{PaymentDetailsBank.method}</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-xs font-normal text-gray-500">{PaymentDetailsBank.acquirer_data.rrn}</th>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    : null}
                    </section>
                </div>
                {ShowRecipt ?
                    PaymentDetailsBank ?
                        <div className='fixed top-0 left-0 w-full h-full flex-col backdrop-blur-xl bg-white/20 flex justify-center items-center' >
                            <div className="w-80 rounded bg-white px-6 pt-8 shadow-lg">
                                <img src="https://www.vinaybajrangi.com/asset_frontend/img/logo.png" alt="chippz" className="mx-auto w-16 py-4" />
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <h4 className="font-semibold">Vinay Bajrangi</h4>
                                </div>
                                <div className="flex flex-col gap-3 border-b py-6 text-xs">
                                    {OrderDetailsBank ?
                                        OrderDetailsBank.orderData ?
                                    <>
                                    <p className="flex justify-between">
                                        <span className="text-gray-400">Order Number.:</span>
                                        <span>{OrderDetailsBank.orderData.oderid}</span>
                                    </p>
                                    </>
                                    : null : null}
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Date:</span>
                                    <span>{convertUnixTimestampToDate(PaymentDetailsBank.created_at)}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Email:</span>
                                    <span>{PaymentDetailsBank.email}</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-400">Customer:</span>
                                    <span>John Doe</span>
                                </p>
                                </div>
                                <div className="flex flex-col gap-3 pb-6 pt-2 text-xs">
                                <table className="w-full text-left">
                                    <thead>
                                    <tr className="flex">
                                        <th className="w-full py-2">Product</th>
                                        <th className="min-w-[44px] py-2">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {OrderDetailsBank ?
                                        OrderDetailsBank.cartData ?
                                            OrderDetailsBank.cartData.map((item, index)=>(
                                                item.itemType === "Single Product" ?
                                                    <tr className="flex" key={index}>
                                                        <td className="flex-1 py-1">{item.productData.question}</td>
                                                        <td className="min-w-[44px]">{item.productData.repotPrice[0] 
                                                                ? (item.productData.repotPrice[0].price 
                                                                ? item.productData.repotPrice[0].price 
                                                                : null) 
                                                                : null}</td>
                                                    </tr>
                                                :null

                                            ))
                                        : null
                                    : null }
                                    <tr className="flex">
                                        <td className="flex-1 py-1">_______</td>
                                        <td className="min-w-[44px]">{MIcon} {totalPrice}</td>
                                    </tr>
                                    <tr className="flex">
                                        <td className="flex-1 py-1">_______</td>
                                        <td className="min-w-[44px]">{MIcon} {totalPrice - DealPrice}</td>
                                    </tr>
                                    <tr className="flex">
                                        <td className="flex-1 py-1">_______</td>
                                        <td className="min-w-[44px]">{MIcon} {DealPrice}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className=" border-b border border-dashed"></div>
                                    <div className="py-4 justify-center items-center flex flex-col gap-2">
                                        <p className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 0 0-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7ZM12.75 2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2h1.5V2Z" fill="#000"></path><path d="M22 9.81v1.04a2.06 2.06 0 0 0-.7-.12h-3.48c-1.55 0-2.94.86-3.63 2.24l-.75 1.48h-2.86l-.75-1.47a4.026 4.026 0 0 0-3.63-2.25H2.7c-.24 0-.48.04-.7.12V9.81C2 6.17 4.17 4 7.81 4h3.44v3.19l-.72-.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2 2c.01.01.02.01.02.02a.753.753 0 0 0 .51.2c.1 0 .19-.02.28-.06.09-.03.18-.09.25-.16l2-2c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.72.72V4h3.44C19.83 4 22 6.17 22 9.81Z" fill="#000"></path></svg> mail@vinaybajrangi.com</p>
                                        <p className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="#000" d="M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"></path></svg>  +91-9278665588</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setShowRecipt(!ShowRecipt)} className='w-full -mt-5 max-w-80 flex items-center justify-center gap-2 rounded-b-md bg-white px-4 py-2 text-sm font-semibold text-red-500 shadow-sm ring-1 ring-inset ring-red-500 hover:bg-gray-50 focus-visible:ring-transparent'>Close</button>
                        </div>
                        
                    :null
                : null}
                
                </main>
        </div>
    );
}

