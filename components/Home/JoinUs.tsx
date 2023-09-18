"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {  fadeIn, slideIn, textVariant ,zoomIn} from '@/lib/utils';

const JoinUs = ({animate}:any) => {
    return (
        <motion.div
            className='flex flex-col items-center justify-center text-center mt-10 mb-6'
            variants={fadeIn('up', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <Image
                src={'/images/Join.svg'}
                alt="Picture Of Join us"
                width={550}
                height={550}
            />
            <motion.p  variants={zoomIn(
                0.5,
                1,
            )}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}

             className='font-semibold text-zinc-600 text-lg mt-4 mb-5 '>
                Join us in a journey where <span className='text-[#4B55EB]'>safety and style harmonize</span>, and your spaces bloom with elegance. At Adity Management Services Pvt Ltd,<span className='text-[#4B55EB]'>we're your partners in protection and perfection, specializing in supplying, installing, and maintaining fire-rated doors</span> , glass, partitions, wooden doors, flush doors, hardware, and more. Your vision, our expertise – let's create perfection together.
            </motion.p>
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Button variant={"brand"} size={"default"}>
                    Download Catalogue
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default JoinUs
