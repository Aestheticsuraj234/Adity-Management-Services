import { Bot, Brain, CircleDollarSign, Infinity, Ruler, ShieldCheck } from "lucide-react"

const WhyChooseUs = () => {
    return (
        <>
        <h1 className='items-center justify-center flex text-center mt-9 font-extrabold md:text-4xl text-3xl  dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r text-[#666DD4] dark:from-indigo-300 dark:to-purple-400'>Why Choose Us ? </h1>
        <section className='bg-[#0f172a] flex w-[100%] border  flex-col p-4 mt-12 rounded-lg max-w-full mb-10 '>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-6">
                {/* Card 1 */}
                <div className="p-4 rounded-lg ">
                    <h3 className="text-xl font-bold flex flex-row justify-start text-white  items-center text-left gap-3">
                        <Ruler size={36} className="text-[#F90F0F]" />
                        Quality Beyond Measure
                    </h3>
                    <p className="text-base  text-white  font-semibold flex justify-start px-11 items-center">
                        The finest details matter, and our hardware options ensure perfection.

                    </p>
                </div>
                <div className="p-4 rounded-lg ">
                    <h3 className="text-xl font-bold flex flex-row justify-start text-white  items-center text-left gap-3">
                        <ShieldCheck size={36} className="text-[#FFA3A3]" />
                        Safety Redefined
                    </h3>
                    <p className="text-base  text-white  font-semibold flex justify-start px-11 items-center">
                        Safety isn't just a word; it's our promise. Trust in us for uncompromised security.

                    </p>
                </div>

                <div className="p-4 rounded-lg ">
                    <h3 className="text-xl font-bold flex flex-row justify-start text-white  items-center text-left gap-3">
                        <Infinity size={36} className="text-[#ED2A7C]" />
                        Endless Possibilities
                    </h3>
                    <p className="text-base  text-white  font-semibold flex justify-start px-11 items-center">
                        We believe in making your dreams a reality. Your vision, our expertise

                    </p>
                </div>
                <div className="p-4 rounded-lg ">
                    <h3 className="text-xl font-bold flex flex-row justify-start text-white  items-center text-left gap-3">
                        <Infinity size={36} className="text-[#ED2A7C]" />
                        Endless Possibilities
                    </h3>
                    <p className="text-base  text-white  font-semibold flex justify-start px-11 items-center">
                        We believe in making your dreams a reality. Your vision, our expertise

                    </p>
                </div>
                <div className="p-4 rounded-lg ">
                    <h3 className="text-xl font-bold flex flex-row justify-start text-white  items-center text-left gap-3">
                        <Brain size={36} className="text-[#81DDF1]" />
                        Aesthetic Brilliance
                    </h3>
                    <p className="text-base  text-white  font-semibold flex justify-start px-11 items-center">
                        We don't just protect; we enhance. Expect nothing less than aesthetic brilliance.

                    </p>
                </div>

                <div className="p-4 rounded-lg ">
                    <h3 className="text-xl font-bold flex flex-row justify-start text-white  items-center text-left gap-3">
                        <CircleDollarSign size={36} className="text-[#67FC64]" />
                        Customer-Centrist
                    </h3>
                    <p className="text-base  text-white  font-semibold flex justify-start px-11 items-center">
                        Your satisfaction is our driving force. We're here to exceed your expectations.

                    </p>
                </div>


            </div>


        </section>
        </>
    )
}

export default WhyChooseUs