import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
    return (
        <>
            <div className="bg-zinc-200  h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
                <div className="p-5 ">
                    <ul>
                        <p className="text-gray-800  font-bold md:text-3xl text-xl pb-6">
                            Adity Management<span className="text-[#4B55EB]">Services</span>
                        </p>
                        <div className="flex gap-6 pb-5">
                            <Instagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                            <Twitter className="text-2xl cursor-pointer hover:text-[#4B55EB]" />
                            <Linkedin className="text-2xl cursor-pointer hover:text-[#4B55EB]" />
                           
                        </div>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800  font-bold text-2xl pb-4">Services</p>
                        <li className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                            WOODEN FIRE DOORS
                        </li>
                        <li className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                            WOODEN FLUSH DOOR
                        </li>
                        <li className="text-gray-500   text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                            STEEL FIRE DOORS
                        </li>
                        <li className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                            FIRE RETARDANT PAINT
                        </li>
                        <li className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                            ALL TYPE OF SAFETY EQUIPMENT

                        </li>
                        <li className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                            FIRE RATED CLEAR GLASS OF SAINT GOBIAN MAKE
                        </li>
                        <li className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                            GLAZED DOOR
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul className="flex flex-col space-y-1">
                        <p className="text-gray-800  font-bold text-2xl pb-4">Company</p>
                        <Link href={"/About/Our-Team"} className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                        Our Team
                        </Link>
                        <Link href={"/About/Company-Profile"}  className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                        Company Profile
                        </Link>
                        <Link  href={"/About/Our-Mission-Vision"} className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                        Our Mission & Vission
                        </Link>
                        <Link href={"https://drive.google.com/drive/folders/1-k1Zvov6v2EFnibLVbG6bI4v77TxwUY1"} className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                        Downloads Catalogue 
                        </Link>
                      
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800  font-bold text-2xl pb-4">Support</p>
                        <Link href={"/ContactUs"} className="text-gray-500  text-md pb-2 font-semibold hover:text-[#4B55EB] cursor-pointer">
                            Contact-us
                        </Link> 
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50 ">
                <h1 className=" text-gray-800 font-semibold">
                    © 2023-2024 All rights reserved
                </h1>
            </div>
        </>
    );
}

export default Footer;