import { MapPin, MessageSquarePlus, Paperclip, PhoneCall } from 'lucide-react';
import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

const ContactDetails = [
    {
        Icon: <MessageSquarePlus />,
        Title: "Chat with us",
        description: "Speak to our friendly team",
        link: "chat.untitle.com"
    },
    {
        Icon: <Paperclip />,
        Title: "Mail us",
        description: "We are here to help",
        link: "sonujha@aditymanagement.com"
    },
    {
        Icon: <MapPin />,
        Title: "Visit us",
        description: "Visit our office",
        link: "Plot No - 50, Amedkar city Pusta Road, sec-123"
    },
    {
        Icon: <PhoneCall />,
        Title: "Call us",
        description: "Monday to Friday 10 a.m to 7 p.m",
        link: "+91-8750413041"
    },
];

const ContactUs = () => {
    return (
        <section className='flex flex-col space-y-5 px-4 py-10 mt-5 mb-5 '>
            <h1 className='items-center justify-center flex text-center mt-9 font-extrabold md:text-4xl text-3xl bg-clip-text text-transparent dark:bg-gradient-to-r text-[#666DD4] dark:from-indigo-300 dark:to-purple-400'>Contact our friendly team</h1>
            <h4 className='items-center justify-center uppercase flex text-center font-bold text-md text-[#ED2A7C] '>Let us know how we can help?</h4>

            <div className="flex justify-between gap-4 mt-12">
                {ContactDetails.map((item, index) => (
                    <Card key={index} className='h-[16rem] w-[16rem] border rounded-md flex flex-col justify-between items-start'>
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
            </div>
        </section>
    );
}

export default ContactUs;
