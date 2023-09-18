"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, textContainer, textVariant, textVariant2 } from '@/lib/utils';
const CompanyProfile = () => {
  return (
    <section className="mt-10">

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="md:grid flex flex-col-reverse justify-center items-center   max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

        <motion.div

          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}



          className="mr-auto place-self-center lg:col-span-7 ">
          <motion.h1
            variants={textVariant(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-3xl  bg-[#666DD4] dark:bg-gradient-to-r dark:from-purple-200 dark:via-purple-400 dark:to-purple-800 bg-clip-text text-transparent mb-2 text-xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl "> Company Profile.</motion.h1>

          <motion.p
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-2xl  font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-base dark:text-gray-400 ">Adity Management Services Pvt Ltd, your trusted partner in fire-rated solutions, is dedicated to delivering excellence since our inception. Established with a commitment to safety and quality, we specialize in supplying, installing, and maintaining fire-rated doors, glass partitions, wooden doors, flush doors, hardware, and more, offering comprehensive interior solutions with an emphasis on safety and elegance.</motion.p>
          <motion.p
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}

            className="max-w-2xl  font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-base dark:text-gray-400 ">Located in [Your Location], our team works tirelessly to ensure your spaces are not only secure but also visually appealing. With a strong foundation and state-of-the-art facilities, we have the capability to meet and exceed your expectations, catering to all safety standards and efficacy.</motion.p>
          <motion.p
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-2xl  font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-base dark:text-gray-400 ">Our expertise extends globally, with a reputation for excellence and successful international projects. A dedicated team of professionals and engineers has helped us build a strong distribution network for fire doors and a customer base in various countries.</motion.p>
          <motion.p
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-2xl  font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-base dark:text-gray-400 ">Join us in creating safe and elegant spaces. Adity Management Services Pvt Ltd - where safety meets style, and where perfection is our promise."</motion.p>


        </motion.div>
        <motion.div variants={fadeIn('left', 'ease', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} className="lg:mt-0 lg:col-span-5 lg:flex md:mt-10 mb-12">
          <Image  src="/images/company-profile.svg" alt="hero" width={450} height={450} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CompanyProfile