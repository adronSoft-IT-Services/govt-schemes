"use client"
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'
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