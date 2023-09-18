"use client"
import React from 'react'
import { Bot, BookCopy, Flame, DoorOpen, GlassWater, LeafyGreen, Wrench, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import {  fadeIn, textVariant} from '@/lib/utils';

const OurDiverseServices = ({animte}:any) => {
    const FeatureItems = [
        {
            "id": 1,
            "title": "Fire-Rated Doors",
            "description": "Our doors are not just protective shields; they are a symbol of security and style.",
            "icon": (<Flame size={35} className='text-[#DCA414]' />)
        },
        {
            "id": 2,
            "title": "Wooden Doors",
            "description": "Our doors are not just protective shields; they are a symbol of security and style.",
            "icon": (<DoorOpen size={35} className='text-[#04B501]' />)
        },
        {
            "id": 3,
            "title": "Glass Solutions",
            "description": "Our doors are not just protective shields; they are a symbol of security and style.",
            "icon": (<GlassWater size={35} className='text-[#08B0D5]' />)
        },
        {
            "id": 4,
            "title": "Flush Doors",
            "description": "Seamlessly blend functionality and aesthetics with our flush door solutions..",
            "icon": (<LeafyGreen size={35} className='text-[#ED2A7C]' />)
        },
        {
            "id": 5,
            "title": "Hardware",
            "description": "The finest details matter, and our hardware options ensure perfection.",
            "icon": (<Wrench size={35} className={"text-[#364AFD]"} />)
        },
        {
            "id": 6,
            "title": "Maintenance Services",
            "description": "We don't just install; we stand by our creations, providing comprehensive maintenance to keep them in prime condition..",
            "icon": (<AlertTriangle size={35} className='text-[#F90F0F]' />)
        },
    ]

    return (
        <motion.section
            className='glassmorphism flex w-[100%] flex-col p-4 mt-12 rounded-lg max-w-full'
            variants={fadeIn('up', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.h4 
             variants={textVariant(0.5)}
            className='items-center justify-center uppercase flex text-center font-bold text-md text-[#ED2A7C]'>
                We provide a range of services to elevate your spaces.
            </motion.h4>
            <motion.h1
                className='items-center justify-center flex text-center mt-9 font-extrabold md:text-4xl text-3xl  text-[#666DD4] dark:from-indigo-300 dark:to-purple-400'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Our Diverse Services
            </motion.h1>

            <div className="grid md:grid-cols-2 gird-cols-1 gap-4 mt-12">
                {FeatureItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="p-4 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: item.id * 0.2 }}
                    >
                        <h3 className="text-xl font-bold flex flex-row justify-start text-zinc-600 dark:bg-gradient-to-r dark:from-indigo-300 dark:to-purple-400 items-center dark:bg-clip-text dark:text-transparent md:text-left gap-3">
                            {item.icon}
                            {item.title}
                        </h3>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}

export default OurDiverseServices
