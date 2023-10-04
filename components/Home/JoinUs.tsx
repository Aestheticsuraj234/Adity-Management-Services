"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, textVariant, zoomIn } from '@/lib/utils';
import Link from 'next/link'

const JoinUs = ({ animate }: any) => {
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
            <motion.p
                variants={zoomIn(0.5, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='font-semibold text-zinc-600 text-lg mt-4 mb-5 '
            >
                Join us in a journey where <span className='text-[#4B55EB]'>safety and style harmonize</span>, and your spaces bloom with elegance. At Adity Management Services Pvt Ltd,<span className='text-[#4B55EB]'>where your partners in protection and perfection, specializing in supplying, installing, and maintaining fire-rated doors</span>, glass, partitions, wooden doors, flush doors, hardware, and more. Your vision, our expertise – lets create perfection together.
            </motion.p>
            <Link
                href={"https://drive.google.com/drive/folders/1-k1Zvov6v2EFnibLVbG6bI4v77TxwUY1"}

            >
                <Button variant={"brand"} size={"default"}>
                    Download Catalogue
                </Button>
            </Link>
        </motion.div>
    )
}

export default JoinUs
