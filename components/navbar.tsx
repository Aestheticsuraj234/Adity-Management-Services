
import React from 'react'
import { MainNav } from './main-nav'
import { ThemeToggle } from './theme-toggle'
import { SearchBar } from './search-bar'
import { Code2, Github } from 'lucide-react'

import { MobileToggle } from './mobile-toggle'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='md:border-b md:fixed top-0 
        md:z-50 w-full  bg-white 
'>
            <div className='md:flex hidden h-16 items-center px-4'>
                <Link href={"/"} className='flex flex-row items-center space-x-2'>
                    <Image
                        src={"/images/logo.svg"}
                        alt="Adity-Management-Services-Logo"
                        width={340}
                        height={50}
                        priority={true}
                    />
                </Link>
                <MainNav className='mx-6' />
                <div className='ml-auto flex items-center space-x-4'>
                    <SearchBar />
                    {/* <ThemeToggle /> */}
                </div>
            </div>
            <MobileToggle />
        </div>
    )
}

export default Navbar