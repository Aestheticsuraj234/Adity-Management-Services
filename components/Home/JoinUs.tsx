import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

const JoinUs = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center mt-10 mb-6'>
            <Image
            src={'/images/Join.svg'}
            alt="Picture Of Join us"
            width={550}
            height={550}

            />
            <p className='font-semibold text-zinc-600 text-lg mt-4 mb-5 '>
            Join us in a journey where <span className='text-[#4B55EB]'>safety and style harmonize</span>, and your spaces bloom with elegance. At Adity Management Services Pvt Ltd,<span className='text-[#4B55EB]'>we're your partners in protection and perfection, specializing in supplying, installing, and maintaining fire-rated doors</span> , glass, partitions, wooden doors, flush doors, hardware, and more. Your vision, our expertise – let's create perfection together.
            </p>
            <Button variant={"brand"} size={"default"} >
            Download Catalouge
            </Button>
        </div>
    )
}

export default JoinUs
