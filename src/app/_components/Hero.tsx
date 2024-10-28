import Image from "next/image";
import bgImage from "../../../public/images/spotlight-four.jpg";
import memberIcons from "../../../public/images/logo.png"; 
const Hero = () => {
  return (
    <section className="hero bg-cover bg-center h-screen relative text-white flex items-center justify-center shadow-2xl">
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Barbell Lifting Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="container mx-auto flex flex-col items-start justify-center h-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="w-full md:w-[50%]">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            FIND YOUR <br /> STRENGTH.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-md">
            We are dedicated to helping you transform your body and mind through the power of fitness.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex items-center space-x-4">
        <div className="flex -space-x-3">
          <Image
            src={memberIcons} 
            alt="Active Members"
            width={50}
            height={50}
            className="rounded-full border-2 border-white"
          />
        </div>

        <div className="text-sm md:text-base">
          <span className="block font-semibold">100+</span>
          <span className="block">Active Members</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
