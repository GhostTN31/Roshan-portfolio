import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// import components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24"
        >
          {/* text part */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Roshan.T</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              As a front-end developer with 1+ year of hands-on experience, I
              specialize in building sleek, user-friendly web interfaces. I am
              adept at leveraging modern technologies and best practices to
              create seamless digital experiences.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/roshan_updatedCV_2024 june.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-500"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-none
                 rounded-full flex justify-center items-center 
                 text-base text-linkedin hover:bg-accent hover:text-primary
                 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo part */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
