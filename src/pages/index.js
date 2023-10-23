// import Image from 'next/image'

import BrandLogos from "@/components/_pages/_homepage/BrandLogos";
import HeroSection from "@/components/_pages/_homepage/HeroSection";
import SchemesNavigator from "@/components/sections/SchemesNavigator";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* dark brands section */}
      <BrandLogos />

      {/* about us */}
      <div className="about-area section-padding-top pb-16 relative z-[1]">
        <div className=" absolute right-[7%] top-[20%] z-[-1] hidden xl:block"><img src="/images/icon/h.svg" alt="" />
        </div>
        <div className="container">
          <div className="grid grid-cols-12 xl:gap-[70px] lg:gap-10 gap-6">
            <div className="xl:col-span-7 lg:col-span-6 col-span-12">
              <img src="/images/all-img/about5.png" alt="" />
            </div>
            <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
              <div className="mini-title">About Govt. Schemes</div>
              <h4 className="column-title ">
                Anoyone can Search, Apply from &nbsp;
                <span className="shape-bg">
                  Anywhere</span>
              </h4>
              <div>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
              </div>
              <ul className=" list-item space-y-6 pt-8">
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                      <img src="/images/icon/video.svg" alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" text-xl mb-1">All Classes Video Provided</h4>
                    <div>There are many variations of passages of the Lorem Ipsum available.</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                      <img src="/images/icon/web-white.svg" alt="" className=" " />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" text-xl mb-1">Online Class From Expert Teachers</h4>
                    <div>There are many variations of passages of the Lorem Ipsum available.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Schemes */}
      <SchemesNavigator />

      {/* Team Member */}
      <div className="section-padding">
        <div className="container">
          <div className="text-center">
            <div className="mini-title">Team Member</div>
            <div className="column-title ">
              Our Expert
              <span className="shape-bg">Instructors</span>
            </div>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-7 pt-10">


            <div className=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
              <div className=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
                <img src="/images/all-img/team5.png" alt="" className=" w-full h-full object-cover rounded-t-md " />
                <div className=" absolute left-0 top-0 w-full h-full flex flex-col justify-end items-end">
                  <button type="button" className="h-12 w-12 bg-secondary text-white rounded-tl-md flex flex-col items-center justify-center explore-button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.01" width="18" height="18" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 2.25C9.62132 2.25 10.125 2.75368 10.125 3.375V7.875H14.625C15.2463 7.875 15.75 8.37868 15.75 9C15.75 9.62132
                                      15.2463 10.125 14.625 10.125H10.125V14.625C10.125 15.2463 9.62132 15.75 9 15.75C8.37868 15.75 7.875 15.2463 7.875
                                      14.625V10.125H3.375C2.75368 10.125 2.25 9.62132 2.25 9C2.25 8.37868 2.75368 7.875 3.375 7.875H7.875V3.375C7.875 2.75368
                                      8.37868 2.25 9 2.25Z" fill="white" />
                    </svg>
                  </button>
                  <ul className=" justify-center bg-primary rounded-tl-md transition-all duration-100 social-explore ">
                    <li>
                      <button className=" text-xl leading-[1] text-white  flex h-12 w-12 items-center justify-center">
                        <iconify-icon icon="bxl:facebook"></iconify-icon>
                      </button>
                    </li>
                    <li>
                      <button className=" text-xl leading-[1] text-white flex h-12 w-12 items-center justify-center">
                        <iconify-icon icon="bxl:twitter"></iconify-icon>
                      </button>
                    </li>
                    <li>
                      <button  className="  text-xl leading-[1]  flex h-12 w-12 items-center justify-center text-white ">
                        <iconify-icon icon="bxl:linkedin"></iconify-icon>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course-content p-6">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">Erics Widget</h4>
                <div>UI/UX Designer</div>
              </div>
            </div>

            <div className=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
              <div className=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
                <img src="/images/all-img/team6.png" alt="" className=" w-full h-full object-cover rounded-t-md" />
                <div className=" absolute left-0 top-0 w-full h-full flex flex-col justify-end items-end">
                  <button type="button" className="h-12 w-12 bg-secondary text-white rounded-tl-md flex flex-col items-center justify-center explore-button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.01" width="18" height="18" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 2.25C9.62132 2.25 10.125 2.75368 10.125 3.375V7.875H14.625C15.2463 7.875 15.75 8.37868 15.75 9C15.75 9.62132
                                      15.2463 10.125 14.625 10.125H10.125V14.625C10.125 15.2463 9.62132 15.75 9 15.75C8.37868 15.75 7.875 15.2463 7.875
                                      14.625V10.125H3.375C2.75368 10.125 2.25 9.62132 2.25 9C2.25 8.37868 2.75368 7.875 3.375 7.875H7.875V3.375C7.875 2.75368
                                      8.37868 2.25 9 2.25Z" fill="white" />
                    </svg>
                  </button>
                  <ul className=" justify-center bg-primary rounded-tl-md transition-all duration-100 social-explore ">
                    <li>
                      <button  className=" text-xl leading-[1] text-white  flex h-12 w-12 items-center justify-center">
                        <iconify-icon icon="bxl:facebook"></iconify-icon>
                      </button>
                    </li>
                    <li>
                      <button  className=" text-xl leading-[1] text-white flex h-12 w-12 items-center justify-center">
                        <iconify-icon icon="bxl:twitter"></iconify-icon>
                      </button>
                    </li>
                    <li>
                      <button  className="  text-xl leading-[1]  flex h-12 w-12 items-center justify-center text-white ">
                        <iconify-icon icon="bxl:linkedin"></iconify-icon>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course-content p-6">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">Daniel Steven</h4>
                <div>UI/UX Designer</div>
              </div>
            </div>

            <div className=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
              <div className=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
                <img src="/images/all-img/team7.png" alt="" className=" w-full h-full object-cover rounded-t-md " />
                <div className=" absolute left-0 top-0 w-full h-full flex flex-col justify-end items-end">
                  <button type="button" className="h-12 w-12 bg-secondary text-white rounded-tl-md flex flex-col items-center justify-center explore-button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.01" width="18" height="18" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 2.25C9.62132 2.25 10.125 2.75368 10.125 3.375V7.875H14.625C15.2463 7.875 15.75 8.37868 15.75 9C15.75 9.62132
                                      15.2463 10.125 14.625 10.125H10.125V14.625C10.125 15.2463 9.62132 15.75 9 15.75C8.37868 15.75 7.875 15.2463 7.875
                                      14.625V10.125H3.375C2.75368 10.125 2.25 9.62132 2.25 9C2.25 8.37868 2.75368 7.875 3.375 7.875H7.875V3.375C7.875 2.75368
                                      8.37868 2.25 9 2.25Z" fill="white" />
                    </svg>
                  </button>
                  <ul className=" justify-center bg-primary rounded-tl-md transition-all duration-100 social-explore ">
                    <li>
                      <button  className=" text-xl leading-[1] text-white  flex h-12 w-12 items-center justify-center">
                        <iconify-icon icon="bxl:facebook"></iconify-icon>
                      </button>
                    </li>
                    <li>
                      <button  className=" text-xl leading-[1] text-white flex h-12 w-12 items-center justify-center">
                        <iconify-icon icon="bxl:twitter"></iconify-icon>
                      </button>
                    </li>
                    <li>
                      <button  className="  text-xl leading-[1]  flex h-12 w-12 items-center justify-center text-white ">
                        <iconify-icon icon="bxl:linkedin"></iconify-icon>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course-content p-6">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">Nelson Decosta</h4>
                <div>UI/UX Designer</div>
              </div>
            </div>

            <div className=" bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   ">
              <div className=" h-[270px] rounded-t-md  relative mx-auto  overflow-hidden">
                <img src="/images/all-img/team8.png" alt="" className=" w-full h-full object-cover rounded-t-md" />
                <div className=" absolute left-0 top-0 w-full h-full flex flex-col justify-end items-end">
                  <button type="button" className="h-12 w-12 bg-secondary text-white rounded-tl-md flex flex-col items-center justify-center explore-button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.01" width="18" height="18" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 2.25C9.62132 2.25 10.125 2.75368 10.125 3.375V7.875H14.625C15.2463 7.875 15.75 8.37868 15.75 9C15.75 9.62132
                                      15.2463 10.125 14.625 10.125H10.125V14.625C10.125 15.2463 9.62132 15.75 9 15.75C8.37868 15.75 7.875 15.2463 7.875
                                      14.625V10.125H3.375C2.75368 10.125 2.25 9.62132 2.25 9C2.25 8.37868 2.75368 7.875 3.375 7.875H7.875V3.375C7.875 2.75368
                                      8.37868 2.25 9 2.25Z" fill="white" />
                    </svg>
                  </button>
                  <ul className=" justify-center bg-primary rounded-tl-md transition-all duration-100 social-explore ">
                    <li>
                      <button  className=" text-xl leading-[1] text-white  flex h-12 w-12 items-center justify-center">
                        <iconify-icon icon="bxl:facebook"></iconify-icon>
                      </button>
                    </li>
                    <li>
                      <button  className=" text-xl leading-[1] text-white flex h-12 w-12 items-center justify-center">
                        <iconify-icon icon="bxl:twitter"></iconify-icon>
                      </button>
                    </li>
                    <li>
                      <button  className="  text-xl leading-[1]  flex h-12 w-12 items-center justify-center text-white ">
                        <iconify-icon icon="bxl:linkedin"></iconify-icon>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course-content p-6">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">Selina Gomez</h4>
                <div>UI/UX Designer</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="section-padding bg-[url('/images/all-img/section-bg-12.png')] bg-no-repeat bg-cover">
        <div className="container">
          <div className="grid  lg:grid-cols-2 grid-cols-1  xl:gap-[60px] gap-6">
            <div>
              <div className="slider-nav">
                <div className="single-item">
                  <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px] rounded-md">
                    <img src="/images/all-img/t1.png" alt="" className=" object-cover w-full h-full rounded-md" />
                  </div>
                </div>
                <div className="single-item">
                  <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px]  rounded-md">
                    <img src="/images/all-img/t1.png" alt="" className=" object-cover w-full h-full rounded-md" />
                  </div>
                </div>
                <div className="single-item">
                  <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px]  rounded-md">
                    <img src="/images/all-img/t1.png" alt="" className=" object-cover w-full h-full rounded-md" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mini-title">Testimonial</div>
              <h4 className="column-title ">
                Our Tallented Students Valuable
                <span className="shape-bg text-black">
                  Feedback</span>
              </h4>
              <div className="slider-for mt-10">
                <div className="single-item">
                  <div>
                    <h3 className=" text-2xl font-bold text-black mb-8">“It’s Truly The Best Solution For Me”</h3>
                    <div className="mb-8">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There are many
                      variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                    </div>
                    <div>
                      <span className=" block  font-semibold text-black mb-1">Alfred Helmerich</span>
                      <span className=" block  font-semibold text-primary">Executive Training Manager</span>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div>
                    <h3 className=" text-2xl font-bold text-black mb-8">“It’s Truly The Best Solution For Me”</h3>
                    <div className="mb-8">
                      There are many variations of passages of Lorem Ipsum available,
                    </div>
                    <div>
                      <span className=" block  font-semibold text-black mb-1">Alfred Helmerich</span>
                      <span className=" block  font-semibold text-primary">Executive Training Manager</span>
                    </div>
                  </div>
                </div>
                <div className="single-item">
                  <div>
                    <h3 className=" text-2xl font-bold text-black mb-8">“It’s Truly The Best Solution For Me”</h3>
                    <div className="mb-8">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                    </div>
                    <div>
                      <span className=" block  font-semibold text-black mb-1">Alfred Helmerich</span>
                      <span className=" block  font-semibold text-primary">Executive Training Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-x-5 flex lg:mt-10 mt-8">
                <button className="lg:h-[64px] lg:w-[64px] h-12 w-12 flex flex-col items-center justify-center rounded-md bg-white hover:bg-primary
                      hover:text-white shadow-box slickprev text-3xl text-primary">
                  <iconify-icon icon="heroicons:arrow-left-20-solid"></iconify-icon>
                </button>
                <button className="lg:h-[64px] lg:w-[64px] h-12 w-12 flex flex-col items-center justify-center rounded-md bg-white hover:bg-primary
                      hover:text-white shadow-box slickprev text-3xl text-primary">
                  <iconify-icon icon="heroicons:arrow-right-20-solid"></iconify-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join With Us */}
      <div className=" section-padding bg-white bg-[url('/images/all-img/section-bg-13.png')]  bg-no-repeat">
        <div className="container">
          <div className="text-center mb-14">
            <div className="mini-title">Join With Us</div>
            <div className="column-title ">
              Upcoming
              <span className="shape-bg">Events</span>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">


            <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
              <div className="course-thumb h-[297px] rounded-t-[8px]  relative">
                <img src="/images/all-img/e1.png" alt="" className=" w-full h-full object-cover rounded-t-[8px]" />
              </div>
              <div className="course-content p-8">
                <h4 className=" text-xl mb-5 font-bold">
                  <Link href="/" className=" hover:text-primary transition duration-150">
                    International Art Fair 2022
                  </Link>
                </h4>
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                    </span>
                    <span>Thu, Oct 5, 2023 03:48 PM</span>
                  </li>
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                    </span>
                    <span>Humberg City, Germany</span>
                  </li>
                </ul>
                <Link href="/" className="btn px-8 py-[11px] bg-black text-white hover:bg-primary">Book A Seat</Link>
              </div>
            </div>

            <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
              <div className="course-thumb h-[297px] rounded-t-[8px]  relative">
                <img src="/images/all-img/e2.png" alt="" className=" w-full h-full object-cover rounded-t-[8px]" />
              </div>
              <div className="course-content p-8">
                <h4 className=" text-xl mb-5 font-bold">
                  <Link href="/" className=" hover:text-primary transition duration-150">
                    International Art Fair 2022
                  </Link>
                </h4>
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                    </span>
                    <span>Thu, Oct 5, 2023 03:48 PM</span>
                  </li>
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                    </span>
                    <span>Humberg City, Germany</span>
                  </li>
                </ul>
                <Link href="/" className="btn px-8 py-[11px] bg-black text-white hover:bg-primary">Book A Seat</Link>
              </div>
            </div>

            <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
              <div className="course-thumb h-[297px] rounded-t-[8px]  relative">
                <img src="/images/all-img/e3.png" alt="" className=" w-full h-full object-cover rounded-t-[8px]" />
              </div>
              <div className="course-content p-8">
                <h4 className=" text-xl mb-5 font-bold">
                  <Link href="/" className=" hover:text-primary transition duration-150">
                    International Art Fair 2022
                  </Link>
                </h4>
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                    </span>
                    <span>Thu, Oct 5, 2023 03:48 PM</span>
                  </li>
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                    </span>
                    <span>Humberg City, Germany</span>
                  </li>
                </ul>
                <Link href="/" className="btn px-8 py-[11px] bg-black text-white hover:bg-primary">Book A Seat</Link>
              </div>
            </div>

          </div>
        </div>
      </div>?

      {/* dual cards */}
      <div className="lg:pt-10 section-padding-bottom bg-white bg-[url('/images/all-img/section-bg-14.png')] bg-center bg-no-repeat
              bg-cover">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
            <div className="bg-[url('/images/all-img/bg-ins-1.png')] bg-cover  bg-no-repeat p-10  rounded-md">
              <div className="max-w-[337px]">
                <div className="mini-title">Build Your Career</div>
                <div className=" text-[34px] text-black leading-[51px]">
                  Become an
                  <span className="shape-bg">Instructor</span>
                </div>
                <div className=" mt-6 mb-12">
                  Learn at your own pace, move the between multiple courses.
                </div>
                <button  className="btn btn-primary">Apply Now</button>
              </div>
            </div>
            <div className="bg-[url('/images/all-img/bg-ins-2.png')]  bg-no-repeat p-10 bg-cover rounded-md">
              <div className="max-w-[337px]">
                <div className="mini-title">Build Your Career</div>
                <div className=" text-[34px] text-black leading-[51px]">
                  Get Free
                  <span className="shape-bg">Courses</span>
                </div>
                <div className=" mt-6 mb-12">
                  Learn at your own pace, move the between multiple courses.
                </div>
                <button  className="btn btn-black">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Question */}
      <div className="section-padding  bg-white bg-[url('/images/all-img/section-bg-15.png')] bg-bottom  bg-cover bg-no-repeat">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
            <div>
              <div className="mini-title">Frequently Asked Question</div>
              <div className="column-title ">
                General
                <span className="shape-bg">Questions</span>
              </div>
              <ul className="list accrodains space-y-[30px] lg:max-w-[470px]">
                <li>
                  <button type="button" className="accrodain-button">
                    <span>What does it take excellent author?</span>
                    <span className="icon-pm"></span>
                  </button>
                  <div className="content hidden">
                    Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every
                    learning program that you complete at no additional cost.
                  </div>
                </li>
                <li>
                  <button type="button" className="accrodain-button">
                    <span>Who will view my content?
                    </span>
                    <span className="icon-pm"></span>
                  </button>
                  <div className="content hidden">
                    Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every
                    learning program that you complete at no additional cost.
                  </div>
                </li>
                <li>
                  <button type="button" className="accrodain-button">
                    <span>What does it take become an author?
                    </span>
                    <span className="icon-pm"></span>
                  </button>
                  <div className="content hidden">
                    Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every
                    learning program that you complete at no additional cost.
                  </div>
                </li>
                <li>
                  <button type="button" className="accrodain-button">
                    <span>How to Change my Password easily?</span>
                    <span className="icon-pm"></span>
                  </button>
                  <div className="content hidden">
                    Learn at your own pace, move between multiple courses, or switch to a different course. Earn a certificate for every
                    learning program that you complete at no additional cost.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img src="/images/all-img/faq.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Blog & Airticle */}
      <div className=" section-padding">
        <div className="container">
          <div className="text-center">
            <div className="mini-title">Blog & Airticle</div>
            <div className="column-title ">
              Take A Look At The Latest
              <span className="shape-bg">Articles</span>
            </div>
          </div>
          <div className="grid  xl:grid-cols-2 grid-cols-1 gap-7 pt-10">


            <div className=" bg-white shadow-box7 rounded-[8px] group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
              hover:shadow-box8 sm:flex p-4 sm:space-x-6 space-y-6 sm:space-y-0">
              <div className="flex-none">
                <div className="sm:w-[200px] h-[182px]  rounded  relative">
                  <img src="/images/all-img/c1.png" alt="" className=" w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="course-content flex-1">
                <div className="mb-4">
                  <span className="inline-block text-base text-secondary bg-[#E3F9F6] font-medium rounded px-[10px] py-1">
                    Learning</span>
                </div>
                <h4 className=" lg:text-2xl lg:leading-[36px] text-1xl mb-4 font-bold">
                  <Link href="/" className=" group-hover:text-primary transitio duration-150">Fashion and Luxury Fashion in a Changing</Link>
                </h4>
                <div className="flex   space-x-6">
                  <button className=" flex items-center space-x-2" >
                    <img src="/images/svg/calender2.svg" alt="" />
                    <span>21 Feb, 22</span>
                  </button>
                  <button className=" flex items-center space-x-2" >
                    <img src="/images/svg/clock2.svg" alt="" />
                    <span>4k Lesson</span>
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-box7 rounded-[8px] group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
              hover:shadow-box8 sm:flex p-4 sm:space-x-6 space-y-6 sm:space-y-0">
              <div className="flex-none">
                <div className="sm:w-[200px] h-[182px]  rounded  relative">
                  <img src="/images/all-img/c2.png" alt="" className=" w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="course-content flex-1">
                <div className="mb-4">
                  <span className="inline-block text-base text-secondary bg-[#E3F9F6] font-medium rounded px-[10px] py-1">
                    Learning</span>
                </div>
                <h4 className=" lg:text-2xl lg:leading-[36px] text-1xl mb-4 font-bold">
                  <Link href="/" className=" group-hover:text-primary transitio duration-150">Creative Writing Through Storytelling</Link>
                </h4>
                <div className="flex   space-x-6">
                  <button className=" flex items-center space-x-2" >
                    <img src="/images/svg/calender2.svg" alt="" />
                    <span>21 Feb, 22</span>
                  </button>
                  <button className=" flex items-center space-x-2" >
                    <img src="/images/svg/clock2.svg" alt="" />
                    <span>4k Lesson</span>
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-box7 rounded-[8px] group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
              hover:shadow-box8 sm:flex p-4 sm:space-x-6 space-y-6 sm:space-y-0">
              <div className="flex-none">
                <div className="sm:w-[200px] h-[182px]  rounded  relative">
                  <img src="/images/all-img/c3.png" alt="" className=" w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="course-content flex-1">
                <div className="mb-4">
                  <span className="inline-block text-base text-secondary bg-[#E3F9F6] font-medium rounded px-[10px] py-1">
                    Learning</span>
                </div>
                <h4 className=" lg:text-2xl lg:leading-[36px] text-1xl mb-4 font-bold">
                  <Link href="/" className=" group-hover:text-primary transitio duration-150">Product Manager Learn The Skills &amp; Job</Link>
                </h4>
                <div className="flex   space-x-6">
                  <button className=" flex items-center space-x-2" >
                    <img src="/images/svg/calender2.svg" alt="" />
                    <span>21 Feb, 22</span>
                  </button>
                  <button className=" flex items-center space-x-2" >
                    <img src="/images/svg/clock2.svg" alt="" />
                    <span>4k Lesson</span>
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-box7 rounded-[8px] group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
              hover:shadow-box8 sm:flex p-4 sm:space-x-6 space-y-6 sm:space-y-0">
              <div className="flex-none">
                <div className="sm:w-[200px] h-[182px]  rounded  relative">
                  <img src="/images/all-img/c4.png" alt="" className=" w-full h-full object-cover rounded" />
                </div>
              </div>
              <div className="course-content flex-1">
                <div className="mb-4">
                  <span className="inline-block text-base text-secondary bg-[#E3F9F6] font-medium rounded px-[10px] py-1">
                    Learning</span>
                </div>
                <h4 className=" lg:text-2xl lg:leading-[36px] text-1xl mb-4 font-bold">
                  <Link href="/" className=" group-hover:text-primary transitio duration-150">The Power of Podcast for Storytelling</Link>
                </h4>
                <div className="flex   space-x-6">
                  <Link className=" flex items-center space-x-2" >
                    <img src="/images/svg/calender2.svg" alt="" />
                    <span>21 Feb, 22</span>
                  </Link>
                  <Link className=" flex items-center space-x-2" >
                    <img src="/images/svg/clock2.svg" alt="" />
                    <span>4k Lesson</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
