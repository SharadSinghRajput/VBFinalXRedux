"use client"; 
import Image from 'next/image';
import Logo from "../assets/images/logo.png"
import SearchComp from '../component/Search'
import React, { useEffect, useState } from 'react';
import {MainMenu} from '../../config/Constant'
import {Languages2, Search, Login, MenuBar, ArrowDown, Close} from '../../config/SvgConst'



export default function Menu() {
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  
const menuItems = [
  'Home',
  'Horoscope',
  'Horoscope 2024',
  'Astrology',
  'Life Problems',
  'Calculators',
  'Kundli',
  'Services',
  'Bajrangi Dhaam',
  'Blogs',
];

  return (
    <>
    <div className="MainMenuHeader">
      <div className="container">
        <div className="row rowforMobileView">
          <div className="col-sm-1">
            <Image src={Logo} alt="Logo" width={75} height={75} />
          </div>
          <div className={`col-md-9 MenuContent ${menuOpen ? 'ShowMenuInPhone' : ''}`}>
            <ul className="MenuUL">
              {MainMenu.map((item, index) =>(

                <li key={index} className='DefaultuliMenu LavelOneLi'>
                    {item.name === "Horoscope 2024" ? <span className="new-blink-horoscope">New</span>: <></>}
                    <a className='MainMenuLink font13' href='#'>{item.name}{item.sublinks ? <><ArrowDown width={15} height={15} /></>:<></>}</a>
                    {item.sublinks ? <>
                      <ul className='DefaultulMenu levelTwo'>
                        {item.sublinks.map((item, index) =>(
                          <li key={index} className='DefaultuliMenu LavelTwoLi'>
                            <a className='subMenuLink font13' href='#'>{item.name} {item.sublinksL2 ? <><ArrowDown width={15} height={15} /></>:<></>}</a>
                            {item.sublinksL2 ? <>
                              <ul className='DefaultulMenu levelThree'>
                                {item.sublinksL2.map((item, index) =>(
                                  <li key={index} className='DefaultuliMenu LavelThreeLi'>
                                    <a className='subMenuLink font13' href='#'>{item.name} {item.sublinksL3 ? <><ArrowDown width={15} height={15} /></>:<></>}</a>
                                      {item.sublinksL3 ? <>
                                        <ul className='DefaultulMenu levelFour'>
                                          {item.sublinksL3.map((item, index) =>(
                                            <li key={index} className='DefaultuliMenu LavelFourLi'><a className='subMenuLink font13' href='#'>{item.name}</a></li>
                                          ))}
                                        </ul>
                                      </>:<></>}

                                  </li>
                                ))}
                              </ul>
                            </>:<></>}

                          </li>
                        ))}
                      </ul>
                    </>:<></>}

                </li>

              ))}
            </ul>
          </div>
          <div className="col-sm-2 buttonAreaContentright">
            <div className='MenuRightBTNContainer'>
              <button onClick={()=> setOpenSearch(true)}>
                <Search width={20} height={20}/>
              </button>
              <button className='MenuRightBTN'>
                <Login width={20} height={20}/>
                <span>Login</span>
              </button>
              <button className='MenuRightBTN'><Languages2 width={25} height={25} /></button>
              <button className='MenuBarBTN' onClick={()=> setMenuOpen(!menuOpen)}>
                {menuOpen ? <Close width={20} height={20} /> : <MenuBar width={20} height={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {openSearch ? <>
      <div className={`mainPopop`}>
          <div className='insidePop'>
              <div className='PopupHeader'>
                  <p className='SearchHeaderTitle'>Search </p>
                  <button onClick={()=> setOpenSearch(false)}>
                      <Close width={20} height={20} />
                  </button>
              </div>
              <SearchComp />
          </div>
      </div>
    </>:<></>}
    </>
  );
}
