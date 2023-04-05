import CourseCard from "@/Components/HomePageComponent/SingleReuseableComponents/CourseCard";
import premiumCourseBanner1 from "@/Assets/Images/premiumCourseBanner1.png";
import premiumCourseBanner2 from "@/Assets/Images/premiumCourseBanner2.png";
import premiumCourseBundle1 from "@/Assets/Images/premiumCourseBunddle1.png";

import Link from "next/link";

export default function PremiumCoursesHub()
{
  return(

      <div className={"py-10"}>

        <h1 className={"mb-10 lg:mb-16 text-center font-bold underline underline-offset-8 text-primary-dark text-3xl lg:text-5xl"}> Our Premium Courses </h1>




          <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-12 2xl:gap-x-28 gap-y-12 w-fit mx-auto lg:px-10"}>

              <CourseCard
                  data={"hardCoded"}
                  bannerImage={premiumCourseBanner1}
                  bannerTitle={"Master Spring Boot with Real time Project"}
                  bannerDescription={"In this course, you will learn everything you need to know about developing applications with Spring Boot, the popular Java framework for building microservices and web applications. (Backend with Java)"}
                  fullLink={"https://courses.learncodewithdurgesh.com/learn/Master-Spring-Boot-With-Project"}
                  activeStatus={true}
              />

              <CourseCard
                  data={"hardCoded"}
                  bannerImage={premiumCourseBanner2}
                  bannerTitle={"Complete Ecommerce Project using  Rect JS (Electronic Store)"}
                  bannerDescription={"In this project we are going to create E Commerce project using React JS. This is a project-based front-end course in Hindi."}
                  fullLink={"https://courses.learncodewithdurgesh.com/learn/Ecommerce-using-React-js"}
                  activeStatus={true}
              />


              <div className={"lg:col-span-2 xl:col-span-1 lg:flex lg:flex-row lg:justify-center xl:inline"}>
                  <CourseCard
                      data={"hardCoded"}
                      bannerImage={premiumCourseBundle1}
                      bannerTitle={"Full Stack React + Spring Boot"}
                      bannerDescription={"This bundle contain two important front-end and backed course . This is full stack bundle containing full eCommerce project using spring boot and reacts step by step."}
                      fullLink={"https://courses.learncodewithdurgesh.com/learn/Fullstack-React-Spring-Boot"}
                      activeStatus={true}
                  />
              </div>

          </div>







        <div className={"flex flex-row justify-center lg:justify-end lg:pr-14 mt-12"}>
          <Link href={'https://courses.learncodewithdurgesh.com/learn'}>
            <h1 className={"bg-secondary-dark hover:bg-secondary-medium transition-all ease-in-out rounded-md py-2 text-center text-xs font-semibold text-white px-3 lg:px-10 lg:text-md"} >
              More Premium Courses..
            </h1>
          </Link>
        </div>

      </div>

  );
}