import React from 'react'

export default function Header_old() {
    return (
        <header className="site-header  header-normal top-0 bg-white z-[9] rt-sticky">
            <div className="main-header py-8">
                <div className="container">
                    <div className=" flex items-center justify-between flex-wrap">
                        <a href="/" className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] ">
                            <img src="/images/logo/logo.svg" alt="image" />
                        </a>
                        <div className="flex items-center flex-1">
                            <div className="flex-1 main-menu  lg:relative   xl:mr-[74px] mr-6">
                                <ul className="menu-active-classes">
                                    <li className=" menu-item-has-children">
                                        <a href="#">Home</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/">Home One</a>
                                            </li>
                                            <li>
                                                <a href="/">Home Two</a>
                                            </li>
                                            <li>
                                                <a href="/">Home Three</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/">About 1</a>
                                            </li>
                                            <li>
                                                <a href="/">About 2</a>
                                            </li>
                                            <li>
                                                <a href="/">instructor 1</a>
                                            </li>
                                            <li>
                                                <a href="/">instructor 2</a>
                                            </li>
                                            <li>
                                                <a href="/">instructor Single</a>
                                            </li>
                                            <li>
                                                <a href="/">Event</a>
                                            </li>
                                            <li>
                                                <a href="/">Event single</a>
                                            </li>
                                            <li>
                                                <a href="/">404</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Courses</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/">courses</a>
                                            </li>
                                            <li>
                                                <a href="/">courses Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="/">Single-course</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="/">Blog</a>
                                            </li>
                                            <li>
                                                <a href="/">Full Width</a>
                                            </li>
                                            <li>
                                                <a href="/">Blog Standard</a>
                                            </li>
                                            <li>
                                                <a href="/">Single Blog</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/">Contacts</a>
                                    </li>
                                </ul>
                                <div className="lg:block hidden">
                                    <div className="border border-gray rounded-md  h-[46px] modal-search">
                                        <input type="text" className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0" placeholder="Search.." />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none flex space-x-[18px]">
                                <button type="button" className=" md:w-[56px] md:h-[56px] h-10 w-10 rounded bg-[#F8F8F8] flex flex-col items-center justify-center modal-trigger">
                                    <img src="/images/svg/search.svg" alt="" />
                                </button>
                                <div className=" block   lg:hidden">
                                    <button type="button" className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                                    menu-click">
                                        <iconify-icon icon="cil:hamburger-menu" rotate="180deg"></iconify-icon>
                                    </button>
                                </div>
                                <div className=" hidden lg:block">
                                    <a href="#" className="btn btn-primary py-[15px] px-8 ">Start Free Trial</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden block mt-4">
                        <div className="border border-gray rounded-md  h-[46px] modal-search">
                            <input type="text" className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0" placeholder="Search.." />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
