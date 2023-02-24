import Image from "next/image";
import bannerImg from "@/Assets/Images/digital_ocean_serias.webp"

export default function SingleCourse()
{
  return(

      <div className={"bg-stone-50 drop-shadow-xl rounded-3xl w-[21rem] smd:w-[22rem] flex flex-col justify-between pb-6 transition-all ease-linear lg:hover:scale-125"}>

          <Image className={"rounded-3xl"} src={bannerImg} alt={"Banner Image"}/>

          <div className={"px-5 my-5"}>

              <h1 className={"text-justify font-bold text-lg lg:text-xl mx-auto"} >Digital Ocean Series: Deployment on Cloud</h1>

              <p className={"text-justify h-[6.5rem] text-zinc-600 mt-3 text-sm lg:h-[7.8rem] lg:text-base line-clamp-5"}>
                  This course is focused on providing hands-on experience with deploying applications on DigitalOcean's
                  cloud platform using Droplets. Students will learn how to create and configure Droplets, connect to
                  them via SSH, and use popular tools such as Git, Nginx, and Node.js to deploy web applications.
                  The course will also cover best practices for securing and managing Droplets, as well as scaling and
                  monitoring applications. By the end of the course, students will have the skills and knowledge necessary
                  to deploy and manage their own applications on DigitalOcean's platform.
              </p>

          </div>

          <button className={"bg-primary-medium hover:bg-primary-light transition-all ease-in-out rounded-3xl py-3 text-center text-md font-semibold text-zinc-600 lg:text-xl w-56 mx-auto"}> Start Learning </button>

      </div>

  );
}