"use client"
import ProfileCircle from '@/components/profile-circle'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textContainer, textVariant, textVariant2 } from '@/lib/utils';

const OurTeam = () => {
  return (
    <motion.section 
    variants={fadeIn('right', 'tween', 0.2, 1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className='mt-20 grid 
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      mx-10  gap-4 mb-10'>
      <motion.h1 
      variants={textVariant(0.5)}
      className='
        col-span-full
        text-center
        text-4xl
        font-bold
        text-[#666DD4]
        dark:text-zinc-100
        mb-10

        
        '>Meet the Team</motion.h1>
      <ProfileCircle />


    </motion.section>
  )
}

export default OurTeam