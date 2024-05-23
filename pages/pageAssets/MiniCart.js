
"use client"; 
import Image from "next/image";
import {useEffect, useState} from 'react'
import {API_KEY, API_NEW_URL, Domain_Secrete_Code} from '../../config/config'
import { getLocalStorageItem } from '../../config/localStorage';
import { useDispatch, useSelector } from 'react-redux';
// import { AddProduct } from '@/redux/actions';
import { useRouter } from 'next/navigation'
import { addProduct, removeProduct } from '../../redux/ProductReducer'; 
import { toggleGetProduct } from '../../redux/triggerSlice';



export default function MiniCart({Design}) {

  const router = useRouter();
  const products = useSelector(state => state.adProduct.products);
  const getProductTrigger = useSelector(state => state.trigger.getProductTrigger);
  const dispatch = useDispatch()
  

  
  const [SessionAction, setSessionAction] = useState(false)

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





  const [UserId, setUnderId] = useState(false)
  
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
    const handleGetProduct = async () => {
      if(UserId){
        const dataToAdd = {
          apiKey: API_KEY, 
          domainSecreteCode: Domain_Secrete_Code,
          user_id: UserId,
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

    if(getProductTrigger){
      handleGetProduct();
    }else{
      handleGetProduct();
    }
  },[UserId, getProductTrigger])


  return (
    <>
    {SessionAction ?
      <div className={`fixed bottom-12 right-36 ${Design === "cart" || Design === "place-order" || Design === "order-details" ? "w-[0] overflow-hidden" : "w-[500px]"}`}>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 xl:gap-x-8 shadow-xl">
          {products ? <>
            {products[products.length - 1] ? <>
              <li className="overflow-hidden rounded-xl border border-orange-200">

                <div className="flex items-center justify-between gap-x-4 border-b border-gray-900/5 bg-white p-4">
                  <span className="w-10 h-10 bg-orange-100/50 rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  </span>
                  <div className="flex-1">
                    <p className="text-sm">{products[products.length - 1].productData.question} + <span className="font-bold">{products.length - 1 > 0 ?  products.length - 1 + " more" : null}</span></p>
                  </div>
                  <button
                  onClick={()=> router.push('cart')}
                  type="button" className="rounded-md bg-orange-500 flex justify-center items-center gap-3 w-24 px-3.5 py-1.5 text-sm font-normal text-white ">
                      <span>Go to cart</span>
                    </button>
                </div>
              </li>
            </>:<></>}
          </>:<></>}
        </ul>
      </div>
    : null}
    </>
  );
}
