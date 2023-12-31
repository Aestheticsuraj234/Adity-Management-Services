"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {  staggerContainer, textVariant,fadeIn } from '@/lib/utils';

const WhoWeAre = () => {
    
    return (
        <motion.div
            className='flex flex-col items-center justify-center text-center mt-10 mb-6'
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.h1 variants={textVariant(0.5)} className='md:text-4xl text-3xl font-extrabold text-[#666DD4] py-4 '>Who We Are</motion.h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="226" height="12" viewBox="0 0 326 12" fill="none">
                <path d="M6.04779 6.00018H320.054" stroke="#666DD4" strokeWidth="11" stroke-linecap="round" />
            </svg>
            <p className='font-bold text-zinc-600 md:text-2xl text-xl mt-4 '>
                Adity Management Services Pvt Ltd is your one-stop solution for all your fire-rated needs. We specialize in the supply, installation, and maintenance of fire-rated doors, glass partitions, wooden doors, flush doors, hardware, and more, offering comprehensive interior solutions with a focus on safety and elegance.
            </p>
        </motion.div>
    );
}

export default WhoWeAre;
