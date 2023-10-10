import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-[url('/images/banner/3.png')]  bg-no-repeat bg-center overflow-hidden">
      <div className="container relative">
        {/* <div className="xl:max-w-[570px] lg:max-w-[770px] xl:py-[174px] lg:py-28 md:py-20 py-14"> */}
        <div className="xl:max-w-[700px] lg:max-w-[770px] lg:py-40 md:py-20 py-14">
          <h1 className='text-6xl'>
            Government&nbsp;
            <span className=" text-secondary inline-block bg-[url('/images/banner/shape.svg')]  bg-no-repeat bg-bottom">
              Schemes&nbsp;
            </span>
            For Everyone
          </h1>
          <div className=" plain-text text-gray leading-[30px] mt-8 mb-14">
          All government schemes for every Indians with their perfect abilities match.
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0">
            <a href="#" className="btn btn-primary">Explore Now</a>
          </div>
        </div>
        <div className="imge-box absolute right-[50px] top-1/2  -translate-y-1/2 hidden xl:block   ">
          <Image src="/images/banner/map1.png" alt="Govt Schemes" width={430} height={500} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection