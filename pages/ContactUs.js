import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  MinusSmallIcon,
  PhoneIcon,
  PlusSmallIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Faqs } from "../config/Faqs";
import { API_KEY, Domain_Secrete_Code } from "../config/config";
import { getLocalStorageItem, setLocalStorageItem } from "../config/localStorage";
import { useRouter } from 'next/router';

export default function FaqSection({data}) {
    const router = useRouter();
    console.log(data)
  const lang = data?.language
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Message, setMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Loding, setLoding] = useState(false);
  const [UnderId, setUnderId] = useState(false);

  useEffect(() => {
    const GetUserDetails = async () => {
      const UserDetails = getLocalStorageItem("UserDataKey");
      if (UserDetails !== null) {
        setUnderId(UserDetails.id);
      }
    };
    GetUserDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoding(true);

    let errorMessages = [];
    if (Name === ""){
      if(lang === "Hindi"){
        errorMessages.push("कृपया अपना नाम दर्ज करें।");
      }else{
        errorMessages.push("Could you please enter your name?");
      }
    }
      
    if (Mobile === ""){
      if(lang === "Hindi"){
        errorMessages.push("क्या आप अपना फोन नंबर दर्ज कर सकते हैं?");
      }else{
        errorMessages.push("Can you enter your phone number?");
      }
    }
    if (Email === ""){
      if(lang === "Hindi"){
        errorMessages.push("कृपया अपना ईमेल पता प्रदान करें।");
      }else{
        errorMessages.push("Please provide your email address.");
      }
    }
    if (Message === ""){
      if(lang === "Hindi"){
        errorMessages.push("आपका क्या प्रश्न है??");
      }else{
        errorMessages.push("What question do you have?");
      }
    }

    setErrorMessage(errorMessages);
    if (errorMessages.length > 0) {
      setLoding(false);
      return;
    }
    console.log("step 2");

    const requestData = {
      apiKey: API_KEY,
      domainSecreteCode: Domain_Secrete_Code,
      name: Name,
      email: Email,
      mobile: Mobile,
      query: Message,
    };

    const apiUrl = `https://www.aapkikismat.com/vb-contact-api.php`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      console.log("sdfcvxioknm", data);
      if (data.success === true) {
        setLoding(false);
        if(lang === "Hindi"){
          alert("धन्यवाद आपके संदेश के लिए! हम शीघ्र ही आपसे संपर्क करेंगे।") 
        }else{
          alert("Thank you for your message! We'll get back to you shortly.") 
        }
        if(lang === "Hindi"){
          router.push("/hindi/contact-us.php")
        }else{
          router.push("/contact-us.php")
        }
      }else if(data.message === "Similar Data already exists"){
        if(lang === "Hindi"){
          alert("इसी तरह का संदेश पहले से मौजूद है. कृपया नया डेटा दर्ज करें.")
        }else{
           alert("Similar message already exists. Please enter new data.")
        }

      }else{
        setLoding(false);
      }
    } catch (error) {
      console.log(error);
      setLoding(false);
    }
  };
  return (
    <div className="mx-auto max-w-6xl shadow-2xl p-5 mb-5 rounded-lg">
      <div className="relative isolate bg-orange-50 container">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 lg:static lg:px-8 lg:py-5">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-50 w-full overflow-hidden ring-1 ring-white/5">
                <div
                  className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                  aria-hidden="true">
                  <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                    style={{
                      clipPath:
                        "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                    }}
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-black">{lang === "Hindi" ? "संपर्क करें" : "Contact Us"}</h2>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon className="h-7 w-6 text-black" aria-hidden="true" />
                  </dt>
                  <dd className="text-gray-950">M-22, Sector-66, Noida, Uttar Pradesh-201301</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="h-7 w-6 text-black" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-orange-500 text-gray-950" href="tel:+91 9278555588">
                      +91 9278555588
                    </a>
                    <a className="hover:text-orange-500 text-gray-950" href="tel:+91 9278665588">
                      ,+91 9278665588
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-black" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-orange-500 text-gray-950"
                      href="mailto:mail@vinaybajrangi.com">
                      mail@vinaybajrangi.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="px-20 py-20">
              <Image
                width={150}
                height={150}
                src="https://www.vinaybajrangi.com/asset_frontend/img/logo.png"
                alt="Logo"
                className="w-auto bg-cover"
              />
            </div>
          </div>
          <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-5">
            {ErrorMessage.length > 0 ? (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex w-full">
                  <div className="flex-shrink-0">
                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-sm font-medium text-red-800">
                      {lang == "Hindi" ?<>आपकी सबमिशन में {ErrorMessage.length} त्रुटियाँ थीं।</>:<>There were {ErrorMessage.length} errors with your submission</>}
                      
                      
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <ul role="list" className="list-disc space-y-1 grid grid-cols-1 ml-5">
                        {ErrorMessage.map((item, index) => (
                          <li className="col-span-1" key={index}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-black">
                      {lang === "Hindi" ? "आपका नाम": "Name"}
                    
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-black">
                    {lang === "Hindi" ? "आपका ईमेल": "Email"}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-black">
                      {lang === "Hindi" ? "आपका नंबर": "Phone number"}
                    
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      value={Mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-black">
                    {lang === "Hindi" ? "यहाँ अपना वर्णन करें...": "Message"}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={Message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-5">
                {Loding ?
                <div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                : <></>}
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
                  Submit
                </button>
                
              </div>
            </div>
          </form>
        </div>
        <div className="-mt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9374681264085!2d77.37607101505012!3d28.601652692228765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57d79904367%3A0x2f94ff1146a7b30e!2sDr.%20Vinay%20Bajrangi!5e0!3m2!1sen!2sin!4v1657187354638!5m2!1sen!2sin"
            width="100%"
            height="380"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="bg-orange-50 py-8 container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-4xl  divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 w-2/4">
              {lang === "Hindi" ? "अक्सर पूछे जाने वाले प्रश्नों" : "Frequently asked questions"}
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {Faqs.map((faq, index) => (
                <Disclosure as="div" key={index} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          {lang === "Hindi" ?
                          <span className="text-base font-semibold leading-7 ">{faq.HindiQuestion}</span>
                          :
                          <span className="text-base font-semibold leading-7 ">{faq.question}</span>
                          }
                          <span className="ml-6 flex h-7 items-center ">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        {lang === "Hindi" ?
                        <p className="text-base leading-7 text-gray-600">{faq.HindiAnswer}</p>
                        :
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                        }
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
