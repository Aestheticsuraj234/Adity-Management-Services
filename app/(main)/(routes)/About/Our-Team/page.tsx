import ProfileCircle from '@/components/profile-circle'
import React from 'react'

const OurTeam = () => {
  return (
    <section className='mt-20 grid 
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      mx-10  gap-4 mb-10'>
      <h1 className='
        col-span-full
        text-center
        text-4xl
        font-bold
        text-[#666DD4]
        dark:text-zinc-100
        mb-10

        
        '>Meet the Team</h1>
      <ProfileCircle />


    </section>
  )
}

export default OurTeam