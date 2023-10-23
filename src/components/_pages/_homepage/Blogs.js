import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogs = () => {
  return (
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
                <Image width={200} height={200} src="/images/all-img/c1.png" alt="" className=" w-full h-full object-cover rounded" />
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
                  <Image width={20} height={20} src="/images/svg/calender2.svg" alt="" />
                  <span>21 Feb, 22</span>
                </button>
                <button className=" flex items-center space-x-2" >
                  <Image width={20} height={20} src="/images/svg/clock2.svg" alt="" />
                  <span>4k Lesson</span>
                </button>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-box7 rounded-[8px] group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
            hover:shadow-box8 sm:flex p-4 sm:space-x-6 space-y-6 sm:space-y-0">
            <div className="flex-none">
              <div className="sm:w-[200px] h-[182px]  rounded  relative">
                <Image width={200} height={200} src="/images/all-img/c2.png" alt="" className=" w-full h-full object-cover rounded" />
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
                  <Image width={20} height={20} src="/images/svg/calender2.svg" alt="" />
                  <span>21 Feb, 22</span>
                </button>
                <button className=" flex items-center space-x-2" >
                  <Image width={20} height={20} src="/images/svg/clock2.svg" alt="" />
                  <span>4k Lesson</span>
                </button>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-box7 rounded-[8px] group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
            hover:shadow-box8 sm:flex p-4 sm:space-x-6 space-y-6 sm:space-y-0">
            <div className="flex-none">
              <div className="sm:w-[200px] h-[182px]  rounded  relative">
                <Image width={200} height={200} src="/images/all-img/c3.png" alt="" className=" w-full h-full object-cover rounded" />
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
                  <Image width={20} height={20} src="/images/svg/calender2.svg" alt="" />
                  <span>21 Feb, 22</span>
                </button>
                <button className=" flex items-center space-x-2" >
                  <Image width={20} height={20} src="/images/svg/clock2.svg" alt="" />
                  <span>4k Lesson</span>
                </button>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-box7 rounded-[8px] group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
            hover:shadow-box8 sm:flex p-4 sm:space-x-6 space-y-6 sm:space-y-0">
            <div className="flex-none">
              <div className="sm:w-[200px] h-[182px]  rounded  relative">
                <Image width={200} height={200} src="/images/all-img/c4.png" alt="" className=" w-full h-full object-cover rounded" />
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
                <button className=" flex items-center space-x-2" >
                  <Image width={20} height={20} src="/images/svg/calender2.svg" alt="" />
                  <span>21 Feb, 22</span>
                </button>
                <button className=" flex items-center space-x-2" >
                  <Image width={20} height={20} src="/images/svg/clock2.svg" alt="" />
                  <span>4k Lesson</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blogs