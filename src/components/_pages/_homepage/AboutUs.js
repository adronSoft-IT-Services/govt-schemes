import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className="about-area section-padding-top pb-16 relative z-[1]">
      <div className=" absolute right-[7%] top-[20%] z-[-1] hidden xl:block">
        <Image width={34} height={43} src="/images/icon/h.svg" alt="" />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-[70px] lg:gap-10 gap-6">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <Image width={738} height={704} src="/images/all-img/about5.png" alt="" />
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
                    <Image width={32} height={32} src="/images/icon/video.svg" alt="" className="" />
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
                    <Image width={32} height={32} src="/images/icon/web-white.svg" alt="" className=" " />
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
  )
}

export default AboutUs