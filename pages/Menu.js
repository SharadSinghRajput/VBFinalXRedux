"use client"; 
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'
import { Fragment, useState, useEffect } from 'react'
import Image from 'next/image';
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { getLocalStorageItem, setLocalStorageItem } from '../config/localStorage';
import { MagnifyingGlassIcon, ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon,} from '@heroicons/react/24/outline'
import { MainMenu } from '../config/Constant'
import { MainMenuHindi } from '../config/ConstantHindi'
import Logo from "./assets/images/logo.png"
import { Cart, User } from '../config/SvgConst';
import { useSelector, useDispatch } from 'react-redux';


const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
  { name: 'Login', href: 'login' },
]
const userNavigationActive = [
  { name: 'Sign out', href: '#' },
]
const solutions = [
  { name: 'Analytics', href: '#' },
  { name: 'Engagement', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Automations', href: '#' },
  { name: 'Reports', href: '#' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContMenuBankComp({data}) {
  const router = useRouter();
  const LanguageBank = data?.language;
  const startSessionTrigger = useSelector(state => state.session.startSessionTrigger);
  const [SessionAction, setSessionAction] = useState(false)
  const [ContMenuBank, setContMenuBank] = useState(MainMenu)
  
  
  const GetSession = async () => {
    const SessionToken = getLocalStorageItem('tokenKey');
    if(SessionToken !== null) {
      setSessionAction(true)
    }else{
      setSessionAction(false)
    }
  };
  useEffect(()=>{
    if(startSessionTrigger){
      GetSession()
    }else{
      GetSession()
    }
  },[startSessionTrigger])

  // console.log("Language: ", LanguageBank);
  
  useEffect(() => {
    if (LanguageBank === "Hindi") {
      setContMenuBank(MainMenuHindi);
    }
  }, [MainMenuHindi, MainMenu, LanguageBank]);
    
    
    
    return (
      <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative flex h-16 justify-between z-50">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                    <Image src={Logo} alt="Logo" className="h-12 w-auto" />
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute-inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                {/* <div className='flex flex-row'>
                  <button
                    onClick={()=> router.push("cart")}
                    type="button"
                    className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500
                    focus:outline-none focus:ring-2 focus:ring-offset-2">
                    <Cart width={20} height={20} />
                  </button>
                </div> */}


                <button
                  type="button"
                  className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {/* <Image width={20} height={20} className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> */}
                      <User width={20} height={20} />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {SessionAction ?
                      <>
                          <Menu.Item >
                            {({ active }) => (
                              <button
                                onClick={()=>{
                                  router.push("dashboard")
                                  GetSession()
                                }}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700 w-full'
                                )}
                              >
                                Dashboard
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item >
                            {({ active }) => (
                              <button
                                onClick={()=>{
                                  localStorage.removeItem("tokenKey")
                                  router.push("/")
                                  GetSession()
                                }}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700 w-full'
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        
                      </>
                      :
                      <>
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <button
                                onClick={()=> router.push(item.href)}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700 w-full'
                                )}
                              >
                                {item.name}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </>
                      }
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
              {ContMenuBank ? <>
                {ContMenuBank.map((item, index) =>(
                    <Popover className="relative" key={index}>
                        {item.sublinks ? <>
                            <Popover.Button className="text-xs inline-flex items-center gap-x-1 font-medium leading-6 text-orange-800">
                                <span className='text-left'>{item.name}</span>
                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-min -translate-x-1/2 px-4">
                                    <div className="w-[250px] shrink rounded-xl bg-white p-4 text-sm font-medium leading-6 text-orange-800 shadow-lg ring-1 ring-gray-900/5">
                                        {item.sublinks.map((item, index) => (    
                                            <Popover className="relative" key={index}>
                                                {item.sublinksL2 ? <>
                                                    <div className='flex justify-between'>
                                                        <a  href={item.url} className='text-left text-xs'>{item.name}</a>
                                                        <Popover.Button className="text-xs inline-flex items-center gap-x-1 font-medium leading-6 text-orange-800">
                                                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="absolute left-[100%] z-10 mt-2 flex w-screen max-w-min -translate-x-1/2 px-4">
                                                        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-medium leading-6 text-orange-800 shadow-lg ring-1 ring-gray-900/5">
                                                            {item.sublinksL2.map((item, index) => (    
                                                                <Popover className="relative border-b border-b-orange-200" key={index}>
                                                                    {item.sublinksL3 ? <>

                                                                      <div className='flex justify-between'>
                                                                          <a  href={item.url} className='text-left text-xs'>{item.name}</a>
                                                                          <Popover.Button className="text-xs inline-flex items-center gap-x-1 font-medium leading-6 text-orange-800">
                                                                              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                                          </Popover.Button>
                                                                      </div>

                                                                        <Transition
                                                                            as={Fragment}
                                                                            enter="transition ease-out duration-200"
                                                                            enterFrom="opacity-0 translate-y-1"
                                                                            enterTo="opacity-100 translate-y-0"
                                                                            leave="transition ease-in duration-150"
                                                                            leaveFrom="opacity-100 translate-y-0"
                                                                            leaveTo="opacity-0 translate-y-1"
                                                                        >
                                                                            <Popover.Panel className="absolute left-[100%] z-10 mt-2 flex w-screen max-w-min -translate-x-1/2 px-4">
                                                                            <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-medium leading-6 text-orange-800 shadow-lg ring-1 ring-gray-900/5">
                                                                                {item.sublinksL3.map((item, index) => (    
                                                                                    <Popover className="relative " key={index}>
                                                                                        {item.sublinksL3 ? <>
                                                                                          <div className='flex justify-between'>
                                                                                              <a  href={item.url} className='text-left text-xs'>{item.name}</a>
                                                                                              <Popover.Button className="text-xs inline-flex items-center gap-x-1 font-medium leading-6 text-orange-800">
                                                                                                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                                                              </Popover.Button>
                                                                                          </div>

                                                                                            <Transition
                                                                                                as={Fragment}
                                                                                                enter="transition ease-out duration-200"
                                                                                                enterFrom="opacity-0 translate-y-1"
                                                                                                enterTo="opacity-100 translate-y-0"
                                                                                                leave="transition ease-in duration-150"
                                                                                                leaveFrom="opacity-100 translate-y-0"
                                                                                                leaveTo="opacity-0 translate-y-1"
                                                                                            >
                                                                                                <Popover.Panel className="absolute left-[100%] z-10 mt-2 flex w-screen max-w-min -translate-x-1/2 px-4">
                                                                                                <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-medium leading-6 text-orange-800 shadow-lg ring-1 ring-gray-900/5">
                                                                                                    {item.sublinksL3 ? <>
                                                                                                    </>:<></>}
                                                                                                </div>
                                                                                                </Popover.Panel>
                                                                                            </Transition>
                                                                                        </>:<>
                                                                                        <a key={item.name} href={item.url} className="no-underline text-xs inline-flex items-center gap-x-1 font-medium leading-6 text-orange-800 cursor-pointer">
                                                                                            {item.name}
                                                                                        </a>
                                                                                        </>}
                                                                                    </Popover>
                                                                                ))}
                                                                            </div>
                                                                            </Popover.Panel>
                                                                        </Transition>
                                                                    </>:<>
                                                                    <a key={item.name} href={item.url} className="no-underline text-xs inline-flex items-center gap-x-1  font-medium leading-6 text-orange-800 cursor-pointer">
                                                                        {item.name}
                                                                    </a>
                                                                    </>}
                                                                </Popover>
                                                            ))}
                                                        </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>:<>
                                                <a key={item.name} href={item.url} className="no-underline text-xs inline-flex items-center gap-x-1 font-medium leading-6 text-orange-800 cursor-pointer">
                                                    {item.name}
                                                </a>
                                                </>}
                                            </Popover>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>:<>
                            <a key={item.name} href={item.url} className="no-underline text-xs inline-flex items-center gap-x-1 font-medium leading-6 text-orange-800 cursor-pointer">
                                {item.name}
                            </a>
                        </>}
                    </Popover>
                ))}
                </>: <></>}
            </nav>
          </div>
          

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="space-y-1 px-2 pb-3 pt-2">
            {ContMenuBank ? <>
            {ContMenuBank.map((item, index) =>(
                    <Popover className="relative" key={index}>
                        {item.sublinks ? <>
                            <Popover.Button className="text-xs flex items-center justify-between w-[100%] gap-x-1  font-medium leading-6 text-orange-800">
                                <span>{item.name}</span>
                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="left-1/1 z-10 mt-2 flex w-[100%]">
                                    <div className="w-[100%] shrink rounded-xl bg-white p-4 text-sm font-medium leading-6 text-orange-800 shadow-lg ring-1 ring-gray-900/5">
                                        {item.sublinks.map((item, index) => (    
                                            <Popover className="relative" key={index}>
                                                {item.sublinksL2 ? <>
                                                    <Popover.Button className="text-xs flex items-center justify-between w-[100%] gap-x-1 font-medium leading-6 text-orange-800">
                                                        <span>{item.name}</span>
                                                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                    </Popover.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="left-1/1 z-10 mt-2 flex w-[100%]">
                                                        <div className="w-[100%] shrink rounded-xl bg-white p-4 text-sm font-medium leading-6 text-orange-800 shadow-lg ring-1 ring-gray-900/5">
                                                            {item.sublinksL2.map((item, index) => (    
                                                                <Popover className="relative" key={index}>
                                                                    {item.sublinksL3 ? <>
                                                                        <Popover.Button className="text-xs flex items-center justify-between w-[100%] gap-x-1 font-medium leading-6 text-orange-800">
                                                                            <span>{item.name}</span>
                                                                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </Popover.Button>

                                                                        <Transition
                                                                            as={Fragment}
                                                                            enter="transition ease-out duration-200"
                                                                            enterFrom="opacity-0 translate-y-1"
                                                                            enterTo="opacity-100 translate-y-0"
                                                                            leave="transition ease-in duration-150"
                                                                            leaveFrom="opacity-100 translate-y-0"
                                                                            leaveTo="opacity-0 translate-y-1"
                                                                        >
                                                                            <Popover.Panel className="left-1/1 z-10 mt-2 flex w-[100%]">
                                                                            <div className="w-[100%] shrink rounded-xl bg-white p-4 text-sm font-medium leading-6 text-orange-800 shadow-lg ring-1 ring-gray-900/5">
                                                                                {item.sublinksL3.map((item, index) => (    
                                                                                    <Popover className="relative" key={index}>
                                                                                        {item.sublinksL3 ? <>
                                                                                            <Popover.Button className="text-xs inline-flex justify-between items-center gap-x-1 font-medium leading-6 text-orange-800">
                                                                                                <span>{item.name}</span>
                                                                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                                                                            </Popover.Button>

                                                                                            <Transition
                                                                                                as={Fragment}
                                                                                                enter="transition ease-out duration-200"
                                                                                                enterFrom="opacity-0 translate-y-1"
                                                                                                enterTo="opacity-100 translate-y-0"
                                                                                                leave="transition ease-in duration-150"
                                                                                                leaveFrom="opacity-100 translate-y-0"
                                                                                                leaveTo="opacity-0 translate-y-1"
                                                                                            >
                                                                                                <Popover.Panel className="left-1/1 z-10 mt-2 flex w-[100%]">
                                                                                                <div className="w-[100%] shrink rounded-xl bg-white p-4 text-sm font-medium leading-6 text-orange-800 shadow-lg ring-1 ring-gray-900/5">
                                                                                                    {item.sublinksL3 ? <>
                                                                                                    </>:<></>}
                                                                                                </div>
                                                                                                </Popover.Panel>
                                                                                            </Transition>
                                                                                        </>:<>
                                                                                        <a key={item.name} onClick={() => router.push(item.url)} className="no-underline text-xs inline-flex items-center gap-x-1  font-medium leading-6 text-orange-800 cursor-pointer">
                                                                                            {item.name}
                                                                                        </a>
                                                                                        </>}
                                                                                    </Popover>
                                                                                ))}
                                                                            </div>
                                                                            </Popover.Panel>
                                                                        </Transition>
                                                                    </>:<>
                                                                    <a key={item.name} onClick={() => router.push(item.url)} className="no-underline text-xs inline-flex items-center gap-x-1  font-medium leading-6 text-orange-800 cursor-pointer">
                                                                        {item.name}
                                                                    </a>
                                                                    </>}
                                                                </Popover>
                                                            ))}
                                                        </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>:<>
                                                <a key={item.name} onClick={() => router.push(item.url)} className="no-underline text-xs inline-flex items-center gap-x-1 font-medium leading-6 text-orange-800 cursor-pointer">
                                                    {item.name}
                                                </a>
                                                </>}
                                            </Popover>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>:<>
                            <a key={item.name} onClick={() => router.push(item.url)} className="no-underline text-xs inline-flex items-center gap-x-1  font-medium leading-6 text-orange-800 cursor-pointer">
                                {item.name}
                            </a>
                        </>}
                    </Popover>
                ))}
                </>: <></>}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <Image width={20} height={20} className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user.name}</div>
                  <div className="text-sm font-medium text-gray-500">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


// text-xs flex items-center justify-between w-[100%] gap-x-1 text-sm font-medium leading-6 text-orange-800
// text-xs flex items-center justify-between w-[100%] gap-x-1 text-sm font-medium leading-6 text-orange-800