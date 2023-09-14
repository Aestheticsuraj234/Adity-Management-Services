import React from "react";
import {
  Bot,
  Brain,
  CircleDollarSign,
  Infinity,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const cardData = [
  {
    icon: <Ruler size={36} className="text-[#F90F0F]" />,
    title: "Quality Beyond Measure",
    description: "The finest details matter, and our hardware options ensure perfection.",
  },
  {
    icon: <ShieldCheck size={36} className="text-[#FFA3A3]" />,
    title: "Safety Redefined",
    description: "Safety isn't just a word; it's our promise. Trust in us for uncompromised security.",
  },
  {
    icon: <Infinity size={36} className="text-[#ED2A7C]" />,
    title: "Endless Possibilities",
    description: "We believe in making your dreams a reality. Your vision, our expertise.",
  },
  {
    icon: <Brain size={36} className="text-[#81DDF1]" />,
    title: "Aesthetic Brilliance",
    description: "We don't just protect; we enhance. Expect nothing less than aesthetic brilliance.",
  },
  {
    icon: <CircleDollarSign size={36} className="text-[#67FC64]" />,
    title: "Customer-Centrist",
    description: "Your satisfaction is our driving force. We're here to exceed your expectations.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <h1 className='items-center justify-center flex text-center mt-9 font-extrabold md:text-4xl text-3xl  dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r text-[#666DD4] dark:from-indigo-300 dark:to-purple-400'>Why Choose Us ? </h1>
      <section className='bg-[#0f172a] flex w-[100%] border  flex-col p-4 mt-12 rounded-lg max-w-full mb-10 '>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-6">
          {cardData.map((card, index) => (
            <div key={index} className="p-4 rounded-lg ">
              <h3 className="text-xl  font-bold flex flex-row justify-start text-white  items-center text-left gap-3">
                {card.icon}
                {card.title}
              </h3>
              <p className="md:text-base text-sm text-white font-medium  md:font-semibold flex justify-start px-11 items-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
