import YoutubePlayer from "@/Components/MasterTemplets/YoutubePlayer";
import PlayerCourseCard from "@/Components/FreeCoursesComponent/PlayerCourseCard";

export default function CourseHome()
{
    let lSymbol = "</"
    let rSymbol = ">"
  return(
      <div className={"flex flex-row "}>

          <div className={"p-7"}>
              <div className={"bg-stone-100 rounded-3xl drop-shadow-xl p-6 flex flex-col justify-center space-y-9"}>

                  {/* Embedded Youtube Video */}
                  <div className={"mx-auto"}>
                      <YoutubePlayer videoId={"9GCeaRPT9Bc"}/>
                  </div>

                  {/* Video Description */}
                  <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-[70rem]"}>

                      <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                          Description
                      </h1>

                      <p className={"mx-6 text-lg mt-8 text-justify"}>
                          In this video we are going discuss the introduction to new series that LearnCodeWithDurgesh going to start
                      </p>

                  </div>

                  {/* Divider Line */}
                  <div className={"rounded-full border border-gray-400 mx-28"}></div>

                  {/* Provided Code */}
                  <div className={"border-x-2 border-primary-medium rounded-3xl py-6 w-[70rem]"}>
                      <h1 className={"font-bold text-center lg:text-left text-3xl underline underline-offset-8 mx-auto w-fit"}>
                          {lSymbol}Code{rSymbol}
                      </h1>

                      <pre className={"mx-6 text-lg mt-4"}>
                          In this video we are going discuss the introduction to new series that LearnCodeWithDurgesh
                          going to start
                      </pre>
                  </div>

                  {/* Divider Line */}
                  <div className={"rounded-full border border-gray-400 mx-28"}></div>

                  {/* Previous / Next Video Buttons */}
                  <div className={"flex flex-row justify-center space-x-20"}>


                      {/* Previous Button */}
                      <a href={"#_"}
                         className={`   relative 
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    p-4 px-7 py-4 
                                    overflow-hidden 
                                    font-bold
                                    text-xl 
                                    text-indigo-600 
                                    transition 
                                    duration-300 
                                    ease-out 
                                    border-2 
                                    border-secondary-medium 
                                    rounded-full 
                                    shadow-md group`}
                      >
                      <span className={`absolute 
                                        inset-0 
                                        flex 
                                        items-center 
                                        justify-center 
                                        w-full h-full 
                                        text-white 
                                        duration-300 
                                        translate-x-full 
                                        bg-secondary-medium 
                                        group-hover:translate-x-0 
                                        ease`}>
                          <svg
                              className={"w-8 h-8"}
                              fill={"none"} stroke={"currentColor"}
                              viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}
                          >
                              <path
                                  strokeLinecap={"round"} strokeLinejoin={"round"}
                                  strokeWidth={"3"} d={"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}
                              >
                              </path>
                          </svg>

                      </span>
                          <span
                              className={"absolute flex items-center justify-center w-full h-full text-secondary-medium transition-all duration-300 transform group-hover:-translate-x-full ease"}>
                          Previous Video
                      </span>
                          <span className={"relative invisible"}> Previous Video </span>
                      </a>


                      {/* Next Button */}
                      <a href={"#_"}
                         className={`   relative 
                                    inline-flex 
                                    items-center 
                                    justify-center 
                                    p-4 px-10 py-4 
                                    overflow-hidden 
                                    font-bold
                                    text-xl 
                                    text-indigo-600 
                                    transition 
                                    duration-300 
                                    ease-out 
                                    border-2 
                                    border-secondary-medium 
                                    rounded-full 
                                    shadow-md group`}
                      >
                      <span className={`absolute 
                                        inset-0 
                                        flex 
                                        items-center 
                                        justify-center 
                                        w-full h-full 
                                        text-white 
                                        duration-300 
                                        -translate-x-full 
                                        bg-secondary-medium 
                                        group-hover:translate-x-0 
                                        ease`}>
                          <svg
                              className={"w-8 h-8"}
                              fill={"none"} stroke={"currentColor"}
                              viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}
                          >
                              <path
                                  strokeLinecap={"round"} strokeLinejoin={"round"}
                                  strokeWidth={"3"} d={"M14 5l7 7m0 0l-7 7m7-7H3"}>
                              </path>
                          </svg>

                      </span>
                          <span
                              className={"absolute flex items-center justify-center w-full h-full text-secondary-medium transition-all duration-300 transform group-hover:translate-x-full ease"}>
                          Next Video
                      </span>
                          <span className={"relative invisible"}>
                          Next Video
                      </span>
                      </a>


                  </div>


              </div>
          </div>

          <div className={"space-y-5 p-5 overflow-y-scroll my-auto h-[127.2vh] bg-stone-100 rounded-3xl drop-shadow-xl"}>

              <PlayerCourseCard courseTitle={"Lets Start new series Deployment Project on Digital Ocean in Hindi"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"What is cloud About Digital Ocean Understanding Client requirements"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Creating First Virtual Machine using Droplet Hindi"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Changing root password droplet very important video"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Using Database on Droplet Database Installation on cloud"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Connecting GUI with MySQL Server running on droplet DB on cloud"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Build Jar With Production environment Variables Spring Boot cloud Spring boot on Digital Ocean"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Uploading Spring Boot Jar to Virtual Machine in Hindi"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Deploying Spring Boot on VM Installing JRE Hindi"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Creating Linux Script for Spring boot startsh stopsh Run spring boot in background Hindi"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Building React App to deploy Preparing react app for hosting on node server in Hindi"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Installing Node JS on VM Deploy React Application on Droplet Deployment on cloud in Hindi"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Working with pm2 how to manage node process Deployment on Digital Ocean"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Buying Cheapest domain for Spring boot Application Buying domain live"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Pointing Domain to IP Working with Nginx Server Working with Ubuntu Firewall Cloud Deployment"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Point domain to Backend Spring Boot Application Step by step Deployment on cloud in Hindi"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Installing Free SSL on Spring Boot and React Application Deployment in Cloud"} courseLink={"#"}/>
              <PlayerCourseCard courseTitle={"Finish Deployment Series Why Linux is important for developer"} courseLink={"#"}/>

          </div>

      </div>
  );
}