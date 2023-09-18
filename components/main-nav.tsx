"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Building2, ChevronDown, Rocket, Users } from "lucide-react";



export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();




  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6 z-50", className)}
      {...props}
    >
      <Link

        href={"/"}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === "/" ? 'text-black dark:text-white' : 'text-muted-foreground'
        )}
      >
        Home
      </Link>
      <Link

        href={"#"}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === "#" ? 'text-black dark:text-white' : 'text-muted-foreground'
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger className={cn(

            'text-sm font-medium flex-row flex items-center justify-center gap-1 transition-colors outline-none hover:text-primary',
            pathname === "#" ? 'text-black dark:text-white' : 'text-muted-foreground'

          )}>About <ChevronDown size={18} /></DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-1 justify-center items-start  flex-col">

            <Link href={"/About/Company-Profile"}><DropdownMenuItem className="flex  w-full justify-center items-start gap-3"> <Building2 size={18} className="text-zinc-600" /> Company Profile</DropdownMenuItem></Link>
            <Link href={"/About/Our-Team"}><DropdownMenuItem className="flex w-full justify-center items-start gap-3"><Rocket size={18} className="text-zinc-600" /> Our Team</DropdownMenuItem></Link>
            <Link href={"/About/Our-Mission-Vision"}> <DropdownMenuItem className="flex  w-full justify-center items-start gap-3"><Users size={18} className="text-zinc-600" />  Our Mission & Vision</DropdownMenuItem></Link>

          </DropdownMenuContent>
        </DropdownMenu>

      </Link>
      <Link

        href={"/our-services"}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === "/our-services" ? 'text-black dark:text-white' : 'text-muted-foreground'
        )}
      >
        Our Services
      </Link>
      <Link

        href={"/contact-us"}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === "/contact-us" ? 'text-black dark:text-white' : 'text-muted-foreground'
        )}
      >
        Contact Us
      </Link>

    </nav>
  )
};
