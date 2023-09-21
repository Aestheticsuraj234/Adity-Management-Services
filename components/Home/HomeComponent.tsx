"use client"
import React from 'react'
import Link from 'next/link'
import { MoveRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from 'next/image'

const HomeComponent = ({ animate }: any) => {

  return (
    <section className="">
      <motion.div
        className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        initial={{ opacity: 0, x: -50 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }}   // Animation when component is mounted
        transition={{ duration: 0.6 }}
      >
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.h1
            className="max-w-3xl bg-[#666DD4]   bg-clip-text text-transparent mb-2 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl"
          >
            WELCOME TO ADITY MANAGEMENT SERVICES.
          </motion.h1>
          <motion.p
            className="max-w-2xl font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl "
          >
            Your Trusted Partner for Comprehensive Fire-Rated Solutions , Style, and More
          </motion.p>
          <motion.p
            className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-base lg:text-lg "
          >
            Welcome to Adity Management Services Pvt Ltd, your trusted source for all things fire-rated. With a strong commitment to safety and quality, we&apos;ve been aiming to be a leader in the industry since day one.
          </motion.p>
          <motion.a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-lg text-center text-white rounded-lg font-bold bg-[#666DD4]  focus:ring-4 focus:ring-primary-300 "
            whileHover={{ scale: 1.05 }} // Animation on hover
          >
            Let&apos;s Connect✨
            <MoveRight />
          </motion.a>
        </div>
        <motion.div
          className="lg:mt-0 lg:col-span-5 lg:flex mt-10"
          initial={{ opacity: 0, x: 50 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }}   // Animation when component is mounted
          transition={{ duration: 0.6, delay: 0.2 }} // Delayed animation
        >
          <Image src="/images/Hero.svg" alt="hero" width={450} height={450} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeComponent
