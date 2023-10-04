import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adity Management Services pvt ltd', 
  description: "Your Trusted Partner for Comprehensive Fire-Rated Solutions , Style, and More Welcome to Adity Management Services Pvt Ltd, your trusted source for all things fire-rated. With a strong commitment to safety and quality, weve been aiming to be a leader in the industry since day one",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={cn(inter.className,
          "bg-white dark:bg-gray-800"
        )}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
          <Toaster />
    
        </ThemeProvider>

      </body>
    </html>
  )
}
