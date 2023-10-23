import Image from 'next/image'
import React from 'react'

const BrandLogos = () => {
  return (
    <div className="brands-area pt-[30px] pb-[15px] bg-gray-400/20 ">
      <div className="container">

        <ul className="flex flex-wrap items-center lg:justify-between justify-center  ">

          <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150  ">
            <button  className=" block">
              <Image src="/brands_logos/Logo00.png" alt="" width={171} height={171} /></button>
          </li>

          <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150  ">
            <button  className=" block">
              <Image src="/brands_logos/Logo01.png" alt="" width={171} height={171} /></button>
          </li>

          <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150  ">
            <button  className=" block">
              <Image src="/brands_logos/Logo02.png" alt="" width={171} height={171} /></button>
          </li>

          <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150  ">
            <button  className=" block">
              <Image src="/brands_logos/Logo03.png" alt="" width={171} height={171} /></button>
          </li>

          <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150  ">
            <button  className=" block">
              <Image src="/brands_logos/Logo04.png" alt="" width={171} height={171} /></button>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default BrandLogos