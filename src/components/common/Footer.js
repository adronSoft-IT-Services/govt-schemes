import Image from 'next/image'
import React from 'react'

const footerLogo = '/images/logo/footer-logo-2.svg';

const socialIcons = {
    twitter: '/images/icon/tw.svg',
    facebook: '/images/icon/fb.svg',
    pinterest: '/images/icon/pn.svg',
    instagram: '/images/icon/ins.svg',
};

const instagramPostsImage = [
    '/images/all-img/ins-1.png',
    '/images/all-img/ins-2.png',
    '/images/all-img/ins-3.png',
    '/images/all-img/ins-4.png',
    '/images/all-img/ins-5.png',
    '/images/all-img/ins-6.png',
];

export default function Footer() {
    return (
        <footer>
            <div
                className="relative z-[1] mx-auto max-w-[1170px] rounded-md bg-[url('/images/all-img/section-bg-3.png')] bg-cover bg-center bg-no-repeat p-20">
                <div className="items-center space-x-4 space-y-5 text-center lg:flex lg:space-y-0 lg:text-left">
                    <div className="flex-1">
                        <div className="max-w-[590px] text-3xl font-bold text-white md:text-3xl lg:text-[44px] lg:leading-[61px]">
                            Education Is About Creating Leaders For Tomorrow
                        </div>
                    </div>
                    <div className="flex-none">
                        <button className="btn bg-white font-bold text-black">
                            Register Today
                        </button>
                    </div>
                </div>
            </div>
            <div className="-mt-[150px] bg-[url('/images/all-img/section-bg-10.png')] bg-cover bg-center bg-no-repeat pt-[150px]">
                <div className="section-padding container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-3">
                            <div className="lg:max-w-[270px]">
                                <a href="#" className="mb-10 block">
                                    {/* <img src="/images/logo/footer-logo-2.svg" alt="" /> */}
                                    {/* <Image src={footerLogo} alt="logo" width={132} height={27} /> */}
                                    <Image src="/images/logo/logo.png" alt="image" width={300} height={40} />
                                </a>
                                <p>
                                    Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius
                                    enim eros elementum tristique. Duis cursus.
                                </p>
                                <ul className="flex space-x-4 pt-8">
                                    <li>
                                        <a href="#" className="flex h-10 w-10">
                                            <Image src={socialIcons.facebook} alt="facebook" width={40} height={40} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex h-10 w-10">
                                            <Image src={socialIcons.twitter} alt="twitter" width={40} height={40} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex h-10 w-10">
                                            <Image src={socialIcons.pinterest} alt="pinterest" width={40} height={40} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex h-10 w-10">
                                            <Image src={socialIcons.instagram} alt="instagram" width={40} height={40} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-6">
                            <div className="ml-auto xl:w-[80%]">
                                <div className="flex space-x-[80px]">
                                    <div className="flex-1 lg:flex-none">
                                        <h4 className="mb-8 text-2xl font-bold text-black">Links</h4>
                                        <ul className="list-item space-y-5">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">Courses</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                    <div className="flex-1 lg:flex-none">
                                        <h4 className="mb-8 text-2xl font-bold text-black">Legal</h4>
                                        <ul className="list-item space-y-5">
                                            <li><a href="#">Legal</a></li>
                                            <li><a href="#">Tearms of Use</a></li>
                                            <li><a href="#">Tearm & Condition</a></li>
                                            <li><a href="#">Payment Method</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-footer col-span-12 lg:col-span-6 xl:col-span-3">
                            <h4 className="mb-8 text-2xl font-bold text-black">Instagram Post</h4>
                            <div className="grid grid-cols-3 gap-4">

                                {
                                    instagramPostsImage.map((image, index) => {
                                        return (
                                            <div key={index}>
                                                <a href="#" className="group relative block h-20 w-full rounded">
                                                    <Image src={image} alt="instagram" width={149} height={80} className="block h-full w-full rounded object-cover" />
                                                    <div
                                                        className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                                                        <span className="scale-0 transition-all duration-150 group-hover:scale-100"><iconify-icon
                                                            icon="akar-icons:instagram-fill"></iconify-icon></span>
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>

                <div className="container border-t border-[#E9D4D0] py-8 text-center text-base">
                    &copy; Copyright 2022 | Govt Schemes | All Rights
                    Reserved
                </div>
            </div>
        </footer>
    )
}
