// components/Layout.js

import Footer from "../Footer"
import Menu from "../Menu"
import PopularReports from "../PopularReports"
import SideBar from '../AllSideBar'
import MiniCart from '../pageAssets/MiniCart'
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';


const Layout = ({ children }) => {
  const router = useRouter();
  const { slug }  = router.query;
  const lastValOfURL = slug[slug.length - 1];
  return (
    
      <div className="flex flex-col min-h-screen">
        <Menu />
        {lastValOfURL ? null : <PopularReports />}
        <main className="flex-grow">{children}</main>
        <Footer />
        <SideBar />
        <MiniCart />
      </div>
    
  );
};

export default Layout;