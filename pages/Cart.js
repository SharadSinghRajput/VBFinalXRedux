
"use client"; 
import Image from 'next/image';
import {useEffect, useState, useCallback} from 'react'
import { getLocalStorageItem, setLocalStorageItem } from '../config/localStorage';
import {API_KEY, API_NEW_URL, Domain_Secrete_Code} from '../config/config'
import { useDispatch, useSelector } from 'react-redux';
// import { AddProduct, RemoveProduct } from '@/redux/actions';
import { addProduct, removeProduct } from '../redux/ProductReducer'; 
import ShortDescription from './pageAssets/ShortDescription'
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import GIF from './assets/images/bin.gif';
import { toggleGetProduct } from '../redux/triggerSlice';

export default function Cart() {
    const router = useRouter();
    
    const products = useSelector(state => state.adProduct.products);
    console.log("Cart Page", products);
    const dispatch = useDispatch()
    const [productId, setProductId] = useState([])
    const [SessionAction, setSessionAction] = useState(false)
    const [UnderId, setUnderId] = useState(false)
    const [ProductRemoving, setProductRemoving] = useState(false)
    const [ProductRemoved, setProductRemoved] = useState("")
    const [ProductAdding, setProductAdding] = useState(false)
    const [cartId, setcartId] = useState("")
    
    useEffect(()=>{
        const GetUserDetails = async () => {
            const UserDetails = getLocalStorageItem('UserDataKey');
            if(UserDetails !== null) {
            setUnderId(UserDetails.id)
            }
        };
        GetUserDetails();
    },[])

    useEffect(()=>{
        const GetUserData = async () => {
            const SessionToken = getLocalStorageItem('tokenKey');
                if(SessionToken !== null) {
                }else{
                    router.push('login')
                }
            };
        GetUserData()
    },[])


    useEffect(() => {
        if(products){
            const updatedProductIds = products.map(item=> item.productId)
            setProductId(updatedProductIds)
        }
    }, [products]);

    
    const DataExist = (DataExistItem) => {
        const checkArray = (arr) => Array.isArray(arr) && arr.some(item => item === DataExistItem);
    
        if (checkArray(ProductRemoved)) {
            return false;
        }
    
        return checkArray(productId);
    };
    
    const DataExistMailList = (DataExistItem) => {
        if (Array.isArray(ProductRemoved)) {
            return ProductRemoved.some(item => item === DataExistItem);
        } else {
            return false;
        }
    };
    


    const [totalPrice, setTotalPrice] = useState(0);
    const [DealPrice, setDealPrice] = useState(0);
    const [MIcon, setMIcon] = useState("");

    useEffect(() => {
        if(products && products !== null && products[0] !== false){
            let totalPrice = 0;
            let DealPrice = 0;
            products.forEach(item => {
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
        }
    }, [products]);

    const handleRemoveProduct = async (ReportID) => {
        console.log("sfxkj", ReportID);
        setProductRemoving(ReportID);
        const dataToAdd = {
            apiKey: API_KEY,
            domainSecreteCode: Domain_Secrete_Code,
            user_id: UnderId,
            removeProduct: ReportID,
        };
        console.log(JSON.stringify(dataToAdd))
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
            console.log(data)
            if (data.success === true) {
                setProductRemoving(false);
                dispatch(removeProduct(ReportID));
                console.log("Product removed:", ReportID);
            }
            // if (data.data) {
            //     if (data.data && Array.isArray(data.data)) {
            //         data.data.forEach(item => {
            //             dispatch(addProduct(item));
            //             dispatch(toggleGetProduct());
            //         });
            //     } else {
            //         dispatch(addProduct(data.data));
            //         dispatch(toggleGetProduct());
            //     }
            // }
            setProductRemoving(false);
        } catch (error) {
            setProductRemoving(false);
        }
    };
    



      const handleAddProduct = async (item) => {
        setProductAdding(item.reportID)
        const dataToAdd = {
          apiKey: API_KEY, 
          domainSecreteCode: Domain_Secrete_Code,
          user_id: UnderId,
          page_id: item.reportID,
          quantity: 1,
          price: item.price[0].price,
        }
    
        const apiUrl = `${API_NEW_URL}cart-api.php`;
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToAdd),
          });
          const dataAdd = await response.json();
          if(dataAdd.success === true){
            setProductId(true)
            setProductAdding(false)
          }
          if(dataAdd.data){
            if(dataAdd.data.length > 0){
                dataAdd.data.map((item)=>{
                dispatch(addProduct(item));
              })
            }else{
              dispatch(addProduct(dataAdd.data));
            }
            setProductAdding(false)
          }
          dispatch(toggleGetProduct());
        } catch (error) {
          setProductAdding(false)
        }        
      };


      useEffect(()=>{
        const handleGetProduct = async () => {
          if(UnderId){
            const dataToAdd = {
              apiKey: API_KEY, 
              domainSecreteCode: Domain_Secrete_Code,
              user_id: UnderId,
              returnData: true
            }
            try {
              const apiUrl = `${API_NEW_URL}cart-api.php`;
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
                if(data.data && Array.isArray(data.data)){
                  data.data.map((item)=>{
                    dispatch(addProduct(item));
                  })
                }else{
                  dispatch(addProduct(data.data));
                }
              }
            } catch (error) {}
          }
        };
    
        handleGetProduct();
      },[UnderId])


    return (
        <div className="max-w-6xl mx-auto shadow-2xl bg-white p-10 mt-5 mb-5 rounded-lg">
            {!products || products.length === 0 ?
                <div className="text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        vectorEffect="non-scaling-stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                    </svg>
                    <h3 className="mt-2 text-sm font-semibold text-gray-900">No Items</h3>
                    <p className="mt-1 text-sm text-gray-500">Discover and add items for purchase.</p>
                </div>
            :null}
            {products && Array.isArray(products) && products.length > 0 ?
            <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                <section aria-labelledby="cart-heading" className="lg:col-span-7">
                    <h2 id="cart-heading" className="sr-only">services In your Cart</h2>
                    <ul role="list" className="">
                        {products.map((item, index) => (

                            DataExistMailList(item.productId) ? null :
                            item.productData ?
                                <li key={index} className={`px-3 ${index % 2 === 0 ? "bg-orange-100/20":"bg-orange-100/80"}`}>
                                    <div className='flex py-6'>
                                        <div className="flex-shrink-0">
                                            {item.productData ?
                                                item.productData.banner ?
                                                <Image
                                                    src={item.productData.banner}
                                                    alt={item.productData.question}
                                                    width={96}
                                                    height={40}
                                                    className="rounded-md aspect-video object-cover"
                                                    priority
                                                />
                                                :
                                                <div className='w-20 h-20 bg-orange-100 flex justify-center items-center rounded-lg'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                                </div>
                                            : null}
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                                            <div>
                                                <div className="flex justify-between gap-8">
                                                    {item.itemType ===  "Single Product" ? 
                                                        <h4 className="text-sm">
                                                            <button onClick={()=> router.push(item.productData.path)} className="font-medium text-gray-700 text-left hover:text-gray-800">{item.productData.question}</button>
                                                        </h4>
                                                     :
                                                        <h4 className="text-sm font-medium text-gray-700 text-left hover:text-gray-800">{item.productData.question}</h4>
                                                     }
                                                    <button
                                                    onClick={()=> handleRemoveProduct(item.productId)}
                                                    type="button" className="text-sm font-medium text-red-500">
                                                        {ProductRemoving === item.productId ? <>
                                                            <Image
                                                                src={GIF}
                                                                alt={GIF}
                                                                width={40}
                                                                height={40}
                                                                className="rounded-md mix-blend-multiply"
                                                                priority
                                                            />
                                                        </>:<>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                                                        </>}
                                                    </button>
                                                </div>
                                                <div className="flex justify-between mt-2">
                                                    <p className="text-lg font-bold text-gray-900">
                                                        {MIcon && MIcon}
                                                        {item.productData.repotPrice[0] && item.productData.repotPrice[0].price}
                                                    </p>
                                                </div>
                                                <div className='mt-2'>
                                                    {item.productData.answer ?
                                                        <ShortDescription descData={item.productData.answer} CharCount={100} />
                                                    :<></>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {item.productData.recommendedReport ? <>
                                    <div key={index} className='py-6 pt-0'>
                                        {(() => {
                                            const recommendedItem = item.productData.recommendedReport.find((report) => report.price[0] && !DataExist(report.reportID));
                                            return recommendedItem ? (
                                                <p className='font-semibold text-sm text-gray-700 text-left hover:text-gray-800'>Recommended Report</p>
                                            ) : null;
                                        })()}
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <tbody className="divide-y divide-gray-200">
                                                {item.productData.recommendedReport.map((item, index) => (
                                                    item.price[0] ?
                                                    DataExist(item.reportID) ? null :
                                                    <tr key={index}>
                                                        <td className="whitespace-nowrap py-2 text-xs text-gray-500">
                                                            <button onClick={()=> router.push(item.productData.path)}
                                                            >

                                                            </button>
                                                            {item.title}
                                                            </td>
                                                        <td className="whitespace-nowrap py-2 text-xs text-gray-500">
                                                            {item.price[0] && MIcon && MIcon}
                                                            {item.price[0] && item.price[0].dealPrice ? item.price[0].dealPrice : item.price[0].price}
                                                        </td>
                                                        <td className="whitespace-nowrap py-2 text-xs text-gray-500">
                                                        <button
                                                            onClick={() => handleAddProduct(item)}
                                                            type="button" className={`rounded-md text-xs font-bold  ${item.price[0] ? "text-orange-500" : "text-gray-500" }`}>
                                                                <span>{ProductAdding ===  item.reportID ? "Adding.." : "Add to cart"}</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    : null
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    </>:<></>}
                                </li>
                            :null
                        ))}
                    </ul>
                </section>

                <section
                    aria-labelledby="summary-heading"
                    className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                >
                    <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Price Details</h2>
                    <dl className="mt-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Price ({products.length} items)</dt>
                            <dd className="text-sm font-medium text-gray-900">{MIcon ? MIcon : null} {totalPrice}</dd>
                        </div>
                        {totalPrice - DealPrice === 0 ? <></>: <>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600"><span>Discount</span></dt>
                                <dd className="text-sm font-medium text-green-400">{MIcon ? MIcon : null} {totalPrice - DealPrice}</dd>
                            </div>
                        </>}
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                            <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                            <dd className="text-base font-medium text-gray-900">{MIcon ? MIcon : null} {DealPrice}</dd>
                        </div>
                        {totalPrice - DealPrice === 0 ? <></>: <>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-green-400">You will save {MIcon ? MIcon : null} {totalPrice - DealPrice} on this order</dt>
                            </div>
                        </>}
                    </dl>

                    <div className="mt-6">
                        <button
                            type="button"
                            onClick={()=> router.push("cart/place-order")}
                            className="w-full rounded-md border border-transparent bg-orange-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                            Place Order
                        </button>
                    </div>
                </section>
            </form>
            :null}
        </div>
    );
}