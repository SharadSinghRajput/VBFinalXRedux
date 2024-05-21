"use client"; 
import React, { useEffect, useState } from 'react';
import {Search, Close} from '../../config/SvgConst'


export default function Menu() {
  const [query, setQuery] = useState('');
  const [openSearch, setOpenSearch] = useState(false);


  return (
    <form className='PopupSearchBody' >
        <input
            type="text"
            className='SearchInput'
            placeholder="Enter your search query"
            value={query}
        />
        <button className='searchButtonStyle font13' type="submit"><Search width={20} height={20} /> Search</button>
    </form>
  );
}
