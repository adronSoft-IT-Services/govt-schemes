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
                                    <Image src="/images/logo/logo.png" alt="image" width={190} height={25} />
                                </Link>
                                <a href="https://www.g20.org/en/" target='_blank' className="brand-logo flex justify-center align-center items-center h-[45px] px-2">
                                    <Image src="/images/di.png" alt="image" width={70} height={30} />
                                </a>
                                <a href="https://digitalindia.gov.in/" target='_blank' className="brand-logo flex justify-center align-center items-center h-[45px] px-2">
                                    <Image src="/images/g20_opt.png" alt="image" width={70} height={30} />
                                </a>
                            </div>
                            {/* <div className='basis-1/3 justify-center'>
                            <div className="min-w-[400px]">
                                <label for="icon" className="sr-only">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="icon" name="icon" className="py-2 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Search" />
                                </div>
                            </div>
                        </div> */}
                            <div className='basis-2/3 justify-end'>
                                <div className='w-full flex justify-end text-end'>
                                    <button className='py-2 px-4' data-hs-overlay="#search-modal">
                                        <svg width="28" height="28" viewBox="0 0 20 20">
                                            <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>
                                    <a href="#" className="btn btn-black bg-green-500 py-2 px-4">Sign In</a>
                                    <a href="#" className="btn btn-primary py-2 px-4 ms-2">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="search-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto DocSearch DocSearch-Container">
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        {/* search form starts */}
                        <div className="flex justify-between items-center">
                            <div className="relative w-full">
                                <input type="text" id="hs-leading-icon" name="hs-leading-icon" className="py-3 px-4 pl-11 block w-full border-0 shadow-sm rounded-xl text-sm focus:z-10 focus:border-0 focus:ring-0 dark:bg-slate-900 dark:border-0 dark:text-gray-400" />
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                                    <svg className="h-4 w-4 text-gray-400" width="16" height="16" viewBox="0 0 20 20">
                                        <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* search body */}

                        {/* <div className="p-4 overflow-y-auto border-t border-gray-200">
                            <p className="mt-1 text-gray-500 text-sm text-center dark:text-gray-400">
                                Search above
                            </p>
                        </div> */}
                        {/* search footer */}
                        {/* <div className="flex justify-end items-center gap-x-2 py-1 px-4 border-t border-gray-200">
                            <button type="button" className="hs-dropdown-toggle py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-slide-down-animation-modal">
                                Close
                            </button>
                        </div> */}
                        {/* search form ends */}
                    </div>
                </div>
            </div>
        </>
    )
}
