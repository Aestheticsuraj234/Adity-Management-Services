import ImageGallery from "@/components/image-gallery";
import Image from "next/image";


const ourservicesData = [
  {
    id: 1,
    title: "WOODEN FIRE DOORS",
    description: "Durable fire-resistant wooden doors for enhanced safety.",
    image: "/images/wooden-fire.svg",
  },
  {
    id: 2,
    title: "WOODEN FLUSH DOOR",
    description: "Stylish and secure wooden flush doors.",
    image: "/images/wooden-door.svg",

  },
  {
    id: 3,
    title: "STEEL FIRE DOORS",
    description: "Robust steel doors with fire-resistant properties.",
    image: "/images/steel.svg",
  },
  {
    id: 4,
    title: "FIRE RETARDANT PAINT",
    description: "Protective coatings for fire prevention.",
    image: "/images/pain-bucket.svg",
  },
  {
    id: 5,
    title: "ALL TYPE OF SAFETY EQUIPMENT",
    description: "Comprehensive safety solutions for various needs.",
    image: "/images/equipment.svg",
  },
  {
    id: 6,
    title: "FIRE RATED CLEAR GLASS OF SAINT GOBIAN MAKE",
    description: "Saint Gobain's transparent fire-rated glass for added security.",
    image: "/images/glass-water.svg",
  },
  {
    id: 7,
    title: "GLAZED DOOR",
    description: "Elegant doors with glass panels for aesthetics and safety.",
    image: "/images/glazed-door.svg",

  }
]

const OurServices = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#666DD4] dark:text-white">CAMC SERVICES & MAINTENANCE SERVICE.</h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {ourservicesData.map((service) => (
            <div key={service.id}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Image
                  src={service.image}
                  alt={`Picture of ${service.title}`}
                  width={141}
                  height={141}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
      <ImageGallery/>
    </section>
  );
}

export default OurServices;
