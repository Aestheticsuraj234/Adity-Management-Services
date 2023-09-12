import React from 'react'
import Link from 'next/link'
import { MoveRight } from "lucide-react"

import Image from 'next/image'


const HomeComponent = () => {
  return (
    <section className="mt-10">

      <div className="grid max-w-screen-xl   px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl  bg-[#666DD4] dark:bg-gradient-to-r dark:from-purple-200 dark:via-purple-400 dark:to-purple-800 bg-clip-text text-transparent mb-2 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl ">Our Mission</h1>
          <p className="max-w-2xl  font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">At Adity Management Services Pvt Ltd, our mission is to safeguard lives and property by providing top-tier fire-rated solutions and comprehensive interior services</p>
          <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-base lg:text-lg dark:text-gray-400 ">We are dedicated to ensuring the safety and elegance of every space we touch, exceeding industry standards and customer expectations. Our commitment to excellence drives us to deliver quality, security, and style in every project we undertake.</p>


        </div>
        <div className="hidden  lg:mt-0 lg:col-span-5 lg:flex mt-10">
          <Image src="/images/mission.svg" alt="hero" width={450} height={450} />
        </div>
      </div>
      <hr/>
      
      <div className="grid max-w-screen-xl   px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="hidden  lg:mt-0 lg:col-span-5 lg:flex mt-10">
          <Image src="/images/vision.svg" alt="hero" width={450} height={450} />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl  bg-[#666DD4] dark:bg-gradient-to-r dark:from-purple-200 dark:via-purple-400 dark:to-purple-800 bg-clip-text text-transparent mb-2 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl ">Our Mission</h1>
          <p className="max-w-2xl  font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">At Adity Management Services Pvt Ltd, our mission is to safeguard lives and property by providing top-tier fire-rated solutions and comprehensive interior services</p>
          <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-base lg:text-lg dark:text-gray-400 ">We are dedicated to ensuring the safety and elegance of every space we touch, exceeding industry standards and customer expectations. Our commitment to excellence drives us to deliver quality, security, and style in every project we undertake.</p>


        </div>
       
      </div>
    </section>
  )
}

export default HomeComponent