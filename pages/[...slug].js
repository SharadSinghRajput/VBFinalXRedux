

import {useEffect, useState } from "react"
import { useRouter } from 'next/router';
import DailyHoroscope from './HoroscopeDetail';
import SomethingWentWrong from './SomethingWentWrong';
import PageNotFound from './PageNotFound';
import DefaultPage from './DefaultPage';
import {API_KEY, Domain_Secrete_Code, API_NEW_URL,} from '../config/config'
import MiniCart from './pageAssets/MiniCart'
import LanguageSelector from './pageAssets/languageSelector'
import Home from "./Home"
import AllSideBar from "./AllSideBar"
import Menu from "./Menu"
import Footer from "./Footer"
import FooterHindi from "./FooterHindi"
import PopularReports from "./PopularReports"



import Page from './index';



export default function DynamicPage() {
  const router = useRouter();
  const { slug }  = router.query;
  const [apiNotRes, setApiNotRes] = useState(false)
  const [UrlNotAvail, setUrlNotAvail] = useState(false)
  const [CompNotAvail, setCompNotAvail] = useState(false)
  const [DefaultData, setDefaultData] = useState("")
  const [UrdData, setUrdData] = useState("")
  const [PageComponent, setPageComponent] = useState(null);
  const [DataComponentWise, setDataComponentWise] = useState("")
  const [ShowMiniCartStyle, setShowMiniCartStyle] = useState(false)
  console.log(DataComponentWise);
  
  useEffect(() => {
    
    if (slug) {
      const AllSlug = router.asPath;
      const lastValOfURL = slug[slug.length - 1];
      const modifiedSlug = AllSlug.substring(1);
      setShowMiniCartStyle(lastValOfURL);
      // if(lastValOfURL === "cart" || lastValOfURL === "place-order"){
      // }
      // const lastValOfURL = slug[slug.length - 1];
      // const lastValOfURLWithoutExtension = lastValOfURL.replace('.php', '');
      
      const FetchUrls = async () => {
        setPageComponent(null)
        setDataComponentWise("")
        setCompNotAvail(false)
        setDefaultData("")
        setUrlNotAvail(false)
        setApiNotRes(false)
        const data = {
          "apiKey": "Sd_12547455dhseunhT_ksdfln",
          "domainSecreteCode": Domain_Secrete_Code,
          "path": decodeURIComponent(modifiedSlug),
        }
        
        const apiUrl = "https://www.aapkikismat.com/report-detail-tppm-path-api-test.php";
        try {
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const responseData = await response.json();
          console.log(responseData);
          if (responseData.success === true) {
            if (responseData.data) {
              if(responseData.data[0].componentToShow){
                const PageModule = await import(`./${responseData.data[0].componentToShow}`);
                const component = PageModule.default;
                setPageComponent(() => component);
                setDataComponentWise(responseData.data[0])
              }else{
                setCompNotAvail(true)
                setDefaultData(responseData.data[0])
              }
            } else {
              setUrlNotAvail(true);
            }
          } else {
            setApiNotRes(true);
          }

          // if (responseData.success === true) {
          //   if (responseData.data) {
          //     setUrdData(responseData.data);
          //   } else {
          //     setUrlNotAvail(true);
          //   }
          // } else {
          //   setApiNotRes(true);
          // }

          
        } catch (error) {
          setApiNotRes(true);
        }
      };
      FetchUrls();
    }
  }, [slug]);

  
  if (!slug) {
    return (
      <Page>
        
        <div role="status" className='min-h-screen w-full flex justify-center items-center' >
          <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </Page>
    )
  }

  if (apiNotRes === true) {
    return (
      <Page>
        <Menu />
        <SomethingWentWrong />
        <Footer />
      </Page>
    );
  }
  
  else if(UrlNotAvail === true){
    return (
      <Page>
        <Menu />
        <PopularReports />
        <PageNotFound />
        <Footer />
      </Page>
    );
  }
  
  else if(PageComponent){
    return (
      <Page>
        <Menu data={DataComponentWise} />
        {DataComponentWise?.language ? (
            <PopularReports language={DataComponentWise?.language} />
          ) : (
            <PopularReports />
          )}
        <PageComponent data={DataComponentWise} />
        <MiniCart Design={ShowMiniCartStyle} />
        <AllSideBar />
        <LanguageSelector data={DataComponentWise} />
        {DataComponentWise ? (
          DataComponentWise.language === "Hindi" ? (
            <FooterHindi data={DataComponentWise} />
          ) : (
            <Footer data={DataComponentWise} />
          )
        ) : (
          <Footer data={DataComponentWise} />
        )}
      </Page>
      )
    }
      
    else if(CompNotAvail === true){
      return (
        <Page>
          <Menu data={DefaultData} />
          <PopularReports />
          <DefaultPage data={DefaultData} />
          <AllSideBar />
          <LanguageSelector data={DefaultData} />
          {DefaultData ? (
            DefaultData.language === "Hindi" ? (
              <FooterHindi data={DefaultData} />
            ) : (
              <Footer data={DefaultData} />
            )
          ) : (
            <Footer data={DefaultData} />
          )}
        </Page>

      );
    }
 
  else {
    return (
      <Page>
        <div role="status" className='min-h-screen w-full flex justify-center items-center' >
          <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </Page>
    );
  }

}
