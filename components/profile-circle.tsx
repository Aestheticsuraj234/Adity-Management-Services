import { profileEnd } from 'console';
import { Instagram, Linkedin, Twitch, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { InvalidatedProjectKind } from 'typescript';

interface ProfileIntefaceprops {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedin: string;
  instagram: string;
  twitter: string;

}

const profileData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    image: '/images/profilepi.svg',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',

  },
  {
    id: 2,
    name: 'John Doe',
    position: 'CEO',
    image: '/images/profilepi.svg',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',

  },
  {
    id: 3,
    name: 'John Doe',
    position: 'CEO',
    image: '/images/profilepi.svg',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',

  },
  {
    id: 4,
    name: 'John Doe',
    position: 'CEO',
    image: '/images/profilepi.svg',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',

  },
  {
    id: 5,
    name: 'John Doe',
    position: 'CEO',
    image: '/images/profilepi.svg',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',

  }
]

const ProfileCircle = () => {
  return (
    profileData.map((profile: ProfileIntefaceprops) => (
      <div key={profile.id} className='flex flex-col items-center justify-center space-y-2'>

        <>
          <div className='
    w-32 h-32
    rounded-full
    overflow-hidden
    shadow-lg
    hover:shadow-xl
    transition-shadow
    duration-300
    ease-in-out
    flex items-center
    justify-center  
  '>
            <Image
              src={profile.image}
              alt='profile picture'
              width={120}
              height={120}
              className='rounded-full'
            />
          </div>
          <h1 className='text-2xl font-bold text-zinc-800'>{profile.name}</h1>
          <h2 className='text-lg font-semibold text-zinc-600'>{profile.position}</h2>
          <span className='flex flex-row justify-center items-center gap-3'>
            <Link href={profile.linkedin}>  <Linkedin className='text-[#0072b1]' /></Link>
            <Link href={profile.instagram}>   <Instagram className='text-[#d62976]' /></Link>
            <Link href={profile.twitter}>   <Twitter className='text-[#00acee]' /></Link>

          </span>
        </>

      </div>
    ))



  );
};

export default ProfileCircle;