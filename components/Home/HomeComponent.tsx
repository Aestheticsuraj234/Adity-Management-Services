import React from 'react'
import Link from 'next/link'
import { MoveRight } from "lucide-react"

import Image from 'next/image'


const HomeComponent = () => {
    return (
        <section className="">
          
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-3xl  bg-[#666DD4] dark:bg-gradient-to-r dark:from-purple-200 dark:via-purple-400 dark:to-purple-800 bg-clip-text text-transparent mb-2 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl "> WELCOME TO ADITY MANAGEMENT SERVICES.</h1>
                    <p className="max-w-2xl  font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 ">Your Trusted Partner for Comprehensive Fire-Rated Solutions , Style, and More</p>
                    <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-base lg:text-lg dark:text-gray-400 ">Welcome to Adity Management Services Pvt Ltd, your trusted source for all things fire-rated. With a strong commitment to safety and quality, we've been aiming to be a leader in the industry since day one.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-lg  text-center text-white rounded-lg  font-bold  bg-[#666DD4] dark:bg-gradient-to-r dark:from-indigo-300 dark:to-purple-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Let's Connect✨
                        <MoveRight />
                    </a>

                </div>
                <div className=" lg:mt-0 lg:col-span-5 lg:flex mt-10">
                    <Image src="/images/Hero.svg" alt="hero" width={450} height={450} />
                </div>
            </div>
        </section>
    )
}

export default HomeComponent