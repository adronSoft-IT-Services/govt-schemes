import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <>
            <header className="site-header  header-normal top-0 bg-white z-[9] rt-sticky">
                <div className="main-header py-8">
                    <div className="container">
                        <div className="flex">
                            <div className='basis-1/3 justify-start flex'>
                                <Link href="/" className="brand-logo">
                                    <Image src="/images/emblem-black.svg" alt="image" width={25} height={45} />
                                </Link>
                                <Link href="/" className="brand-logo flex justify-center align-center items-center h-[45px] px-2">
                                    <Image src="/images/logo/logo.png" alt="image" width={190} height={25} className="h-auto w-auto" />
                                </Link>
                                <Link href="https://www.g20.org/en/" target='_blank' className="brand-logo flex justify-center align-center items-center h-[45px] px-2">
                                    <Image src="/images/di.png" alt="image" width={70} height={30} className="h-auto w-auto" />
                                </Link>
                                <Link href="https://digitalindia.gov.in/" target='_blank' className="brand-logo flex justify-center align-center items-center h-[45px] px-2">
                                    <Image src="/images/g20_opt.png" alt="image" width={70} height={30} className="h-auto w-auto" />
                                </Link>
                            </div>
                            <div className='basis-2/3 justify-end'>
                                <div className='w-full flex justify-end text-end'>
                                    <Link className='py-2 px-4' href="/find">
                                        <svg width="28" height="28" viewBox="0 0 20 20">
                                            <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </Link>
                                    <button className="btn btn-black bg-green-500 py-2 px-4">Sign In</button>
                                    <button className="btn btn-primary py-2 px-4 ms-2">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
