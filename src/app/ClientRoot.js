"use client"
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react';
// import { initializeApp } from 'firebase/app';
// const firebaseConfig = {
//     //...
// };
// const fireApp = initializeApp(firebaseConfig);

export const metadata = {
    title: 'Govt. Schemes'
  }
export default function ClientRoot({ children }) {

    React.useEffect(() => {
        import('preline')
    }, [])


    return (
        <>
            <Header />
            {children}
            <Footer />
            <div className="rt-mobile-menu-overlay"></div>
        </>
    )
}