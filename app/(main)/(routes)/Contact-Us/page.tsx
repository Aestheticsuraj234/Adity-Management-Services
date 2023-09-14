"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { LocateIcon, Mail, MapPin, Navigation2, Phone } from 'lucide-react';






const FormSchema = z.object({
  Name: z.string().min(5, {
    message: "Name cannot be empty .",
  }),
  Email: z.string().email({
    message: "Please enter a valid email address.",

  }),
  Message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),

})


const ContactUs = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log(values)
      toast(
        {
          title: "Success",
          description: "Message sent successfully.",
        }
      )
      // await fetch("/api/contact", {
      //   method: "POST",
      //   body: JSON.stringify(values),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      // toast.success("Message sent successfully.")
      // form.reset()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,

      })
    }
  }

  return (
    <section className='flex flex-col justify-around items-center w-full mt-20 mx-4 '>
      <div className='h-screen border  md:w-[70rem] w-screen flex-1  flex flex-row items-center justify-between mb-10  shadow-md rounded-md'>
        {/* Section-1 for contact form */}
        <div className='h-full w-[50rem] flex flex-col md:justify-start  md:items-start justify-center items-center px-10 py-10'>
          <h1 className='text-4xl font-bold text-[#666DD4]'>Get  in Touch</h1>
          <p className='text-[#898989] font-bold text-lg mt-4 mb-4'>We are here for you! How Can help?.</p>

          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-3/4 w-full space-y-6 mb-10">
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Name" {...field} className='outline-none focus:outline-none bg-[#F5F4F9]' />
                    </FormControl>
                    <FormDescription>
                      Enter a Name  (at least 5 characters).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Email Address" {...field} className='outline-none focus:outline-none bg-[#F5F4F9]' />
                    </FormControl>
                    <FormDescription>
                      Enter a Name  (at least 5 characters).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter Message" {...field} className='outline-none focus:outline-none bg-[#F5F4F9]' />
                    </FormControl>
                    <FormDescription>
                      Enter a Name  (at least 5 characters).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <button type="submit" className="bg-[#666DD4] text-white font-semibold py-2 px-4  w-full rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>

          </Form>
        </div>
        {/* section-2 for image showing */}
        <div className='h-full hidden w-[50rem] md:flex flex-col justify-center items-center'>
          <Image
            src={"/images/contact-us.svg"}
            alt="contact-us"
            width={450}
            height={450}

          />

          <div className='flex flex-col items-start justify-center mx-4 space-y-4 '>

            <div className='flex flex-row  items-center justify-center space-x-4'>
              <div className='px-4 py-4 rounded-full  bg-[#666DD4]/30'>
                <Phone size={20} color='#666DD4' />
              </div>
              <p className='text-[#898989] font-bold text-base'>+91 1234567890</p>
            </div>
            <div className='flex flex-row  items-center justify-center space-x-4'>
              <div className='px-4 py-4 rounded-full  bg-[#666DD4]/30'>
                <Mail size={20} color='#666DD4' />
              </div>
              <p className='text-[#898989] font-bold text-base'>sonujha@aditymanagement.com</p>
            </div>
            <div className='flex flex-row  items-center justify-center space-x-4'>
              <div className='px-4 py-4 rounded-full  bg-[#666DD4]/30'>
                <MapPin size={20} color='#666DD4' />
              </div>
              <p className='text-[#898989] font-bold text-base'>Plot No - 50 , Amedkar city Pusta Road , sec -123</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default ContactUs