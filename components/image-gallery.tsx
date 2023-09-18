'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { fadeIn, slideIn, textContainer, textVariant, textVariant2 } from '@/lib/utils'
const imageGalleryData = [
  {
    imageUrl: '/Doors/door1.jpeg',
    title: 'Shooting Stars',
    subtitle: 'THE SUBTITLE 1',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door2.jpeg',
    title: 'The Catalyzer',
    subtitle: 'THE SUBTITLE 2',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door3.jpeg',
    title: 'The 400 Blows',
    subtitle: 'THE SUBTITLE 3',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door4.jpeg',
    title: 'Neptune',
    subtitle: 'THE SUBTITLE 4',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door5.jpeg',
    title: 'Holden Caulfield',
    subtitle: 'THE SUBTITLE 5',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door6.jpeg',
    title: 'Alper Kamu',
    subtitle: 'THE SUBTITLE 6',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door7.jpeg',
    title: 'Alper Kamu',
    subtitle: 'THE SUBTITLE 6',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door7.jpeg',
    title: 'Alper Kamu',
    subtitle: 'THE SUBTITLE 6',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door8.jpeg',
    title: 'Alper Kamu',
    subtitle: 'THE SUBTITLE 6',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door9.jpeg',
    title: 'Alper Kamu',
    subtitle: 'THE SUBTITLE 6',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
  {
    imageUrl: '/Doors/door10.jpeg',
    title: 'Alper Kamu',
    subtitle: 'THE SUBTITLE 6',
    description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
  },
];

const ImageGallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <motion.div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1    className="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-[#666DD4]">
            Our Service Range
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Adity Management Services Pvt Ltd is your one-stop solution for all your fire-rated needs. We specialize in the supply, installation, and maintenance of fire-rated doors, glass partitions, wooden doors, flush doors, hardware, and more, offering comprehensive interior solutions with a focus on safety and elegance.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {imageGalleryData.map((item, index) => (
            <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
              <div className="flex relative">
                <Image
                  alt={`gallery-${index}`}
                  src={item.imageUrl}
                  layout="fill"
                  objectFit="cover"
                  

/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ImageGallery;
