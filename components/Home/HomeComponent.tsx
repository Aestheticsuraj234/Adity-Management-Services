"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Loader2, MoveRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from '../ui/use-toast'
import { sendMail } from '@/lib/mail'


const FormSchema = z.object({
  name: z.string().min(5, {
    message: "Name cannot be empty .",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",

  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),

})


const HomeComponent = () => {
  const [isSending, setIsSending] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {

    try {
      console.log(values)
      setIsSending(true)

      await sendMail(values.email, values.name, values.message)
      toast(
        {
          title: "Success",
          description: "Message sent successfully.",
        }
      )
      setIsSending(false)

      form.reset()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,

      })
      setIsSending(false)
    }
  }

  return (
    <section className="">
      <motion.div
        className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        initial={{ opacity: 0, x: -50 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }}   // Animation when component is mounted
        transition={{ duration: 0.6 }}
      >
        <div className="mr-auto place-self-center lg:col-span-7">
          <motion.h1
            className="max-w-3xl bg-[#666DD4]   bg-clip-text text-transparent mb-2 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl"
          >
            WELCOME TO ADITY MANAGEMENT SERVICES.
          </motion.h1>
          <motion.p
            className="max-w-2xl font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-xl "
          >
            Your Trusted Partner for Comprehensive Fire-Rated Solutions , Style, and More
          </motion.p>
          <motion.p
            className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-base lg:text-lg "
          >
            Welcome to Adity Management Services Pvt Ltd, your trusted source for all things fire-rated. With a strong commitment to safety and quality, we&apos;ve been aiming to be a leader in the industry since day one.
          </motion.p>
          <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center px-5 py-3 mr-3 text-lg text-center text-white rounded-lg font-bold bg-[#666DD4]  focus:ring-4 focus:ring-primary-300 ">  Let&apos;s Connect✨
              <MoveRight /></DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Lets Connect</DialogTitle>
                <DialogDescription>
                  👋Send Your message Query to us!🚀
                </DialogDescription>
              </DialogHeader>
              <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Name" {...field} className='outline-none focus:outline-none bg-[#F5F4F9]' />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email" {...field} className='outline-none focus:outline-none bg-[#F5F4F9]' />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter Message" {...field} className='outline-none focus:outline-none bg-[#F5F4F9]' />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button type="submit" className="bg-[#666DD4] text-white font-semibold py-2 px-4  w-full rounded focus:outline-none focus:shadow-outline">{
                    isSending ? <Loader2
                      size={20}
                      strokeWidth={2}
                      className="animate-spin"
                    /> : "Submit"

                  }</button>
                </form>
              </Form>

            </DialogContent>
          </Dialog>




        </div>
        <motion.div
          className="lg:mt-0 lg:col-span-5 lg:flex mt-10"
          initial={{ opacity: 0, x: 50 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }}   // Animation when component is mounted
          transition={{ duration: 0.6, delay: 0.2 }} // Delayed animation
        >
          <Image src="/images/Hero.svg" alt="hero" width={450} height={450} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeComponent
