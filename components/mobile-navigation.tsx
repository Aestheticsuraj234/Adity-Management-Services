"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Building2, User2, ChevronDown, Code2, Rocket, Users, Home, HammerIcon, Contact } from "lucide-react";
export function MobileNavigation({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();




    return (
        <>

            <nav
                className={cn("md:hidden flex flex-col flex-1  fixed top-0  items-start justify-start mx-6 my-4 ", className)}
                {...props}
            >
                <div className='flex flex-row items-center space-x-2 '>
                    <Code2 className='text-zinc-800' />
                    <h1 className='text-xl font-bold text-zinc-800  ' >  CODERSYUG</h1>
                </div>
                <div className="flex flex-1 flex-col space-y-10 mt-10 w-full ">
                    <Link

                        href={"/"}
                        className={cn(
                            'text-lg flex items-center  justify-start gap-5 font-bold transition-colors hover:text-primary',
                            pathname === "/" ? 'text-black ' : 'text-muted-foreground'
                        )}

                    >
                        <Home />
                        Home
                    </Link>
                    <Link

                        href={"#"}
                        className={cn(
                            'text-lg flex items-center  justify-start gap-5 font-bold transition-colors hover:text-primary',
                            pathname === "#" ? 'text-black ' : 'text-muted-foreground'
                        )}
                    >
                        <DropdownMenu >
                            <DropdownMenuTrigger className={cn(

                                'text-lg flex items-center  justify-start gap-5 font-bold transition-colors hover:text-primary',
                                pathname === "#" ? 'text-black ' : 'text-muted-foreground'

                            )}>
                                <User2 />
                                About <ChevronDown size={18} /></DropdownMenuTrigger>
                            <DropdownMenuContent side="left" className="flex flex-1 justify-center items-start  flex-col">

                                <Link href={"/About/Company-Profile"}><DropdownMenuItem className="flex  w-full justify-center items-start gap-3"> <Building2 size={18} className="text-zinc-600" /> Company Profile</DropdownMenuItem></Link>
                                <Link href={"/About/Our-Team"}><DropdownMenuItem className="flex w-full justify-center items-start gap-3"><Rocket size={18} className="text-zinc-600" /> Our Team</DropdownMenuItem></Link>
                                <Link href={"/About/Our-Mission-Vision"}> <DropdownMenuItem className="flex  w-full justify-center items-start gap-3"><Users size={18} className="text-zinc-600" />  Our Mission & Vision</DropdownMenuItem></Link>

                            </DropdownMenuContent>
                        </DropdownMenu>

                    </Link>
                    <Link

                        href={"/OurServices"}
                        className={cn(
                            'text-lg flex items-center  justify-start gap-5 font-bold transition-colors hover:text-primary',
                            pathname === "/OurServices" ? 'text-black ' : 'text-muted-foreground'
                        )}
                    >
                        <HammerIcon />
                        Our Services
                    </Link>
                    <Link

                        href={"/ContactUs"}
                        className={cn(
                            'text-lg flex items-center  justify-start gap-5 font-bold transition-colors hover:text-primary',
                            pathname === "/ContactUs" ? 'text-black ' : 'text-muted-foreground'
                        )}
                    >
                        <Contact />
                        Contact Us
                    </Link>
                </div>
            </nav>
        </>
    )
};