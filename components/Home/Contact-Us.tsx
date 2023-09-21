'use client';
import { MapPin, MessageSquarePlus, Paperclip, PhoneCall } from 'lucide-react';
import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { motion } from 'framer-motion';
import { fadeIn, slideIn, textVariant, zoomIn } from '@/lib/utils';


const ContactDetails = [
    {
        Icon: <MessageSquarePlus color='#666DD4' />,
        Title: "Chat with us",
        description: "Speak to our friendly team",
        link: "chat.untitle.com"
    },
    {
        Icon: <Paperclip color='#666DD4' />,
        Title: "Mail us",
        description: "We are here to help",
        link: "sonujha@aditymanagement.com"
    },
    {
        Icon: <MapPin color='#666DD4' />,
        Title: "Visit us",
        description: "Visit our office",
        link: "Plot No - 50, Amedkar city Pusta Road, sec-123"
    },
    {
        Icon: <PhoneCall color='#666DD4' />,
        Title: "Call us",
        description: "Monday to Friday 10 a.m to 7 p.m",
        link: "+91-8750413041"
    },
];

const ContactUs = ({ animate }: any) => {
    return (
        <motion.section
            className='flex flex-col space-y-5 px-4 py-10 mt-5 mb-5'
            variants={fadeIn('up', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.h1
                className='items-center justify-center flex text-center mt-9 font-extrabold md:text-4xl text-3xl bg-clip-text text-transparent  text-[#666DD4] '
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Contact our friendly team
            </motion.h1>
            <motion.h4
                className='items-center justify-center uppercase flex text-center font-bold text-md text-[#ED2A7C]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Let us know how we can help?
            </motion.h4>

            <motion.div
                className="flex flex-col items-center md:flex-row justify-between gap-4 mt-12"
                variants={fadeIn('down', 'tween', 0.2, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                {ContactDetails.map((item, index) => (
                    <Card key={index} className='h-[16rem] md:w-[18rem]  w-full flex-1 border rounded-md flex flex-col justify-between items-start'>
                        <CardHeader className='h-[3rem] w-[3rem] border px-4 rounded-md justify-center items-center'>
                            {item.Icon}
                        </CardHeader>
                        <div className='flex flex-col justify-between items-start'>
                            <CardContent>
                                <h1 className='text-xl text-[#000] font-extrabold'>{item.Title}</h1>
                                <span className='text-sm font-medium text-zinc-600'>{item.description}</span>
                            </CardContent>
                            <CardFooter>
                                <p className='text-base text-zinc-900 '>{item.link}</p>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </motion.div>
        </motion.section>
    );
}

export default ContactUs;
